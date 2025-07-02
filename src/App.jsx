import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { loadStripe } from '@stripe/stripe-js';
import router from "./routes/router";


const stripePromise = loadStripe('your_publishable_key');
function App() {
    return (
        <>
            <RouterProvider router={router} />
            <Toaster position="top-right" />
        </>
    );
}

export default App;





