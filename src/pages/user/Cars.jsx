import React from "react";
import { CarCards } from "../../components/user/Cards";
import { CarCardSkeltons } from "../../components/user/Skeltons";
import { useFetch } from "../../hooks/useFetch";

const Cars = () => {
    
    const [getcars, isLoading, error] = useFetch("/car/getcars");

    if (isLoading) {
        return <CarCardSkeltons />;
    }

    return (
        <div>
            <h1>Car listing page</h1>
            {getcars?.map((value) => (
                <CarCards car={value} key={value?._id} />
            ))}
        </div>
    );
};

export default Cars