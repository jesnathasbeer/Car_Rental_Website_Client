import { useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { useNavigate } from "react-router-dom";

export const AddCar = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    priceperday: "",
    mileage: "",
    description: "",
    dateadded: new Date().toISOString().split("T")[0], // default today's date
    available: true,
  });

  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));
      if (image) data.append("image", image);

      const res = await axiosInstance.post("/car/addacar", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert(res.data.message || "Car added successfully!");
      navigate("/admin/profile");
    } catch (err) {
      console.error("Error adding car:", err);
      alert("Failed to add car");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-base-200 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Add New Car</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Car Name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Car Type (SUV, Sedan, etc.)"
          value={formData.type}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="priceperday"
          placeholder="Price Per Day"
          value={formData.priceperday}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="mileage"
          placeholder="Mileage (e.g. 15 km/l)"
          value={formData.mileage}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
        />
        <input
          type="date"
          name="dateadded"
          value={formData.dateadded}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
          />
          Available
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full"
          required
        />

        <button type="submit" className="btn btn-primary w-full">
          Add Car
        </button>
      </form>
    </div>
  );
};
