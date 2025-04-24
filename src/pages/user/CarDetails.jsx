//import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";

export const CarDetails = () => {
    const params = useParams();
    const [carDetails, setCarDetails] = useState([]);
     const [loading, setLoading] = useState(true);
    //useFetch(`/car/getCarById/${params?.id}`);
    console.log(carDetails,"Car details---");
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
      }, []);
    return (
        <div>
            <h1>Car Details Page</h1>
            <div>
            {/* if (isLoading) return <p className="text-center text-lg">Loading car details...</p>;
            if (error) return <p className="text-center text-red-500">Error loading car details.</p>; */}

                <div>
                    <h1>{carDetails?.name}</h1>
                    <p>{carDetails?.type}</p>
                    <p>{carDetails?.pricePerDay}</p>
                    <p>{carDetails?.available}</p>
                </div>
                <div>
                    <img src={carDetails?.image} alt="car-image" />
                </div>
                <button className="btn btn-success">
                    Book Now
                </button>
            </div>
        </div>
    );
};