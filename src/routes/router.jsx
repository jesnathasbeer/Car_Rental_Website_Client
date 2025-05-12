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
import Payment from "../pages/user/Payment";
import Confirmation from "../pages/user/Confirmation";
import { adminLayout } from "../layout/adminLayout";

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
            {
                path: "cars",
                element: <Cars />,
            },
            {
                path:"cardetails/:id",
                element: <CarDetails />,
            },
            {
                path:"carbooking",
                element: <CarBooking />,
            },
            {
                path:"payment",
                element: <Payment />,
            },
            {
                path:"confirmation",
                element: <Confirmation />,
            },
            {
                path: "user",
                element: <ProtectRoutes />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />,
                    },
                
                    {
                        path: "paymentuser",
                        element: <h1>payment</h1>,
                    },
                ],
            },
        ],
    },
    {
        path: "admin",
        element: <adminLayout />,
        children: [
            {
                path: "login",
                element: <LoginPage role="admin" />,
            },
            {
                path: "signup",
                element: <SignupPage role="admin" />
            },
        ],
    },
]);

export default router
