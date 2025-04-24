import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-6 md:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">Contact Us</h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
        Have questions or need help? Fill out the form and we'll get back to you shortly.
      </p>

      <form className="max-w-3xl mx-auto bg-white p-8 rounded-lg space-y-6">
        {/* Name Fields in 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="First Name"
                className="w-full pl-10 border rounded-lg px-4 py-2 
  bg-white text-black placeholder-gray-500 
  dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 
  focus:outline-none focus:ring-2 focus:ring-green-400"

              />
            </div>
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full pl-10 border rounded-lg px-4 py-2 
  bg-white text-black placeholder-gray-500 
  dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 
  focus:outline-none focus:ring-2 focus:ring-green-400"

              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="email"
              placeholder="email@domain.com"
              className="w-full pl-10 border rounded-lg px-4 py-2 
  bg-white text-black placeholder-gray-500 
  dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 
  focus:outline-none focus:ring-2 focus:ring-green-400"

            />
          </div>
        </div>

        {/* Phone */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <div className="relative">
            <FaPhone className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full pl-10 border rounded-lg px-4 py-2 
              bg-white text-black placeholder-gray-500 
              dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-green-400"
            
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
          <textarea
            rows="4"
            placeholder="Leave us a message..."
            className="w-full pl-10 border rounded-lg px-4 py-2 
  bg-white text-black placeholder-gray-500 
  dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 
  focus:outline-none focus:ring-2 focus:ring-green-400"

          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <input type="checkbox" className="accent-green-500" />
          <p className="text-sm text-gray-600">
            Agree to our <span className="underline">Terms of service</span> and <span className="underline">Privacy Policy</span>
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-lg flex justify-center items-center gap-2 transition duration-300"
        >
          Send message <FaArrowRight />
        </button>
      </form>
    </div>
  );
};

export default Contact;
