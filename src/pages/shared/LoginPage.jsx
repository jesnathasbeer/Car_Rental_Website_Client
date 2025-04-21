import React from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../../config/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser, saveUser } from "../../redux/features/userSlice";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import loginIllustration from "../../assets/RentACar-img9.jpg"; // 🖼️ Add your illustration here

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
    console.log(data);
    try {
      const response = await axiosInstance({
          method: "PUT",
          url: user.loginAPI,
          data: data,
      });
      console.log("response====", response);
       dispatch(saveUser(response?.data?.data));
  //     // toast.success("Login success");
       navigate(user.profileRoute);
  } catch (error) {
       dispatch(clearUser());
  //     // toast.error("Login Failed");
      console.log(error);
  }
};
  //   try {
  //     const response = await axiosInstance.post(user.loginAPI, data);
  //     dispatch(saveUser(response?.data?.data));
  //     navigate(user.profileRoute);
  //   } catch (error) {
  //     dispatch(clearUser());
  //     console.error("Login failed:", error);
  //   }
  // };


  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-3xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      >
        {/* Illustration */}
        <div className="hidden md:flex items-center justify-center bg-blue-100 p-6">
          <img src={loginIllustration} alt="Login Visual" className="w-3/4 object-contain" />
        </div>

        {/* Form */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-gray-100">Login</h2>
          <p className="text-center text-gray-500 mb-6">
            Sign in as <span className="capitalize font-semibold">{user.role}</span>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Enter your email"
                  className="input input-bordered w-full pl-10"
                />
              </div>
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  {...register("password", { required: "Password is required" })}
                  placeholder="Enter password"
                  className="input input-bordered w-full pl-10"
                />
              </div>
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", { required: "Confirm your password" })}
                placeholder="Re-enter password"
                className="input input-bordered w-full"
              />
              {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword.message}</p>}
            </div>

            {/* Links */}
            <div className="flex justify-between items-center text-sm text-blue-600 mt-2">
              <Link to="#" className="hover:underline">Forgot password?</Link>
              <Link to={user.signupRoute} className="hover:underline">New user? Sign Up</Link>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200"
            >
              Login
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
