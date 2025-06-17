// src/pages/admin/Dashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export const Dashboard = () => {
  const [stats, setStats] = useState({
    totalCars: 0,
    totalUsers: 0,
    totalBookings: 0,
    totalRevenue: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("/admin/dashboard");
        setStats(res.data);
      } catch (err) {
        console.error("Failed to fetch dashboard stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div className="p-4">Loading dashboard...</div>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-2xl shadow p-5">
        <h3 className="text-lg font-semibold">Total Cars</h3>
        <p className="text-2xl font-bold text-blue-600">{stats.totalCars}</p>
      </div>

      <div className="bg-white rounded-2xl shadow p-5">
        <h3 className="text-lg font-semibold">Total Users</h3>
        <p className="text-2xl font-bold text-green-600">{stats.totalUsers}</p>
      </div>

      <div className="bg-white rounded-2xl shadow p-5">
        <h3 className="text-lg font-semibold">Total Bookings</h3>
        <p className="text-2xl font-bold text-purple-600">{stats.totalBookings}</p>
      </div>

      <div className="bg-white rounded-2xl shadow p-5">
        <h3 className="text-lg font-semibold">Revenue</h3>
        <p className="text-2xl font-bold text-red-600">${stats.totalRevenue}</p>
      </div>
    </div>
  );
};
