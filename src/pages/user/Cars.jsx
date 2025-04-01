import { useEffect, useState } from "react";
import axios from "axios";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/api/car/getcars").then((res) => {
      setCars(res.data);
    });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Available Cars</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {cars.map((car) => (
          <div key={car._id} className="border p-4 rounded shadow">
            <img src={car.image} alt={car.name} className="w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold">{car.name}</h3>
            <p>Price: ${car.pricePerDay}/day</p>
            <button className="bg-blue-500 text-white px-3 py-1 mt-2">Rent Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
