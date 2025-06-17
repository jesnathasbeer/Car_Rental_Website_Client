import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { axiosInstance } from "../../config/axiosInstance";

// Replace with your real publishable key
const stripePromise = loadStripe("pk_test_51RGJjgPsy14KEODT7e52M60Oi7KkOLxN7WhHsLIeNPTNMIln1Ge1CcoCI2iOSgzZdfWcy0Wb4mDb2nJHepAX2nAs009TAj6shH");

const CheckoutForm = ({ bookingData, navigate }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    if (!stripe || !elements) {
      setErrorMsg("Stripe is not loaded.");
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (pmError) {
        setErrorMsg(pmError.message);
        setLoading(false);
        return;
      }

      const response = await axiosInstance.post("/order/checkout", {
        ...bookingData,
        paymentMethodId: paymentMethod.id,
      });

      navigate("/confirmation", {
        state: {
          ...bookingData,
          totalAmount: response.data.order.totalAmount,
        },
      });
    } catch (error) {
      setErrorMsg(error.response?.data?.error || "Payment failed");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-4 border rounded-lg bg-white dark:bg-gray-700 dark:text-white">
        <CardElement />
      </div>

      {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        {loading ? "Processing..." : `Pay ₹${bookingData.totalAmount}`}
      </button>
    </form>
  );
};

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingData = location.state || {};

  const options = {
    appearance: { theme: "stripe" },
  };

  if (!location.state) {
    return <p className="text-center mt-10 text-red-600">No booking data found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 max-w-md w-full space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Payment Summary
        </h2>

        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <p><strong>Car ID:</strong> {bookingData.carId}</p>
          <p><strong>Car:</strong> {bookingData.carName}</p>
          <p><strong>Price/Day:</strong> ₹{bookingData.pricePerDay}</p>
          <p><strong>Pickup Date:</strong> {bookingData.pickupDate}</p>
          <p><strong>Return Date:</strong> {bookingData.returnDate}</p>
          <p className="text-lg font-semibold">
            Total Amount: <span className="text-green-600 dark:text-green-400">₹{bookingData.totalAmount}</span>
          </p>
        </div>

        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm bookingData={bookingData} navigate={navigate} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
