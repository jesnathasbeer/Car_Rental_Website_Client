import React from "react";
//import { useNavigate } from "react-router-dom";

export const CarCards = ({ car }) => {
    // const navigate = useNavigate();

    return (
        <div className="card bg-base-100 shadow-xl w-96">
            <figure>
                <img src={car?.image} alt="courses" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{car?.name} </h2>
                <p>Price : Rs {car.price} /-</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                    {/* onClick={() => navigate(`/getcarbyid/${car?._id}`)} */}
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};