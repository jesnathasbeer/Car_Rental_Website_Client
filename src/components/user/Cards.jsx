import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const CarCards = ({ car }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-sm transition-all"
    >
      <figure>
        <img
          src={car?.image}
          alt={car?.name}
          className="w-full h-56 object-cover"
        />
      </figure>
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{car?.name}</h2>
        <p className="text-gray-600 mb-4">Price Per Day: <span className="font-semibold">Rs {car?.priceperday}</span> /-</p>
        <div className="flex justify-end">
          <button
            onClick={() => navigate(`/cardetails/${car?._id}`)}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:from-indigo-600 hover:to-blue-500 transition-all shadow-md hover:shadow-lg"
          >
            View
          </button>
        </div>
      </div>
    </motion.div>
  );
};
