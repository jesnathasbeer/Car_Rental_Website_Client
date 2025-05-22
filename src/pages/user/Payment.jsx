import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

// Replace with your real publishable key
const stripePromise = loadStripe("pk_test_51RGJjgPsy14KEODT7e52M60Oi7KkOLxN7WhHsLIeNPTNMIln1Ge1CcoCI2iOSgzZdfWcy0Wb4mDb2nJHepAX2nAs009TAj6shH");

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
          <p><strong>Car:</strong> {carName}</p>
          <p><strong>Price/Day:</strong> ₹{pricePerDay}</p>
          <p><strong>Pickup Date:</strong> {pickupDate}</p>
          <p><strong>Return Date:</strong> {returnDate}</p>
          <p className="text-lg font-semibold">
            Total Amount: <span className="text-green-600 dark:text-green-400">₹{totalAmount}</span>
          </p>
        </div>

        <Elements stripe={stripePromise} options={options}>
          <PaymentForm amount={totalAmount} navigate={navigate} bookingData={location.state} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
