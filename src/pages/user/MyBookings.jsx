import React, { useEffect, useState } from "react";
import { getMyBookings } from "../../api/orderApi";
import { useSelector } from "react-redux";

export const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userToken } = useSelector((state) => state.user);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const response = await getMyBookings();
        console.log("Bookings response:", response.data);
        setBookings(response.data.bookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, [userToken]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking._id} className="border p-4 rounded-xl shadow">
              <h3 className="text-lg font-bold">{booking.car?.name}</h3>
              <p>Pickup: {new Date(booking.pickupDate).toLocaleDateString()}</p>
              <p>Return: {new Date(booking.returnDate).toLocaleDateString()}</p>
              <p>Status: <span className="font-medium text-green-600">{booking.status}</span></p>
              <p>Total Paid: ${booking.totalAmount}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
