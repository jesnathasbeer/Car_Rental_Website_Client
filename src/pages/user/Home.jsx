import React from 'react';
import heroCar from '../../assets/RentACar-img1.jpg';
import AboutSection from './AboutSection';
import BookingSection from './BookingSection';
import ServiceSection from './ServiceSection';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const heroRef = useRef();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div>
      <motion.div
        ref={heroRef}
        style={{
          backgroundImage: `url(${heroCar})`,
          backgroundPositionY: backgroundY,
        }}
        className="relative h-[650px] bg-cover bg-center"
      >
      {/* Hero Section */}
      <div
        className="relative h-[650px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroCar})` }}
      >
        <motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="absolute top-24 right-12 p-8 rounded-xl text-white max-w-md shadow-lg bg-[rgba(0,0,0,0.4)]"
>

         <motion.h1 className="text-4xl font-extrabold text-white">
  <Typewriter
    words={['Safer.', 'Faster.', 'Comfortable.']}
    loop
    cursor
    cursorStyle="_"
    typeSpeed={80}
    deleteSpeed={50}
    delaySpeed={1000}
  />
</motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-lg"
          >
            Get in touch with our
            <br />
            modern cars.
          </motion.p>

          <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="mt-6 px-7 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-medium tracking-wide"
  onClick={() => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Rent Now
</motion.button>

        </motion.div>
      </div>
      </motion.div>
      {/* Sections with Fade-in Animation */}
      <motion.div
        id="booking"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <BookingSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <ServiceSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <AboutSection />
      </motion.div>
    </div>
  );
};

export default Home;
