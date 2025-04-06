import React from "react";
import { FaCalendarAlt, FaCheckCircle, FaGlobe } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="py-16 bg-white text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Fell the best experience <br />
        <span className="font-semibold">with our excellent cars</span>
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-24 mt-10">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <FaCalendarAlt className="text-3xl text-blue-800 mb-3" />
          <h4 className="font-semibold text-lg mb-1">Book with flexibility</h4>
          <p className="text-gray-600 text-sm">
            Easily find car and book with no change fees.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-yellow-400 p-3 rounded-full mb-3">
            <FaCheckCircle className="text-white text-2xl" />
          </div>
          <h4 className="font-semibold text-lg mb-1">Trusted and free</h4>
          <p className="text-gray-600 text-sm">
            We’re completely free to use – no hidden charges or fees.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-yellow-400 p-3 rounded-full mb-3">
            <FaGlobe className="text-white text-2xl" />
          </div>
          <h4 className="font-semibold text-lg mb-1">We know travel</h4>
          <p className="text-gray-600 text-sm">
            We’re always ready to help find your perfect car.
          </p>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="mt-16 bg-[#ddc3a3] py-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800">
          For Secure, Economic Travel
        </h3>
      </div>
    </div>
  );
};

export default AboutSection;
