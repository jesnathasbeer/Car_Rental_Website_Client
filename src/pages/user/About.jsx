import React from "react";
import carImg from "../../assets/RentACar-img11.jpg";

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0 flex justify-center items-center bg-gray-100 dark:bg-gray-800">
        <img
          src={carImg}
          alt="Car driving at night"
          className="w-full max-w-2xl object-contain rounded-xl shadow-lg dark:shadow-gray-800"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full lg:w-1/2 bg-gray-100 dark:bg-gray-800 flex flex-col justify-center px-6 sm:px-12 md:px-20 py-12 space-y-8 transition-colors duration-300">
        {/* Heading */}
        <div className="space-y-3 text-center lg:text-left">
          <p className="text-orange-500 uppercase tracking-widest text-sm font-semibold">
            - How It Work -
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Following Working Steps
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Step 1 */}
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-orange-500">01</h3>
            <div className="bg-white dark:bg-gray-700 p-5 rounded-2xl shadow-sm">
              <h4 className="font-bold text-lg mb-1 text-gray-700 dark:text-gray-100">
                Choose A Car
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Check out our range of cars and choose the car of your choice
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-orange-500">02</h3>
            <div className="bg-white dark:bg-gray-700 p-5 rounded-2xl shadow-sm">
              <h4 className="font-bold text-lg mb-1 text-gray-700 dark:text-gray-100">
                Pick Up Date
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                You can select the date for pickup
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-orange-500">03</h3>
            <div className="bg-white dark:bg-gray-700 p-5 rounded-2xl shadow-sm">
              <h4 className="font-bold text-lg mb-1 text-gray-700 dark:text-gray-100">
                Confirm Your Booking
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Confirm booking information related to your car
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-orange-500">04</h3>
            <div className="bg-white dark:bg-gray-700 p-5 rounded-2xl shadow-sm">
              <h4 className="font-bold text-lg mb-1 text-gray-700 dark:text-gray-100">
                Enjoy Driving
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                After confirmation, get the car keys and enjoy your car
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
