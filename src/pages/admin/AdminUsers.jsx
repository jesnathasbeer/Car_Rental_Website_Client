import { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axiosInstance.get("/admin/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        });
        setUsers(res.data?.data || []);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch users:", err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="p-8">Loading users...</div>;

  return (
    <div className="p-6 md:p-10 space-y-6">
      <h1 className="text-3xl font-bold">All Users</h1>
      <div className="overflow-x-auto">
        <table className="table w-full table-zebra">
          <thead>
            <tr className="bg-base-300 text-base-content">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Active</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                  <span
                    className={`badge ${
                      user.isActive ? "badge-success" : "badge-error"
                    }`}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
                <td>{user.role || "user"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
