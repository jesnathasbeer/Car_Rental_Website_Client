import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DarkMode } from "../shared/DarkMode";
import { CircleUser } from "lucide-react";

export const UserHeader = () => {

const navigate = useNavigate()

    return (
        <div className="shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
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
                                        
                        <Link to={"/cars"} className="hover:text-yellow-600 transition duration-300">
                            {" "}
                            <li>Cars</li>{" "}
                        </Link>
                        <Link to={"/my-learnings"} className="hover:text-yellow-600 transition duration-300">
                        {" "}
                        <li>My Bookings</li>{" "}
                        </Link>

                    </ul>
                </nav>
                <div className="flex justify-center gap-3">
                     <DarkMode />
                     <Link to={"/user/profile"}>
                    <CircleUser />
                </Link>

                </div>
            </div>
        </div>
        <div className="shadow-md border-b border-gray-700 dark:border-gray-200"></div>
    </div>
    );
};



