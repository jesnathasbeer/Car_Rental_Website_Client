import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    carName,
    pricePerDay,
    pickupDate,
    returnDate,
    totalAmount,
  } = location.state || {};

  const handlePayment = () => {
    // TODO: Integrate with real payment gateway
    alert("Payment Successful!");
    navigate("/confirmation"); // Navigate to success page
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 max-w-md w-full space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Payment Summary
        </h2>

        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <p><strong>Car:</strong> {carName}</p>
          <p><strong>Price/Day:</strong> ₹{pricePerDay}</p>
          <p><strong>Pickup Date:</strong> {pickupDate}</p>
          <p><strong>Return Date:</strong> {returnDate}</p>
          <p className="text-lg font-semibold">
            Total Amount: <span className="text-green-600 dark:text-green-400">₹{totalAmount}</span>
          </p>
        </div>

        {/* Payment Form (Optional fields) */}
        <div className="space-y-4 mt-6">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"
          />
          <input
            type="text"
            placeholder="Cardholder Name"
            className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-1/2 px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"
            />
            <input
              type="password"
              placeholder="CVV"
              className="w-1/2 px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>

        <button
          onClick={handlePayment}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Pay ₹{totalAmount}
        </button>
      </div>
    </div>
  );
};

export default Payment;
