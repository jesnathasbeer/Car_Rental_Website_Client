import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import carImg from "../../assets/RentACar-img8.jpg";
import { Link } from "react-router-dom";

const Service = () => {
  return (
   
    <section className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 md:px-12 lg:px-24 py-12 sm:py-16 bg-white">
      
      {/* Left Content */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
        <p className="text-orange-500 uppercase tracking-wider font-semibold text-sm sm:text-base">- Services -</p>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
          We Are Offering Best Services For You
        </h2>
        
        <p className="text-gray-600 text-sm sm:text-base">
          I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system...
        </p>

        <ul className="space-y-4">
          <li className="flex items-start justify-center lg:justify-start text-left">
            <FaCheckCircle className="text-orange-500 mr-3 mt-1 text-lg sm:text-xl" />
            <span className="font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-200">All Type Vehicle Available</span>
          </li>
          <li className="flex items-start justify-center lg:justify-start text-left">
            <FaCheckCircle className="text-orange-500 mr-3 mt-1 text-lg sm:text-xl" />
            <span className="font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-200">You Get 24/7 Roadside Assistance</span>
          </li>
          <li className="flex items-start justify-center lg:justify-start text-left">
            <FaCheckCircle className="text-orange-500 mr-3 mt-1 text-lg sm:text-xl" />
            <span className="font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-200">We Are The UK’s Largest Provider</span>
          </li>
        </ul>

        <div className="pt-4">
           <Link
  to="/about"
           className="px-6 py-2 text-sm sm:text-base bg-black text-white font-medium hover:bg-gray-800 transition-all">
            READ MORE
          </Link>
        </div>
      </div>

      {/* Right Image + Background Blocks */}
      <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0 flex justify-center items-center">
        <img
          src={carImg}
          alt="Car Service"
          className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-full max-w-xl object-contain"
        />
      </div>
    </section>
  );
};

export default Service;
