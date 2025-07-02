import { axiosInstance } from "../config/axiosInstance";

// Fetch current user's bookings
export const getMyBookings = async () => {
  return axiosInstance.get("/order/mybookings", {
    withCredentials: true, // this allows browser to send cookies
  });
};

