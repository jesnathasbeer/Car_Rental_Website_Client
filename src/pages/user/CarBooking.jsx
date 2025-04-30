import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const CarBooking = () => {
  const location = useLocation();
  const carName = location.state?.carName || "Selected Car";
  const pricePerDay = location.state?.pricePerDay || 0;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pickupDate: "",
    returnDate: "",
    pickupLocation: "",
    dropoffLocation: "",
    carModel: carName,
  });

  const [totalAmount, setTotalAmount] = useState(0);

  const indianLocations = [
    "Delhi", "Mumbai", "Bengaluru", "Chennai", "Hyderabad", "Kolkata",
    "Ahmedabad", "Pune", "Jaipur", "Surat", "Lucknow", "Indore", "Bhopal",
    "Coimbatore", "Nagpur", "Chandigarh", "Patna", "Ranchi", "Guwahati"
  ];

  const handleChange = (e) => {
    const updatedForm = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedForm);
  };

  // Calculate total price when dates or pricePerDay change
  useEffect(() => {
    const { pickupDate, returnDate } = formData;
    if (pickupDate && returnDate) {
      const start = new Date(pickupDate);
      const end = new Date(returnDate);
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

      if (days > 0) {
        setTotalAmount(days * pricePerDay);
      } else {
        setTotalAmount(0);
      }
    }
  }, [formData.pickupDate, formData.returnDate, pricePerDay]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData, "Total Amount:", totalAmount);
    alert("Booking Submitted Successfully!");
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center px-4 py-12">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Book Your Car
        </h2>

        <p className="mb-4 text-gray-700 dark:text-gray-300">
          <strong>Car:</strong> {carName}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form Inputs */}
          <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white" />

          <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white" />

          <input type="date" name="pickupDate" required value={formData.pickupDate} onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white" />

          <input type="date" name="returnDate" required value={formData.returnDate} onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white" />

          <select name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} required
            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white">
            <option value="">Select Pickup Location</option>
            {indianLocations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>

          <select name="dropoffLocation" value={formData.dropoffLocation} onChange={handleChange} required
            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white">
            <option value="">Select Drop-off Location</option>
            {indianLocations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>

          {/* Total Amount Display */}
          <div className="p-3 rounded-lg bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 font-semibold text-center">
            Total Amount: ₹{totalAmount}
          </div>

          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg">
            Confirm Booking
          </button>
          <Link
            to="/payment"
            state={{
              carName: "Honda City",
              pricePerDay: 2500,
              pickupDate: "2025-05-01",
              returnDate: "2025-05-04",
              totalAmount: 7500,
            }}
            className="btn btn-success"
          >
            Proceed to Payment
          </Link>

        </form>
      </div>
    </section>
  );
};

export default CarBooking;
