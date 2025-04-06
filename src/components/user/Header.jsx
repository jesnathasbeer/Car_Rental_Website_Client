import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DarkMode } from "../shared/DarkMode";

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
                        <Link to={"/"}>
                            {" "}
                            <li>Home</li>{" "}
                        </Link>
                        <Link to={"/about"}>
                            {" "}
                            <li>About</li>{" "}
                        </Link>
                        <a href="#services">
                            <li>Our Services</li>
                        </a>
                        <Link to={"/courses"}>
                            {" "}
                            <li>Contact Us</li>{" "}
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