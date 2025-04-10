import heroCar from '../../assets/RentACar-img1.jpg' 
import AboutSection from './AboutSection';
import BookingSection from './BookingSection';
import ServiceSection from './ServiceSection';



const Home = () => {
    return (
      <div>
      <div 
      className="relative h-[650px] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroCar})` }}
      >
        <div className="absolute top-10 right-10 bg-opacity-50 p-6 text-white">
          <h1 className="text-3xl font-bold">Safer, Faster,<br /> and Comfortable</h1>
          <p className="mt-3 text-xl">Get in touch with our <br /> modern cars.</p>
          <button
  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-900 transition duration-300"
  onClick={() => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Rent Now
</button>
        </div>
        
      </div>
      
      <BookingSection />
      <ServiceSection />
      <AboutSection />
      </div>
    );
  };
  
  export default Home;
  