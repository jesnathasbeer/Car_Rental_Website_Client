import React from "react";
import { FaCalendarAlt, FaCheckCircle, FaGlobe } from "react-icons/fa";

const AboutSection = () => {
  return (
    
    <div id="about" className="py-16 bg-blue-50 text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug text-gray-900 dark:text-white">
        Feel the best experience <br />
        <span className="font-semibold text-gray-900 dark:text-gray-600">with our excellent cars</span>
      </h2>

      {/* Features in vertical stack */}
      <div className="flex flex-col items-center space-y-10 px-4 md:px-24 mt-10">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <FaCalendarAlt className="text-3xl text-blue-800 mb-3" />
          <h4 className="font-semibold text-lg mb-1 text-gray-800 dark:text-white">Book with flexibility</h4>
          <p className="text-gray-800 dark:text-gray-300 text-base max-w-md">
            Easily find car and book with no change fees. You can reach us from anywhere in Kerala.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-yellow-400 p-3 rounded-full mb-3">
            <FaCheckCircle className="text-white text-2xl" />
          </div>
          <h4 className="font-semibold text-lg mb-1 text-gray-800 dark:text-white">Trusted and free</h4>
          <p className="text-gray-800 dark:text-gray-300 text-base max-w-md">
            We’re completely free to use – no hidden charges or fees.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-yellow-400 p-3 rounded-full mb-3">
            <FaGlobe className="text-white text-2xl" />
          </div>
          <h4 className="font-semibold text-lg mb-1 text-gray-800 dark:text-white">We know travel</h4>
          <p className="text-gray-800 dark:text-gray-300 text-base max-w-md">
            We’re always ready to help find your perfect car.
          </p>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="mt-16 bg-[#ddc3a3] shadow-md rounded-md py-4">
      <h3 className="text-2xl md:text-4xl font-serif font-semibold text-yellow-900 italic">
  For Secure, Economic Travel
</h3>
      </div>
    </div>
  );
};

export default AboutSection;
