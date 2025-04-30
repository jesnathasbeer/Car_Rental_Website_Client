import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";
import carImg from "../../assets/RentACar-img12.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      
      {/* Left side */}
      <div className="flex flex-col justify-center items-center md:w-1/2 p-8">
        <h1
          className="text-[50px] md:text-[100px] font-extrabold text-center leading-tight bg-cover bg-center text-transparent bg-clip-text"
          style={{ backgroundImage: `url(${carImg})` }}
        >
          Get In Touch
        </h1>

        {/* Optional: Phone, Email section */}
        <div className="mt-10 space-y-6">
          <div className="flex items-center gap-3">
            <FaPhone className="text-orange-500 text-2xl" />
            <div>
              <h4 className="font-bold  text-gray-700 dark:text-gray-200">Phone</h4>
              <p className=" text-gray-700 dark:text-gray-200">456 789 1012</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-orange-500 text-2xl" />
            <div>
              <h4 className="font-bold  text-gray-700 dark:text-gray-200">Email</h4>
              <p className=" text-gray-700 dark:text-gray-200">contact@domain.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="md:w-1/2 bg-gray-100 p-8 rounded-tl-[100px] flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-black mb-6">Contact Form</h2>
        <p className="text-gray-600 mb-8">
          Enter your details. And you can feel free to contact us for any kind of information.
        </p>

        <form className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="First Name"
                className="w-full pl-10 border rounded-full px-4 py-3 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div className="relative">
              <FaUser className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full pl-10 border rounded-full px-4 py-3 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 border rounded-full px-4 py-3 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <FaPhone className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full pl-10 border rounded-full px-4 py-3 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full border rounded-2xl px-4 py-3 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
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
            className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-full flex justify-center items-center gap-2 transition duration-300"
          >
            Send message <FaArrowRight />
          </button>
        </form>
      </div>

    </div>
  );
};

export default Contact;
