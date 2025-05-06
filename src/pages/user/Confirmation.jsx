import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    carName,
    pickupDate,
    returnDate,
    totalAmount,
  } = location.state || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center max-w-md w-full">
        <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4">Payment Successful!</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Your car has been booked successfully. Here are the details:
        </p>

        <div className="text-left space-y-2 text-gray-700 dark:text-gray-300">
          <p><strong>Car:</strong> {carName}</p>
          <p><strong>Pickup Date:</strong> {pickupDate}</p>
          <p><strong>Return Date:</strong> {returnDate}</p>
          <p className="text-lg font-semibold">
            Paid: <span className="text-green-600 dark:text-green-400">₹{totalAmount}</span>
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
