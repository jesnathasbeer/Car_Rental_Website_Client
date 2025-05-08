import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DarkMode } from "../shared/DarkMode";
import { CircleUser, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const UserHeader = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">RentACar</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center items-center gap-16">
          <nav>
            <ul className="flex justify-center items-center gap-10 font-bold text-md">
              <li>
                <Link to="/" className="hover:text-yellow-600 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cars" className="hover:text-yellow-600 transition duration-300">
                  Cars
                </Link>
              </li>
              <li>
                <Link to="/my-learnings" className="hover:text-yellow-600 transition duration-300">
                  My Bookings
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <DarkMode />
            <Link to="/user/profile" className="hover:text-yellow-600 transition duration-300">
              <CircleUser />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden bg-white text-black dark:bg-black dark:text-white px-4 py-6 shadow-lg"
    >
      <nav>
        <ul className="flex flex-col gap-4 font-bold text-md">
          <li>
            <Link to="/" onClick={toggleMenu} className="hover:text-yellow-600 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cars" onClick={toggleMenu} className="hover:text-yellow-600 transition duration-300">
              Cars
            </Link>
          </li>
          <li>
            <Link to="/my-learnings" onClick={toggleMenu} className="hover:text-yellow-600 transition duration-300">
              My Bookings
            </Link>
          </li>
          <li className="flex items-center justify-between">
            <DarkMode />
            <Link to="/user/profile" onClick={toggleMenu} className="hover:text-yellow-600 transition duration-300">
              <CircleUser />
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  )}
</AnimatePresence>



      {/* Bottom Border */}
      <div className="shadow-md border-b border-gray-700 dark:border-gray-200"></div>
    </div>
  );
};
