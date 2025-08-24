// src/pages/admin/AdminCars.jsx
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // ✅ Fetch cars
    const fetchCars = async () => {
        try {
            const response = await axiosInstance.get("/car/getcars");
            setCars(response.data);
        } catch (error) {
            console.error("Error fetching cars:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCars();
    }, []);

    // ✅ Delete car
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this car?")) return;
        try {
            const res = await axiosInstance.delete(`/car/deleteacar/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
            });
            alert(res.data.message || "Car deleted successfully");
            fetchCars(); // refresh list after delete
        } catch (error) {
            console.error("Error deleting car:", error);
            alert("Failed to delete car");
        }
    };

    // ✅ Navigate to edit page
    const handleEdit = (id) => {
        navigate(`/admin/editcar/${id}`);
    };

    return (
        <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold mb-6">Manage Cars</h1>

            {loading ? (
                <p className="text-lg">Loading cars...</p>
            ) : cars.length === 0 ? (
                <p>No cars available.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cars.map((car) => (
                        <div
                            key={car._id}
                            className="bg-base-200 rounded-xl shadow-md overflow-hidden"
                        >
                            {/* Car Image */}
                            {car.image && (
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-48 object-cover"
                                />
                            )}

                            {/* Car Info */}
                            <div className="p-4">
                                <h2 className="text-xl font-bold">{car.name}</h2>
                                <p className="text-sm text-base-content/70">{car.type}</p>
                                <p className="text-lg font-semibold mt-2">
                                    ₹{car.priceperday}/day
                                </p>
                                <p className="text-sm mt-1">{car.mileage} km/l</p>

                                {/* Action Buttons */}
                                <div className="flex gap-3 mt-4">
                                    <button
                                        onClick={() => handleEdit(car._id)}
                                        className="btn btn-primary btn-sm flex items-center gap-2"
                                    >
                                        <FaEdit /> Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(car._id)}
                                        className="btn btn-error btn-sm flex items-center gap-2"
                                    >
                                        <FaTrash /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminCars;
