import React, { useEffect, useState } from "react";
import { Header } from "../components/user/Header";
import { Footer } from "../components/user/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../config/axiosInstance";
import { clearUser, saveUser } from "../redux/features/userSlice";
import { AdminHeader } from "../components/user/AdminHeader";

export const AdminLayout = () => {
    const user = useSelector((state) => state.user);
    const [isLoading, setIsLoading] = useState(true);
    console.log("user===", user);

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
              console.log(response.data, "========checkUser response");
              
              dispatch(saveUser(response.data.user)); // <-- Pass actual user
            } catch (error) {
              console.log("checkUser error:", error);
              dispatch(clearUser());
            } finally {
              setIsLoading(false);
            }
          };
          
     
    
    useEffect(() => {
        checkUser();
    }, [location.pathname]);

    return isLoading ? null : (
        <div>
             {/* <Header /> */}
            {user.isUserAuth ? <AdminHeader /> : <Header />}
            <div className="min-h-96">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};