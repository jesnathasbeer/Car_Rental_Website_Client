import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaCar,
  FaUsers,
  FaClipboardList,
  FaDollarSign,
  FaPowerOff,
  FaUserSlash,
  FaTachometerAlt,
  FaBars,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { axiosInstance } from "../../config/axiosInstance";

export const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [users, setUsers] = useState([]);
  const [selectedUserEmail, setSelectedUserEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useTheme();

  useEffect(() => {
  const fetchStats = async () => {
    try {
      const res = await axiosInstance.get("/admin/stats", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      console.log("Stats:", res.data.data); // Debug log
      setStats(res.data?.data || {});
    } catch (error) {
      console.error("Error fetching stats", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axiosInstance.get("/admin/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      setUsers(res.data?.data || []);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  const loadAll = async () => {
    await Promise.all([fetchStats(), fetchUsers()]);
    setLoading(false);
  };

  loadAll();
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
      const admin = users.find((u) => u.role === "admin");
      if (!admin) return;

      const res = await axios.put("/admin/deactivate", { email: admin.email });
      alert(res.data.message);
      logout();
    } catch (err) {
      console.error("Admin deactivation failed", err);
    }
  };

  const deactivateUser = async () => {
    if (!selectedUserEmail) return alert("Select a user");
    try {
      const res = await axiosInstance.put("/user/deactivate-user", { email: selectedUserEmail });
      alert(res.data.message);
      setSelectedUserEmail("");
      const refreshed = await axios.get("/admin/users");
      setUsers(refreshed.data?.data || []);
    } catch (err) {
      console.error("User deactivation failed", err);
    }
  };

  const { totalCars = 0, totalUsers = 0, totalBookings = 0, totalRevenue = 0 } = stats;

  const navLinks = [
    { label: "Dashboard", path: "/admin/profile", icon: <FaTachometerAlt /> },
    { label: "Users", path: "/admin/users", icon: <FaUsers /> },
  ];

  const contentShift = isCollapsed ? "md:ml-[80px]" : "md:ml-[260px]";

  if (loading) return <div className="p-8 text-base-content">Loading dashboard...</div>;

  return (
    <div className="min-h-screen flex bg-base-100 text-base-content relative overflow-x-hidden">

      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-base-200 shadow-lg z-50 p-4 transition-all duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 ${isCollapsed ? "md:w-[80px]" : "md:w-[260px]"}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-2xl font-bold text-primary transition-all ${isCollapsed ? "hidden" : ""}`}>
            Admin
          </h2>
          <button className="md:hidden text-xl" onClick={() => setSidebarOpen(false)}>✖️</button>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:inline-block text-lg text-base-content"
          >
            {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition
                ${location.pathname === link.path
                  ? "bg-primary text-primary-content"
                  : "hover:bg-base-300"}
                ${isCollapsed ? "justify-center" : ""}`}
            >
              <span className="text-lg">{link.icon}</span>
              {!isCollapsed && <span>{link.label}</span>}
            </button>
          ))}
          <button
            onClick={logout}
            className={`mt-4 flex items-center gap-3 px-4 py-3 text-error hover:bg-error/20 rounded-lg transition
              ${isCollapsed ? "justify-center" : ""}`}
          >
            <FaPowerOff className="text-lg" />
            {!isCollapsed && "Logout"}
          </button>
        </nav>
      </aside>

      {/* Content */}
      <div className={`flex-1 flex flex-col ${contentShift}`}>
        {/* Mobile Topbar */}
        <header className="md:hidden flex items-center justify-between p-4 bg-base-100 shadow">
          <button onClick={() => setSidebarOpen(true)} className="text-xl"><FaBars /></button>
          <h1 className="text-xl font-bold text-primary">Admin Dashboard</h1>
          <div></div>
        </header>

        {/* Main Section */}
        <main className="p-6 md:p-10 space-y-8">
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Total Cars", value: totalCars, icon: <FaCar />, color: "bg-blue-100" },
              { label: "Users", value: totalUsers, icon: <FaUsers />, color: "bg-green-100" },
              { label: "Bookings", value: totalBookings, icon: <FaClipboardList />, color: "bg-purple-100" },
              { label: "Revenue", value: `$${totalRevenue.toLocaleString()}`, icon: <FaDollarSign />, color: "bg-yellow-100" },
            ].map((card, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 shadow hover:shadow-xl transition flex items-center gap-4 bg-base-200`}
              >
                <div className="p-3 rounded-full bg-base-100 shadow text-xl">{card.icon}</div>
                <div>
                  <h3 className="text-sm font-semibold">{card.label}</h3>
                  <p className="text-2xl font-bold">{card.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <button
              onClick={deactivateAccount}
              className="btn btn-error text-white flex items-center gap-2"
            >
              <FaUserSlash /> Deactivate Admin Account
            </button>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <select
                className="select select-bordered w-full sm:w-64"
                value={selectedUserEmail}
                onChange={(e) => setSelectedUserEmail(e.target.value)}
              >
                <option value="">Select user to deactivate</option>
                {users.filter((u) => u.role !== "admin").map((u) => (
                  <option key={u._id} value={u.email}>{u.name} ({u.email})</option>
                ))}
              </select>
              <button
                onClick={deactivateUser}
                className="btn btn-warning text-white"
              >
                Deactivate User
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
