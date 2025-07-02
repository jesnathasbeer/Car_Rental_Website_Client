import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const CarBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const carId = location.state?.carId;
  const carName = location.state?.carName || "Selected Car";
  const priceperday = Number(location.state?.priceperday) || 0;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pickupDate: "",
    returnDate: "",
    pickupLocation: "",
    dropoffLocation: "",
    carModel: carName,
    carId: carId,
  });

  const [totalAmount, setTotalAmount] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const indianLocations = [
    "Delhi", "Mumbai", "Bengaluru", "Chennai", "Hyderabad", "Kolkata",
    "Ahmedabad", "Pune", "Jaipur", "Surat", "Lucknow", "Indore", "Bhopal",
    "Coimbatore", "Nagpur", "Chandigarh", "Patna", "Ranchi", "Guwahati"
  ];

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const { pickupDate, returnDate } = formData;
    if (pickupDate && returnDate) {
      const start = new Date(pickupDate);
      const end = new Date(returnDate);
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      setTotalAmount(days > 0 ? days * priceperday : 0);
    }
  }, [formData.pickupDate, formData.returnDate, priceperday]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Simple validation
    if (!formData.name || !formData.email || !formData.pickupDate || !formData.returnDate || !formData.pickupLocation || !formData.dropoffLocation) {
      alert("Please fill all fields");
      return;
    }

    setFormSubmitted(true);

    // ✅ Navigate to payment
    navigate("/user/payment", {
      state: {
        carId,
        carName: formData.carModel,
        priceperday,
        pickupDate: formData.pickupDate,
        returnDate: formData.returnDate,
        totalAmount,
        pickupLocation: formData.pickupLocation,
        dropoffLocation: formData.dropoffLocation,
        name: formData.name,
        email: formData.email,
      },
    });
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
          <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white" />

          <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white" />

          <input type="date" name="pickupDate" required value={formData.pickupDate} onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white" />

          <input type="date" name="returnDate" required value={formData.returnDate} onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white" />

          <select name="pickupLocation" required value={formData.pickupLocation} onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white">
            <option value="">Select Pickup Location</option>
            {indianLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>

          <select name="dropoffLocation" required value={formData.dropoffLocation} onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white">
            <option value="">Select Drop-off Location</option>
            {indianLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>

          <div className="p-3 rounded-lg bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 font-semibold text-center">
            Total Amount: ₹{totalAmount}
          </div>

          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg">
            Confirm & Proceed to Payment
          </button>
        </form>
      </div>
    </section>
  );
};

export default CarBooking;
