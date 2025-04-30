import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { clearUser } from "../../redux/features/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { 
  FaUser, FaClipboardList, FaCog, FaCar, 
  FaCreditCard, FaHeadset, FaSignOutAlt, FaBars 
} from "react-icons/fa";

export const Profile = () => {
  const [userDetails, isLoading, error] = useFetch("/user/profile");
  const [activeTab, setActiveTab] = useState("profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(clearUser());
    navigate("/");
  };

  if (isLoading) return <p className="text-center text-lg mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Error loading profile.</p>;

  const sidebarItems = [
    { key: "profile", label: "Profile", icon: <FaUser /> },
    { key: "orders", label: "My Orders", icon: <FaClipboardList /> },
    { key: "bookings", label: "My Bookings", icon: <FaCar /> },
    { key: "payments", label: "Payment Methods", icon: <FaCreditCard /> },
    { key: "support", label: "Support", icon: <FaHeadset /> },
    { key: "settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="min-h-screen flex bg-base-100 text-base-content relative overflow-x-hidden">
      
      {/* Blurred overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-base-200 shadow-lg p-6 transform transition-transform duration-300 z-50
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-primary">Dashboard</h2>
          <button className="md:hidden text-2xl" onClick={() => setSidebarOpen(false)}>
            ✖️
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {sidebarItems.map(item => (
            <button
              key={item.key}
              onClick={() => {
                setActiveTab(item.key);
                setSidebarOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${
                activeTab === item.key
                  ? "bg-primary text-primary-content"
                  : "hover:bg-base-300"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </button>
          ))}

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 mt-4 text-left text-error hover:bg-error/20 rounded-lg transition"
          >
            <FaSignOutAlt className="text-lg" />
            Logout
          </button>
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-64">
        
        {/* Mobile Topbar */}
        <header className="flex items-center justify-between p-4 md:hidden shadow-md bg-base-100">
          <button onClick={() => setSidebarOpen(true)} className="text-2xl">
            <FaBars />
          </button>
          <h1 className="text-xl font-bold text-primary">Dashboard</h1>
          <div></div> {/* Empty div to balance flex */}
        </header>

        {/* Main Content */}
        <main className="p-6 md:p-10 space-y-10 mt-2">
          {activeTab === "profile" && (
            <section className="bg-base-200 rounded-2xl p-8 shadow-md space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="avatar">
                  <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={userDetails?.image} alt="profile" />
                  </div>
                </div>

                <div className="text-center md:text-left flex-1">
                  <h1 className="text-3xl font-bold mb-2">{userDetails?.name}</h1>
                  <p className="text-base">
                    <strong>Email:</strong> {userDetails?.email}
                  </p>
                  <p className="text-base">
                    <strong>Mobile:</strong> {userDetails?.mobile}
                  </p>
                </div>
              </div>
            </section>
          )}

          {activeTab === "orders" && (
            <section className="bg-base-200 rounded-2xl p-8 shadow-md space-y-6">
              <h2 className="text-2xl font-bold mb-4">My Orders</h2>
              <p className="text-base text-base-content/80">You have no orders yet.</p>
            </section>
          )}

          {activeTab === "bookings" && (
            <section className="bg-base-200 rounded-2xl p-8 shadow-md space-y-6">
              <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
              <p className="text-base text-base-content/80">Your car rental bookings will appear here.</p>
            </section>
          )}

          {activeTab === "payments" && (
            <section className="bg-base-200 rounded-2xl p-8 shadow-md space-y-6">
              <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
              <p className="text-base text-base-content/80">Manage your cards, UPI, and other payment methods.</p>
            </section>
          )}

          {activeTab === "support" && (
            <section className="bg-base-200 rounded-2xl p-8 shadow-md space-y-6">
              <h2 className="text-2xl font-bold mb-4">Support</h2>
              <p className="text-base text-base-content/80">Need help? Our support team is ready to assist you.</p>
            </section>
          )}

          {activeTab === "settings" && (
            <section className="bg-base-200 rounded-2xl p-8 shadow-md space-y-6">
              <h2 className="text-2xl font-bold mb-4">Settings</h2>
              <p className="text-base text-base-content/80">Manage your account settings, notifications, and preferences.</p>
            </section>
          )}
        </main>
      </div>

    </div>
  );
};


