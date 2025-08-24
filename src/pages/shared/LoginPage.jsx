import React from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../../config/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser, saveUser } from "../../redux/features/userSlice";
import { clearAdmin, saveAdmin } from "../../redux/features/adminSlice";
import toast from "react-hot-toast";
import carImage from "../../assets/login-car-image.png";
import { useTheme } from "../../context/ThemeContext"; // ✅ use your theme context

export const LoginPage = ({ role }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { darkMode } = useTheme(); // ✅ detect theme (default is dark)

  const user = {
    role: role || "user",
    loginAPI: role === "admin" ? "/admin/login" : "/user/login",
    profileRoute: role === "admin" ? "/admin/profile" : "/user/profile",
    signupRoute: role === "admin" ? "/admin/signup" : "/signup",
  };

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.put(user.loginAPI, data);
console.log("Login API response:", response.data);

      if (user.role === "admin") {
        dispatch(saveAdmin(response?.data?.data));
      } else {
        dispatch(saveUser(response?.data?.data));
      }

      toast.success("Login successful!");
      navigate(user.profileRoute);
    } catch (error) {
      if (user.role === "admin") {
        dispatch(clearAdmin());
      } else {
        dispatch(clearUser());
      }
      toast.error("Login failed. Please check your credentials.");
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - form */}
     <div
  className={`flex flex-col justify-center items-start pl-16 transition-colors duration-500
    ${darkMode ? "basis-3/4 bg-blue-950" : "basis-3/4 bg-yellow-200"}`}
>
  <div className="w-full max-w-md bg-base-100 p-8 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-center mb-6 text-base-content">Login</h2>
    <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Sign in as <span className="capitalize font-medium">{user.role}</span>
        </p>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Email */}
      <div className="form-control">
        <label className="label">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="input input-bordered w-full"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-error text-xs mt-1">{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div className="form-control">
        <label className="label">Password</label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          className="input input-bordered w-full"
          placeholder="Enter your password"
        />
        {errors.password && <p className="text-error text-xs mt-1">{errors.password.message}</p>}
      </div>

      {/* Links */}
      <div className="flex justify-between text-sm text-primary">
        <Link to="/forgot-password" className="hover:underline">Forgot password?</Link>
        {user.role !== "admin" && (
          <Link to={user.signupRoute} className="hover:underline">New user? Sign Up</Link>
        )}
      </div>

      {/* Submit */}
      <button type="submit" className="btn w-full bg-yellow-400 hover:bg-yellow-500 text-white border-none">
        Login
      </button>
    </form>
  </div>
</div>

      {/* Right side - image */}
      <div
        className={`hidden md:flex items-center justify-center relative transition-colors duration-500
    ${darkMode ? "basis-1/4 bg-gray-900" : "basis-1/4 bg-white"}`}
      >
        <img
          src={carImage}
          alt="Car"
          className="w-[700px] max-w-none object-contain absolute left-0 -translate-x-1/2"
        />
      </div>

    </div>
  );

};
