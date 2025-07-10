import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { clearUser } from "../../redux/features/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  FaUser, FaClipboardList, FaCog, FaCar,
  FaCreditCard, FaHeadset, FaSignOutAlt, FaBars
} from "react-icons/fa";
import { MyBookings } from "./MyBookings";


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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-base-100">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
      </div>
    );
  }

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
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${activeTab === item.key
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
            <section className="bg-base-200 rounded-2xl p-4 shadow-md">
              <MyBookings />
            </section>
          )}


          {activeTab === "payments" && (
            <section className="bg-base-200 rounded-2xl p-8 shadow-md space-y-6">
              <h2 className="text-2xl font-bold mb-6">My Payment Methods</h2>

              <div className="grid gap-4 md:grid-cols-2">
                {/* Card 1 */}
                <div className="border p-4 rounded-xl shadow flex items-center justify-between bg-base-100">
                  <div>
                    <p className="font-semibold text-base-content">Visa ending in 4242</p>
                    <p className="text-sm text-gray-500">Expires 12/27</p>
                  </div>
                  <button className="text-sm text-error hover:underline">Remove</button>
                </div>

                {/* Card 2 */}
                <div className="border p-4 rounded-xl shadow flex items-center justify-between bg-base-100">
                  <div>
                    <p className="font-semibold text-base-content">Mastercard ending in 5587</p>
                    <p className="text-sm text-gray-500">Expires 03/26</p>
                  </div>
                  <button className="text-sm text-error hover:underline">Remove</button>
                </div>
              </div>

              {/* Add New Payment Method */}
              <div className="mt-8">
                <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
                  + Add New Payment Method
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Your payment methods are securely handled by <strong>Stripe</strong>.
              </p>
            </section>
          )}


          {activeTab === "support" && (
            <section className="bg-base-200 rounded-2xl p-8 shadow-md space-y-8">
              <h2 className="text-2xl font-bold">Support Center</h2>

              {/* Contact Methods */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-base-100 p-5 rounded-xl shadow">
                  <h3 className="text-lg font-semibold text-base-content mb-2">📞 Phone Support</h3>
                  <p className="text-base-content/80">Call us at <strong>+91 98765 43210</strong></p>
                  <p className="text-sm text-base-content/60">Mon–Fri, 9 AM – 6 PM IST</p>
                </div>

                <div className="bg-base-100 p-5 rounded-xl shadow">
                  <h3 className="text-lg font-semibold text-base-content mb-2">📧 Email Support</h3>
                  <p className="text-base-content/80">Reach out to us at <strong>support@rentalride.com</strong></p>
                  <p className="text-sm text-base-content/60">We usually reply within 24 hours.</p>
                </div>
              </div>

              {/* Help Form */}
              <div className="bg-base-100 p-6 rounded-xl shadow">
                <h3 className="text-lg font-semibold mb-4 text-base-content">Send Us a Message</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                  />
                  <textarea
                    placeholder="Describe your issue or question..."
                    className="textarea textarea-bordered w-full"
                    rows={4}
                  ></textarea>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>

              <p className="text-sm text-base-content/50 text-center mt-6">
                Need urgent help? Call us anytime or email our 24x7 team.
              </p>
            </section>
          )}


          {activeTab === "settings" && (
            <section className="bg-base-200 rounded-2xl p-6 md:p-8 shadow-md space-y-4">
              <h2 className="text-2xl font-bold mb-4">Account Settings</h2>

              {/* 1. Update Profile */}
              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-semibold">Update Profile</div>
                <div className="collapse-content space-y-4">
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      defaultValue={userDetails?.name}
                      className="input input-bordered w-full"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      defaultValue={userDetails?.email}
                      className="input input-bordered w-full"
                    />
                    <input
                      type="text"
                      placeholder="Mobile"
                      defaultValue={userDetails?.mobile}
                      className="input input-bordered w-full"
                    />
                    <button className="btn btn-primary">Save Changes</button>
                  </form>
                </div>
              </div>

              {/* 2. Change Password */}
              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-semibold">Change Password</div>
                <div className="collapse-content space-y-4">
                  <form className="space-y-4">
                    <input
                      type="password"
                      placeholder="Current Password"
                      className="input input-bordered w-full"
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="input input-bordered w-full"
                    />
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      className="input input-bordered w-full"
                    />
                    <button className="btn btn-primary">Update Password</button>
                  </form>
                </div>
              </div>

              {/* 3. Notifications */}
              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-semibold">Notification Preferences</div>
                <div className="collapse-content space-y-3">
                  <label className="label cursor-pointer justify-start gap-4">
                    <input type="checkbox" className="checkbox checkbox-primary" defaultChecked />
                    <span className="label-text">Booking confirmations</span>
                  </label>
                  <label className="label cursor-pointer justify-start gap-4">
                    <input type="checkbox" className="checkbox checkbox-primary" />
                    <span className="label-text">Promotional offers</span>
                  </label>
                </div>
              </div>

              {/* 4. Dark Mode Toggle */}
              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-semibold">Theme</div>
                <div className="collapse-content flex items-center justify-between">
                  <p className="font-medium">Dark Mode</p>
                  <input
                    type="checkbox"
                    className="toggle toggle-primary"
                    onChange={() => document.documentElement.classList.toggle("dark")}
                  />
                </div>
              </div>

              {/* 5. Deactivate Account */}
              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-semibold text-error">Deactivate Account</div>
                <div className="collapse-content space-y-4">
                  <p className="text-sm text-base-content/70">
                    This action will permanently delete your account and all associated data.
                  </p>
                  <button className="btn btn-error">Deactivate Account</button>
                </div>
              </div>
            </section>
          )}


        </main>
      </div>

    </div>
  );
};


