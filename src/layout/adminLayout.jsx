import { useEffect, useState } from "react";
import { Header } from "../components/user/Header";
import { Footer } from "../components/user/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { AdminHeader } from "../components/user/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../config/axiosInstance";
import { clearUser, saveUser } from "../redux/features/userSlice";
import { clearAdmin, saveAdmin } from "../redux/features/adminSlice";

export const AdminLayout = () => {
    const admin = useSelector((state) => state.admin);
    const [isLoading, setIsLoading] = useState(true);
    console.log("admin===", admin);

    const dispatch = useDispatch();
    const location = useLocation();

    const checkAdmin = async () => {
        try {
            const response = await axiosInstance({ method: "GET", url: "/admin/check-admin" });
            console.log(response, "========checkAdmin response");
            dispatch(saveAdmin(response.data));
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            dispatch(clearAdmin());
        } finally {
            setIsLoading(false)
        } 
    };

    useEffect(() => {
        checkAdmin();
    }, []);

    console.log("Is admin authenticated:", admin.isAdminAuth);
    return isLoading ? (
        <div className="text-center p-4">
          <span>Loading...</span>
        </div> 
        ) : (
        <div>
            {admin.isAdminAuth ? <AdminHeader /> : <Header />}
            <div className="min-h-96">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};