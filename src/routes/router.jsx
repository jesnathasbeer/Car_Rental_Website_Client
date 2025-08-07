import { createBrowserRouter } from "react-router-dom";
import { Profile } from "../pages/user/Profile";
import { ProtectRoutes } from "./ProtectRoutes";
import { ErrorPage } from "../pages/shared/ErrorPage";
import Cars from "../pages/user/Cars";
import { LoginPage } from "../pages/shared/LoginPage";
import { RootLayout } from "../layout/RootLayout";
import Home from "../pages/user/Home";
import Contact from "../pages/user/Contact";
import SignupPage from "../pages/shared/SignupPage";
import React from "react";
import { CarDetails } from "../pages/user/CarDetails";
import Service from "../pages/user/Service";
import About from "../pages/user/About";
import CarBooking from "../pages/user/CarBooking";
import Confirmation from "../pages/user/Confirmation";
import { Dashboard } from "../pages/admin/Dashboard";
import Payment from "../pages/user/Payment";
import { AdminLayout } from "../layout/adminLayout";
import { MyBookings } from "../pages/user/MyBookings";
import AdminUsers from "../pages/admin/AdminUsers";
// import { ForgotPassword } from "../pages/auth/ForgotPassword";


const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "service",
                element: <Service />
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "signup",
                element: <SignupPage />,
            },
            // {
            //     path: "forgot-password",
            //     element: <ForgotPassword />,
            // },
            // {
            //     path: "reset-password/:token",
            //     element: <ResetPassword />,
            // },
            {
                path: "cars",
                element: <Cars />,
            },
            {
                path: "cardetails/:id",
                element: <CarDetails />,
            },
            {
                path: "user",
                element: <ProtectRoutes role="user" />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />,
                    },

                    {
                        path: "carbooking",
                        element: <CarBooking />,
                    },
                    {
                        path: "payment",
                        element: <Payment />,
                    },
                    {
                        path: "confirmation",
                        element: <Confirmation />,
                    },
                    {
                        path: "mybookings",
                        element: <MyBookings />,
                    },
                ],
            },
        ],
    },
    {
        path: "admin",
        element: <AdminLayout />,
        children: [
            {
                path: "login",
                element: <LoginPage role="admin" />,
            },
            {
                path: "signup",
                element: <SignupPage role="admin" />
            },
            {
                element: <ProtectRoutes role="admin" />, // you can conditionally protect admin
                children: [
                    {
                        path: "profile",
                        element: <Dashboard />,
                    },
                    { path: "users",
                      element: <AdminUsers />,
                    }, 
                ],
            }
        ],
    }
]);


export default router
