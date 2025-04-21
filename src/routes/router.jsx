import { createBrowserRouter } from "react-router-dom";
import { Profile } from "../pages/user/Profile";
import { ProtectRoutes } from "./ProtectRoutes";
import { ErrorPage } from "../pages/shared/ErrorPage";
import Cars from "../pages/user/Cars";
import { LoginPage } from "../pages/shared/LoginPage";
import { RootLayout } from "../layout/rootLayout";
import Home from "../pages/user/Home";
import Contact from "../pages/user/Contact";
import SignupPage from "../pages/shared/SignupPage";
import { AdminLayout } from "../layout/AdminLayout";
import React from "react";



const Router = createBrowserRouter([
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
                 path: "contact",
                 element: <Contact />,
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
                path: "user",
                element: <ProtectRoutes />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />,
                    },
                
                    {
                        path: "payment",
                        element: <h1>payment</h1>,
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
        ],
    },
]);

export default Router