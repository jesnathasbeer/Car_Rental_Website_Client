import { FaMapMarkerAlt } from "react-icons/fa";

const BookingSection = () => (
  <div id="booking" className="bg-gray-100 py-10">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Book Your Dream Car Now!</h2>
      <p className="text-lg font-semibold text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
        Rent a car online now from one of our worldwide locations. With the most good-looking and affordable cars around and excellent customer service, all we need is your ID — and you’re ready to drive.
      </p>
      <div className="bg-white shadow-md p-6 rounded-lg flex flex-wrap gap-4 justify-center items-center">
        {/* Pick-up Location */}
        <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-gray-50 w-64">
          <FaMapMarkerAlt className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Pick-up Location"
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/* Drop-off Location */}
        <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-gray-50 w-64">
          <FaMapMarkerAlt className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Drop-off Location"
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/* Pick-up Date */}
        <input
          type="date"
          className="border border-gray-300 rounded px-3 py-2 bg-gray-50 w-56 text-gray-700"
        />

        {/* Drop-off Date */}
        <input
          type="date"
          className="border border-gray-300 rounded px-3 py-2 bg-gray-50 w-56 text-gray-700"
        />

        {/* Book Button */}
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded shadow">
          Book
        </button>
      </div>
    </div>
  </div>
);

export default BookingSection;