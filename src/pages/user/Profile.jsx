import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export const Profile = () => {
    const [userDetails, isLoading, error] = useFetch("/user/profile");
    const [showOrders, setShowOrders] = useState(false);

    if (isLoading) return <p className="text-center text-lg">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error loading profile.</p>;

    const buttonClass =
        "btn btn-primary btn-wide rounded-xl transition-all duration-300 shadow-md hover:scale-105";

    return (
        <div className="max-w-5xl mx-auto p-8 bg-base-200 rounded-2xl shadow-xl mt-10 space-y-10">
            {/* Top Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
                <button className={buttonClass}>Edit Profile</button>
                <button className={buttonClass} onClick={() => setShowOrders(!showOrders)}>
                    {showOrders ? "Hide Orders" : "Show Orders"}
                </button>
                <button className={buttonClass}>Change Password</button>
                <button className={buttonClass}>Logout</button>
            </div>

            {/* Profile Info Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Profile Picture on Left */}
                <div className="avatar">
                    <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={userDetails?.profilePic} alt="profile" />
                    </div>
                </div>

                {/* Centered Info */}
                <div className="text-center flex-1">
                    <h1 className="text-4xl font-bold text-base-content mb-2">
                        Welcome, {userDetails?.name}
                    </h1>
                    <p className="text-base text-base-content mb-1">
                        <strong>Email:</strong> {userDetails?.email}
                    </p>
                    <p className="text-base text-base-content">
                        <strong>Mobile:</strong> {userDetails?.mobile}
                    </p>
                </div>
            </div>

            {/* Orders Section */}
            {showOrders && (
                <div className="bg-base-100 p-6 rounded-xl shadow-inner">
                    <h2 className="text-2xl font-semibold mb-3">Your Orders</h2>
                    <p className="text-base-content text-sm">This is user orders.</p>
                </div>
            )}
        </div>
    );
};
