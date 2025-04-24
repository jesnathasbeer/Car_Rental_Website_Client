import React, { useEffect, useState } from "react";
import { CarCards } from "../../components/user/Cards";
import { axiosInstance } from "../../config/axiosInstance";
import { motion } from "framer-motion";
import BgImg from "../../assets/RentACar-img10.jpg"
const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axiosInstance.get("/car/getcars");
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="relative">
  {/* Parallax Background */}
  <div
    className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
    style={{
      backgroundImage: `url(${BgImg})`,
    }}
  ></div>

  {/* Content Overlay */}
  <div className="min-h-screen pt-24 pb-16 px-6 bg-black/60 backdrop-blur-sm">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold text-center mb-10 text-white drop-shadow-lg"
    >
      Explore Our Car Collection
    </motion.h1>

    {loading ? (
      <p className="text-white text-center text-xl animate-pulse">Loading cars...</p>
    ) : cars.length === 0 ? (
      <p className="text-white text-center text-lg">No cars available at the moment.</p>
    ) : (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
      >
        {cars.map((car) => (
          <CarCards car={car} key={car?._id} />
        ))}
      </motion.div>
    )}
  </div>
</div>
  );
};

export default Cars;
