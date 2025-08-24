import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { axiosInstance } from "../../config/axiosInstance";
import { saveUser } from "../../redux/features/userSlice";
import { useDispatch } from "react-redux";
import carImage from "../../assets/login-car-image.png";
import { useTheme } from "../../context/ThemeContext"; 
import defaultAvatar from "../../assets/user.jpg";

const SignupPage = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { darkMode } = useTheme();
  const [image, setImage] = React.useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) formData.append(key, data[key]);

    // ✅ append uploaded image OR fallback to default avatar
    if (image) {
      formData.append("image", image);
    } else {
      formData.append("image", defaultAvatar); 
    }

    try {
      const response = await axiosInstance.post("/user/signup", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      dispatch(saveUser(response.data.data));
      navigate("/user/profile");
    } catch (error) {
      console.error("Signup failed:", error);
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
          <h2 className="text-3xl font-bold text-center mb-2 text-base-content">Sign Up</h2>
          <p className="text-center text-sm text-base-content/70 mb-6">Create your account below</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">Name</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-base-content/50" />
                <input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Full Name"
                  className="input input-bordered w-full pl-10"
                />
              </div>
              {errors.name && <p className="text-error text-xs mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-base-content/50" />
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Email"
                  className="input input-bordered w-full pl-10"
                />
              </div>
              {errors.email && <p className="text-error text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Mobile */}
            <div className="form-control">
              <label className="label">Mobile Number</label>
              <div className="relative">
                <FaPhone className="absolute left-3 top-3 text-base-content/50" />
                <input
                  type="tel"
                  {...register("mobile", { required: "Mobile number is required" })}
                  placeholder="Mobile Number"
                  className="input input-bordered w-full pl-10"
                />
              </div>
              {errors.mobile && <p className="text-error text-xs mt-1">{errors.mobile.message}</p>}
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-base-content/50" />
                <input
                  type="password"
                  {...register("password", { required: "Password is required" })}
                  placeholder="Password"
                  className="input input-bordered w-full pl-10"
                />
              </div>
              {errors.password && <p className="text-error text-xs mt-1">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div className="form-control">
              <label className="label">Confirm Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-base-content/50" />
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Confirm your password",
                    validate: (value) => value === watch("password") || "Passwords do not match",
                  })}
                  placeholder="Confirm Password"
                  className="input input-bordered w-full pl-10"
                />
              </div>
              {errors.confirmPassword && <p className="text-error text-xs mt-1">{errors.confirmPassword.message}</p>}
            </div>

            {/* Profile Image */}
            <div className="form-control">
              <label className="label">Profile Image</label>
              <input
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="file-input file-input-bordered w-full"
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="btn w-full bg-yellow-400 hover:bg-yellow-500 text-white border-none"
            >
              Sign Up
            </motion.button>

            <p className="text-sm text-center text-base-content/70 mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Login
              </Link>
            </p>
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

export default SignupPage;
