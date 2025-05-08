import React from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../../config/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser, saveUser } from "../../redux/features/userSlice";
import loginIllustration from "../../assets/RentACar-img9.jpg";
import toast from "react-hot-toast";

export const LoginPage = ({ role }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = {
    role: role || "user",
    loginAPI: role === "admin" ? "/admin/login" : "/user/login",
    profileRoute: role === "admin" ? "/admin/profile" : "/user/profile",
    signupRoute: role === "admin" ? "/admin/signup" : "/signup",
  };

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.put(user.loginAPI, data);
      dispatch(saveUser(response?.data?.data));
      toast.success("Login successful!");
      navigate(user.profileRoute);
    } catch (error) {
      dispatch(clearUser());
      toast.error("Login failed. Please check your credentials.");
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card lg:card-side w-full max-w-4xl bg-base-100 rounded-lg shadow-xl overflow-hidden">
        {/* Left Image */}
        <figure className="hidden md:block md:w-1/2">
          <img src={loginIllustration} alt="Login Illustration" className="object-cover w-full h-full" />
        </figure>

        {/* Right Form */}
        <div className="card-body w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-base-content mb-2">Login</h2>
          <p className="text-center text-base-content/70 mb-2">
            Sign in as <span className="capitalize font-medium">{user.role}</span>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
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

            {/* Confirm Password */}
            <div className="form-control">
              <label className="label">Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", { required: "Confirm your password" })}
                className="input input-bordered w-full"
                placeholder="Re-enter your password"
              />
              {errors.confirmPassword && <p className="text-error text-xs mt-1">{errors.confirmPassword.message}</p>}
            </div>

            {/* Links */}
            <div className="flex justify-between text-sm text-primary">
              <Link to="#" className="hover:underline">Forgot password?</Link>
              <Link to={user.signupRoute} className="hover:underline">New user? Sign Up</Link>
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
