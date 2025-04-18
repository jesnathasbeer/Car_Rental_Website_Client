import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

export const CourseDetails = () => {
    const params = useParams();

    const [carDetails, isLoading, error] = useFetch(`/car/getCarById/${params?.id}`);


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