import React, { useEffect, useState } from "react";
import { Header } from "../components/user/Header";
import { Footer } from "../components/user/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { AdminHeader } from "../components/user/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../config/axiosInstance";
import { clearUser, saveUser } from "../redux/features/userSlice";

export const AdminLayout = () => {
    const user = useSelector((state) => state.user);
    const [isLoading, setIsLoading] = useState(true);
    console.log("user===", user);

    const dispatch = useDispatch();
    const location = useLocation();

    const checkUser = async () => {
        try {
            const response = await axiosInstance({ method: "GET", url: "/admin/check-admin" });
            console.log(response, "========checkAdmin response");
            dispatch(saveUser());
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            dispatch(clearUser());
            setIsLoading(false)
        }
    };

    useEffect(() => {
        checkUser();
    }, [location.pathname]);

    return isLoading ? null : (
        <div>
            {user.isUserAuth ? <AdminHeader /> : <Header />}
            <div className="min-h-96">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};