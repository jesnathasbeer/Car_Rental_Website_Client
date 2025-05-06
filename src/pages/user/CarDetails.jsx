import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";

export const CarDetails = () => {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axiosInstance.get(`/car/getCarById/${id}`);
        setCarDetails(response.data);
      } catch (error) {
        console.error("Error fetching car details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCarDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6 lg:p-12">
        <div className="animate-pulse space-y-6">
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mx-auto"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="w-full h-64 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
              ))}
              <div className="h-10 bg-orange-300 dark:bg-orange-600 rounded w-1/3"></div>
            </div>
          </div>
        </div>
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
    <div className="max-w-6xl mx-auto p-6 lg:p-12 bg-white dark:bg-gray-900 rounded-lg shadow-xl">
      {/*  Place this just before the main heading h1 */}
<nav className="text-sm text-gray-500 dark:text-gray-400 mb-6">
  <Link to="/" className="hover:underline">Home</Link> &rsaquo;{" "}
  <Link to="/cars" className="hover:underline">Cars</Link> &rsaquo;{" "}
  <span className="text-gray-700 dark:text-gray-300 font-medium">{carDetails?.name}</span>
</nav>

      <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
        {carDetails?.name}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Car Image */}
        <div className="w-full flex justify-center">
          <img
            src={carDetails?.image}
            alt={carDetails?.name}
            className="w-full max-w-md rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Car Info */}
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              Description
            </h2>
            <p className="text-base leading-relaxed">{carDetails?.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm sm:text-base">
            <div>
              <p className="font-medium text-gray-600 dark:text-gray-400">Fuel Type</p>
              <p>{carDetails?.type}</p>
            </div>
            <div>
              <p className="font-medium text-gray-600 dark:text-gray-400">Mileage</p>
              <p>{carDetails?.mileage}</p>
            </div>
            <div>
              <p className="font-medium text-gray-600 dark:text-gray-400">Price/Day</p>
              <p className="font-semibold text-green-600 dark:text-green-400">₹{carDetails?.priceperday}</p>
            </div>
            <div>
              <p className="font-medium text-gray-600 dark:text-gray-400">Date Added</p>
              <p>{carDetails?.dateadded}</p>
            </div>
            <div>
              <p className="font-medium text-gray-600 dark:text-gray-400">Availability</p>
              <p className={`font-semibold ${carDetails?.available ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                {carDetails?.available ? "Available" : "Not Available"}
              </p>
            </div>
          </div>

          <Link
  to="/carbooking"
  state={{
    carName: carDetails?.name,
    pricePerDay: carDetails?.priceperday,
  }}
  title="Proceed to Booking"
  className="inline-block mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition duration-300"
>
  Book Now
</Link>

        </div>
      </div>
    </div>
  );
};
