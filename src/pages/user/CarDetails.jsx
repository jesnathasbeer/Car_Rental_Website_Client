import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";

export const CourseDetails = () => {
    const params = useParams();

    const [carDetails, isLoading, error] = useFetch(`/car/getCarById/${params?.id}`);

    // const handleAddToCart = async () => {
    //     try {
    //         const response = await axiosInstance({ method: "POST", data: { carId: params?.id }, url: "/cart/add-to-cart" });
    //         console.log(response, "=====add to cart RES");
    //         toast.success("course added to cart");
    //     } catch (error) {
    //         console.log(error);
    //         toast.error(error?.response?.data?.message || "unable to add course to cart");
    //     }
    // };

    return (
        <div>
            <h1>Course Details Page</h1>
            <div>
                <div>
                    <h1>{carDetails?.title}</h1>
                    <p>{carDetails?.priceperday}</p>
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