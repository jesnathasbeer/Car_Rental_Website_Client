import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaUserTie } from "react-icons/fa";
import carImage from "../../assets/RentACar-img5.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServiceSection = () => {
  return (
    <motion.div
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.3 }}
      className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Left Image */}
      <motion.div
        variants={fadeIn}
        className="relative w-full md:w-1/2"
      >
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-yellow-300 opacity-50 rounded-full mix-blend-multiply blur-2xl z-0" />
        <img src={carImage} alt="Car" className="relative z-10 w-full" />
      </motion.div>

      {/* Right Services */}
      <motion.div
        variants={fadeIn}
        className="md:w-1/2"
      >
        <h2 className="text-3xl font-bold text-primary mb-6">Our Services</h2>

        <div className="space-y-6">
          {/* Service 1 */}
          <motion.div
            variants={fadeIn}
            className="flex items-start gap-4"
          >
            <div className="text-yellow-500 text-3xl mt-1">
              <FaCar />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-base-content">
                Car Hire
              </h3>
              <p className="text-base-content/70 max-w-xs">
                We pride ourselves in always going the extra mile for our customers.
              </p>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            variants={fadeIn}
            className="flex items-start gap-4"
          >
            <div className="text-yellow-500 text-3xl mt-1">
              <FaUserTie />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-base-content">
                Hire a driver
              </h3>
              <p className="text-base-content/70 max-w-xs">
                You want to travel and feel comfortable, our drivers are available.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceSection;
