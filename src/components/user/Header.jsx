import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DarkMode } from "../shared/DarkMode";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div>
          <h1 className="text-2xl font-bold">RentACar</h1>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            aria-label="Toggle Menu"
            className="text-xl"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu.classList.toggle("hidden");
            }}
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>

        {/* Main Navigation */}
        <div className="hidden lg:flex justify-center items-center gap-16">
          <nav>
            <ul className="flex justify-center font-bold items-center gap-10 text-md">
              <Link to={"/"} className="hover:text-yellow-600 transition duration-300">
                <li>Home</li>
              </Link>
              <Link to={"/cars"} className="hover:text-yellow-600 transition duration-300">
                <li>Cars</li>
              </Link>
              <Link to={"/service"} className="hover:text-yellow-600 transition duration-300">
                <li>Our Services</li>
              </Link>
              <Link to={"/about"} className="hover:text-yellow-600 transition duration-300">
                <li>About Us</li>
              </Link>
              <Link to={"/contact"} className="hover:text-yellow-600 transition duration-300">
                <li>Contact</li>
              </Link>
            </ul>
          </nav>
          <div className="flex justify-center gap-3">
            <DarkMode />
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => navigate("/signup")}
            >
              Join Us
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="lg:hidden flex flex-col items-center gap-6 hidden p-4 bg-gray-800 dark:bg-gray-900 rounded-lg shadow-md"
      >
        <Link
          to={"/"}
          className="hover:text-yellow-600 text-white transition duration-300"
        >
          Home
        </Link>
        <Link
          to={"/cars"}
          className="hover:text-yellow-600 text-white transition duration-300"
        >
          Cars
        </Link>
        <Link
          to={"/service"}
          className="hover:text-yellow-600 text-white transition duration-300"
        >
          Our Services
        </Link>
        <Link
          to={"/about"}
          className="hover:text-yellow-600 text-white transition duration-300"
        >
          About Us
        </Link>
        <Link
          to={"/contact"}
          className="hover:text-yellow-600 text-white transition duration-300"
        >
          Contact
        </Link>

        <div className="flex justify-center gap-3 mt-6">
          <DarkMode />
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => navigate("/signup")}
          >
            Join Us
          </button>
        </div>
      </div>

      <div className="shadow-md border-b border-gray-700 dark:border-gray-200"></div>
    </div>
  );
};
