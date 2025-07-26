import React, { useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await axiosInstance.post("/user/forgot-password", { email });
      toast.success("Password reset link sent. Check your email.");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send reset link.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center text-primary">Forgot Password</h2>
        <form onSubmit={handleForgotPassword} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full"
            required
          />
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
        <p className="text-center text-sm">
          Back to{" "}
          <a href="/login" className="text-primary hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};
