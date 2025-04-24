import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaImage } from "react-icons/fa";
import { motion } from "framer-motion";
import { axiosInstance } from "../../config/axiosInstance";
import { saveUser } from "../../redux/features/userSlice";
import { useDispatch } from "react-redux";
import signupImg from "../../assets/RentACar-img7.jpg";

const SignupPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    try {
      const response = await axiosInstance.post("/user/signup", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      dispatch(saveUser(response.data.data));
      navigate("/user/profile");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-100 to-blue-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex w-full max-w-5xl shadow-xl rounded-2xl overflow-hidden bg-white dark:bg-gray-800"
      >
        {/* Image */}
        <div className="hidden md:block md:w-1/2">
          <img src={signupImg} alt="Signup Visual" className="w-full h-full object-cover" />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-800 dark:text-white">Create an Account</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Full Name"
                className="input input-bordered w-full pl-10"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Email"
                className="input input-bordered w-full pl-10"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
            </div>

            <div className="relative">
              <FaPhone className="absolute left-3 top-3 text-gray-400" />
              <input
                type="tel"
                {...register("mobile", { required: "Mobile number is required" })}
                placeholder="Mobile Number"
                className="input input-bordered w-full pl-10"
              />
              {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile.message}</p>}
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Password"
                className="input input-bordered w-full pl-10"
              />
              {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value, data) => value === data.password || "Passwords do not match"
                })}
                placeholder="Confirm Password"
                className="input input-bordered w-full pl-10"
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
            </div>

            <div className="relative">
              <FaImage className="absolute left-3 top-3 text-gray-400" />
              <input
                type="file"
                {...register("profilePic")}
                className="file-input w-full pl-10 file-input-bordered"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200"
            >
              Sign Up
            </motion.button>

            <p className="text-sm text-center text-gray-600 mt-2 dark:text-gray-300">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
