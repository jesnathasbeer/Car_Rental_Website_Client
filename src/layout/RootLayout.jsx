import React, { useEffect, useState } from "react";
import { Header } from "../components/user/Header";
import { Footer } from "../components/user/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { UserHeader } from "../components/user/UserHeader";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../config/axiosInstance";
import { clearUser, saveUser } from "../redux/features/userSlice";

export const RootLayout = () => {
    const user = useSelector((state) => state.user);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();
    const location = useLocation();

    const checkUser = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            dispatch(clearUser());
            setIsLoading(false);
            return;
        }

        try {
            const response = await axiosInstance.get("/user/check-user");
            console.log("User check successful:", response.data);
            dispatch(saveUser(response.data.user)); // ✅ Pass user data here
        } catch (error) {
            console.log("User check failed:", error);
            dispatch(clearUser());
        } finally {
            setIsLoading(false);
        }
    };

    // useEffect(() => {
    //     checkUser();
    // }, [location.pathname]);
    useEffect(() => {
        checkUser();
      }, []);
      
      
    console.log("Is user authenticated:", user.isUserAuth);

    return isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <span>Loading...</span>
        </div>
      ) : (
        <div>
            {user.isUserAuth ? <UserHeader /> : <Header />}
            <div className="min-h-96">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
