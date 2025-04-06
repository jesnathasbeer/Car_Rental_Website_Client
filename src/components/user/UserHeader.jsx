import React from "react";
import { CircleUser } from "lucide-react";
//import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
//import { DarkMode } from "../shared/DarkMode";

export const UserHeader = () => {
    return (
        <div className="flex justify-between items-center p-4 shadow-md bg-white ">
            <Link to={"/"}>
                <div className="text-2xl font-bold">Logo</div>
            </Link>
            <nav className="flex gap-16 items-center font-semibold">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/cars"}>Cars</Link>
                <Link to={"/my-learnings"}>My Learnings</Link>
            </nav>

            <div className="flex gap-14 items-center ">
                {/* <DarkMode /> */}
                {/* <Link to={"/user/cart"}>
                    <ShoppingBag />
                </Link> */}
                <Link to={"/user/profile"}>
                    <CircleUser />
                </Link>
            </div>
        </div>
    );
};