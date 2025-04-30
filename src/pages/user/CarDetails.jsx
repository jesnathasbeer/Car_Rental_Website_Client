import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";

export const CarDetails = () => {
  const params = useParams();
  const [carDetails, setCarDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axiosInstance.get(`/car/getCarById/${params?.id}`);
        setCarDetails(response.data);
      } catch (error) {
        console.error("Error fetching car details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCarDetails();
  }, [params?.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg font-semibold text-gray-600 dark:text-gray-300">
        Loading car details...
      </div>
    );
  }

  if (!carDetails) {
    return (
      <div className="text-center text-red-500 mt-10 dark:text-red-400">
        Failed to load car details.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 lg:p-12 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Car Details
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Car Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={carDetails?.image}
            alt={carDetails?.name}
            className="w-full max-w-md rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Car Info */}
        <div className="w-full lg:w-1/2 space-y-4 text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {carDetails?.name}
          </h2>
          <p>
            Type: <span className="font-medium">{carDetails?.type}</span>
          </p>
          <p>
            Price/Day: <span className="font-semibold text-green-600 dark:text-green-400">₹{carDetails?.pricePerDay}</span>
          </p>
          <p className={`font-semibold ${carDetails?.available ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
            {carDetails?.available ? "Available" : "Not Available"}
          </p>

          <Link
            to="/carbooking"
            state={{ 
              carName: carDetails?.name,
              pricePerDay: carDetails?.pricePerDay,
            }}
            className="inline-block mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};
