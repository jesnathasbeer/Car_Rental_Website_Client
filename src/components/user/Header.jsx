import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DarkMode } from "../shared/DarkMode";

export const Header = () => {

const navigate = useNavigate()

    return (
        <div className="shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* <div className="flex justify-between items-center p-4 shadow-md bg-white"> */}
            <div>
                <h1 className="text-2xl font-bold">RentACar</h1>
            </div>
            <div className="flex justify-center items-center gap-16">
                <nav>
                    <ul className="flex justify-center font-bold items-center gap-10 text-md">
                        <Link to={"/"} className="hover:text-yellow-600 transition duration-300">
                            {" "}
                            <li>Home</li>{" "}
                        </Link>
                        <a href="/#about" className="hover:text-yellow-600 transition duration-300">
                            <li>About</li>
                        </a>                   
                        <Link to={"/cars"} className="hover:text-yellow-600 transition duration-300">
                            {" "}
                            <li>Cars</li>{" "}
                        </Link>
                        <a href="/#services" className="hover:text-yellow-600 transition duration-300">
                            <li>Our Services</li>
                        </a>
                        <Link to={"/contact"} className="hover:text-yellow-600 transition duration-300">
                            {" "}
                            <li>Contact</li>{" "}
                        </Link>
                    </ul>
                </nav>
                <div className="flex justify-center gap-3">
                     <DarkMode />
                    <button className="btn btn-warning" onClick={()=>navigate('/signup')} >Join Us</button>

                </div>
            </div>
        </div>
        <div className="shadow-md border-b border-gray-700 dark:border-gray-200"></div>
    </div>
    );
};