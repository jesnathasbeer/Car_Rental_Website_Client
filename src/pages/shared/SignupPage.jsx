import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaImage } from "react-icons/fa";
import signupImg from "../../assets/RentACar-img7.jpg"; // Update path accordingly

const SignupPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // handle signup logic
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-100 to-blue-50 p-4">
      <div className="flex w-full max-w-5xl shadow-xl rounded-2xl overflow-hidden bg-white animate-fade-in">
        
        {/* Illustration */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={signupImg}
            alt="Signup Car"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Create an Account</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                {...register("name")}
                placeholder="Full Name"
                className="input input-bordered w-full pl-10"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="input input-bordered w-full pl-10"
              />
            </div>

            {/* Mobile */}
            <div className="relative">
              <FaPhone className="absolute left-3 top-3 text-gray-400" />
              <input
                type="tel"
                {...register("mobile")}
                placeholder="Mobile Number"
                className="input input-bordered w-full pl-10"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
                className="input input-bordered w-full pl-10"
              />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                {...register("confirmPassword")}
                placeholder="Confirm Password"
                className="input input-bordered w-full pl-10"
              />
            </div>

            {/* Profile Pic */}
            <div className="relative">
              <FaImage className="absolute left-3 top-3 text-gray-400" />
              <input
                type="file"
                {...register("profilePic")}
                className="file-input w-full pl-10 file-input-bordered"
              />
            </div>

            {/* Submit Button */}
            <button className="btn btn-primary w-full">Sign Up</button>

            {/* Navigation */}
            <p className="text-sm text-center text-gray-600 mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
