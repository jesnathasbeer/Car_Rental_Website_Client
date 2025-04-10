import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {

const navigate = useNavigate()

    return (
        <div className="shadow-md bg-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* <div className="flex justify-between items-center p-4 shadow-md bg-white"> */}
            <div>
                <h1 className="text-2xl font-bold">RentACar</h1>
            </div>
            <div className="flex justify-center items-center gap-16">
                <nav>
                    <ul className="flex justify-center font-bold items-center gap-10 text-md">
                        <Link to={"/"} className="text-gray-800 hover:text-yellow-600 transition duration-300">
                            {" "}
                            <li>Home</li>{" "}
                        </Link>
                        <a href="/#about" className="text-gray-800 hover:text-yellow-600 transition duration-300">
                            <li>About</li>
                        </a>                   
                        <Link to={"/cars"} className="text-gray-800 hover:text-yellow-600 transition duration-300">
                            {" "}
                            <li>Cars</li>{" "}
                        </Link>
                        <a href="/#services" className="text-gray-800 hover:text-yellow-600 transition duration-300">
                            <li>Our Services</li>
                        </a>
                        <Link to={"/contact"} className="text-gray-800 hover:text-yellow-600 transition duration-300">
                            {" "}
                            <li>Contact</li>{" "}
                        </Link>
                    </ul>
                </nav>
                <div className="flex justify-center gap-3">
                    {/* <DarkMode /> */}
                    <button className="btn btn-warning" onClick={()=>navigate('/signup')} >Join Us</button>
                    <button className="btn btn-warning" onClick={()=>navigate('/login')} >Login</button>

                </div>
            </div>
        </div>
    </div>
    );
};