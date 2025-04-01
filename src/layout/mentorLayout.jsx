import React from "react";
import { Outlet } from "react-router-dom";

export const MentorLayout = () => {
    return (
        <div>
            <h1>Mentor Header</h1>
            <Outlet />
            <h1>Mentor footer</h1>
        </div>
    );
};