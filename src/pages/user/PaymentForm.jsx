import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { axiosInstance } from "../../config/axiosInstance";

const PaymentForm = ({ amount, navigate, bookingData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

//  useEffect(() => {
//   if (!amount) {
//     setErrorMsg("Invalid payment amount");
//   }
// }, [amount]);


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
    // Step 1: Create Payment Method from CardElement
    const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (pmError) {
      setErrorMsg(pmError.message);
      setLoading(false);
      return;
    }
   

    // Step 2: Send booking data and paymentMethodId to backend
    const response = await axiosInstance.post("/order/checkout", {
      ...bookingData,
      paymentMethodId: paymentMethod.id,
    });

    // Step 3: Navigate to confirmation page
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
        {loading ? "Processing..." : `Pay ${amount}`}
      </button>
    </form>
  );
};

export default PaymentForm;
