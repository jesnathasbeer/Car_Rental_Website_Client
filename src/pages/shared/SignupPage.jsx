import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaImage } from "react-icons/fa";
import { motion } from "framer-motion";
import { axiosInstance } from "../../config/axiosInstance";
import { saveUser } from "../../redux/features/userSlice";
import { useDispatch } from "react-redux";
import signupImg from "../../assets/RentACar-img9.jpg";

const SignupPage = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = React.useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) formData.append(key, data[key]);
    if (image) formData.append("image", image);

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
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-base-200 shadow-xl rounded-3xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      >
        {/* Illustration */}
        <div className="hidden md:block">
          <img src={signupImg} alt="Signup Visual" className="w-full h-full object-cover" />
        </div>

        {/* Form */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-base-content">Sign Up</h2>
          <p className="text-center text-sm text-base-content/70 mb-6">Create your account below</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

            <div className="form-control">
              <label className="label">Profile Image</label>
              <input
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="file-input file-input-bordered w-full"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="btn btn-primary w-full"
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
      </motion.div>
    </div>
  );
};

export default SignupPage;
