import React from "react";
import carImage from "../../assets/RentACar-img5.png"; // Make sure this image path is correct

const ServiceSection = () => {
  return (
    <div id="services" className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-10">
      {/* Left Image */}
      <div className="relative w-full md:w-1/2">
        {/* Background Abstract Shape */}
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-yellow-300 opacity-50 rounded-full mix-blend-multiply blur-2xl z-0"></div>
        <img src={carImage} alt="Car" className="relative z-10 w-full" />
      </div>

      {/* Right Services List */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Services</h2>

        <div className="space-y-6">
          {/* Service Item */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-8 bg-yellow-400 rounded-full mt-1"></div>
            <div>
              <h3 className="text-lg font-semibold">Car Hire</h3>
              <p className="text-gray-600 max-w-xs">
                We pride ourselves in always going the extra mile for our customers.
              </p>
            </div>
          </div>

          {/* <div className="flex items-start gap-4">
            <div className="w-12 h-8 bg-yellow-400 rounded-full mt-1"></div>
            <div>
              <h3 className="text-lg font-semibold">Car Sales</h3>
              <p className="text-gray-600">
                We sale the best cars across the world at a competitive price.
              </p>
            </div>
          </div> */}

          <div className="flex items-start gap-4">
            <div className="w-12 h-8 bg-yellow-400 rounded-full mt-1"></div>
            <div>
              <h3 className="text-lg font-semibold">Hire a driver</h3>
              <p className="text-gray-600 max-w-xs">
                You want to travel and feel comfortable, our drivers are available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

