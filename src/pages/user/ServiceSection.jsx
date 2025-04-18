import React from "react";
import carImage from "../../assets/RentACar-img5.png";

const ServiceSection = () => {
  return (
    <div
      id="services"
      className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Left Image */}
      <div className="relative w-full md:w-1/2">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-yellow-300 opacity-50 rounded-full mix-blend-multiply blur-2xl z-0" />
        <img src={carImage} alt="Car" className="relative z-10 w-full" />
      </div>

      {/* Right Services */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Our Services
        </h2>

        <div className="space-y-6">
          {/* Service 1 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-8 bg-yellow-400 rounded-full mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-base-content">
                Car Hire
              </h3>
              <p className="text-base-content/70 max-w-xs">
                We pride ourselves in always going the extra mile for our customers.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-8 bg-yellow-400 rounded-full mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-base-content">
                Hire a driver
              </h3>
              <p className="text-base-content/70 max-w-xs">
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
