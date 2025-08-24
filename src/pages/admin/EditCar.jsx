import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";

const EditCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await axiosInstance.get(`/car/getcarbyid/${id}`);
        setCar(res.data);
      } catch (error) {
        console.error("Error fetching car:", error);
      }
    };
    fetchCar();
  }, [id]);

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.put(`/car/updatecar/${id}`, car);
      alert(res.data.message || "Car updated successfully");
      navigate("/admin/cars");
    } catch (error) {
      console.error("Error updating car:", error);
      alert("Failed to update car");
    }
  };

  if (!car) return <p>Loading car details...</p>;

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-2xl font-bold mb-6">Edit Car</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg bg-base-200 p-6 rounded-xl space-y-4"
      >
        <input
          type="text"
          name="name"
          value={car.name}
          onChange={handleChange}
          placeholder="Car Name"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="type"
          value={car.type}
          onChange={handleChange}
          placeholder="Car Type"
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="priceperday"
          value={car.priceperday}
          onChange={handleChange}
          placeholder="Price per day"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="mileage"
          value={car.mileage}
          onChange={handleChange}
          placeholder="Mileage"
          className="input input-bordered w-full"
        />
        <textarea
          name="description"
          value={car.description}
          onChange={handleChange}
          placeholder="Description"
          className="textarea textarea-bordered w-full"
        />

        <button type="submit" className="btn btn-primary w-full">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditCar;
