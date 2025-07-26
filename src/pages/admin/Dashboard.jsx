import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaCar,
  FaUsers,
  FaClipboardList,
  FaDollarSign,
  FaPowerOff,
  FaUserSlash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [users, setUsers] = useState([]);
  const [selectedUserEmail, setSelectedUserEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchStats = async () => {
    try {
      const res = await axios.get("/admin/stats");
      setStats(res.data?.data || {});
    } catch (err) {
      console.error("Failed to fetch dashboard stats:", err);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get("/admin/users"); // backend: return all users
      setUsers(res.data?.data || []);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  useEffect(() => {
    const fetchAll = async () => {
      await Promise.all([fetchStats(), fetchUsers()]);
      setLoading(false);
    };
    fetchAll();
  }, []);

  const logout = async () => {
    try {
      await axios.get("/admin/logout");
      navigate("/admin/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const deactivateAccount = async () => {
    try {
      const res = await axios.put("/admin/deactivate", {
        email: users.find(u => u.role === "admin")?.email,
      });
      alert(res.data.message);
      logout();
    } catch (err) {
      console.error("Admin deactivation failed", err);
    }
  };

  const deactivateUser = async () => {
    if (!selectedUserEmail) return alert("Select a user");
    try {
      const res = await axios.put("/user/deactivate", { email: selectedUserEmail });
      alert(res.data.message);
      fetchUsers(); // refresh user list
    } catch (err) {
      console.error("User deactivation failed", err);
    }
  };

  if (loading) {
    return <div className="p-8 text-gray-700 dark:text-gray-200">Loading dashboard...</div>;
  }

  const { totalCars = 0, totalUsers = 0, totalBookings = 0, totalRevenue = 0 } = stats;

  const cards = [
    {
      label: "Total Cars",
      value: totalCars,
      icon: <FaCar size={24} className="text-blue-600" />,
      bg: "bg-blue-100 dark:bg-blue-900",
    },
    {
      label: "Total Users",
      value: totalUsers,
      icon: <FaUsers size={24} className="text-green-600" />,
      bg: "bg-green-100 dark:bg-green-900",
    },
    {
      label: "Bookings",
      value: totalBookings,
      icon: <FaClipboardList size={24} className="text-purple-600" />,
      bg: "bg-purple-100 dark:bg-purple-900",
    },
    {
      label: "Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      icon: <FaDollarSign size={24} className="text-yellow-600" />,
      bg: "bg-yellow-100 dark:bg-yellow-900",
    },
  ];

  return (
    <div className="p-6 md:p-10 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Admin Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded flex items-center gap-2"
        >
          <FaPowerOff /> Logout
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 flex items-center gap-4 ${card.bg}`}
          >
            <div className="p-3 rounded-full bg-white dark:bg-gray-800 shadow">{card.icon}</div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {card.label}
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={deactivateAccount}
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-4 py-2 rounded flex items-center gap-2"
          >
            <FaUserSlash /> Deactivate My Admin Account
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <select
            className="border px-4 py-2 rounded"
            value={selectedUserEmail}
            onChange={(e) => setSelectedUserEmail(e.target.value)}
          >
            <option value="">Select a user to deactivate</option>
            {users
              .filter((u) => u.role !== "admin")
              .map((user) => (
                <option key={user._id} value={user.email}>
                  {user.name} ({user.email})
                </option>
              ))}
          </select>
          <button
            onClick={deactivateUser}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded"
          >
            Deactivate User
          </button>
        </div>
      </div>
    </div>
  );
};
