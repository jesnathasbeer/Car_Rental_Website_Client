import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../shared/DarkMode";
import { CircleUser, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const AdminHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-white">
          Admin<span className="text-gray-300 dark:text-white">Panel</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center gap-16">
          <nav>
            <ul className="flex gap-10 font-semibold text-md text-gray-700 dark:text-gray-100">
              <li>
                <Link to="/" className="hover:text-blue-600 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/cars" className="hover:text-blue-600 transition duration-300">
                  Cars
                </Link>
              </li>
              <li>
                <Link to="/user-list" className="hover:text-blue-600 transition duration-300">
                  Users
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <DarkMode />
            <Link to="/admin/profile" className="hover:text-blue-600 transition duration-300">
              <CircleUser />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700 dark:text-gray-200">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-6 shadow-lg"
          >
            <nav>
              <ul className="flex flex-col gap-4 font-semibold text-md">
                <li>
                  <Link to="/" onClick={toggleMenu} className="hover:text-blue-600 transition duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={toggleMenu} className="hover:text-blue-600 transition duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/cars" onClick={toggleMenu} className="hover:text-blue-600 transition duration-300">
                    Cars
                  </Link>
                </li>
                <li>
                  <Link to="/user-list" onClick={toggleMenu} className="hover:text-blue-600 transition duration-300">
                    Users
                  </Link>
                </li>
                <li className="flex items-center justify-between">
                  <DarkMode />
                  <Link to="/admin/profile" onClick={toggleMenu} className="hover:text-blue-600 transition duration-300">
                    <CircleUser />
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Optional Divider */}
      <div className="shadow-md border-b border-gray-700 dark:border-gray-200"></div>
    </header>
  );
};
