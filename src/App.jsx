import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./routes/router";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from "./pages/user/PaymentForm";

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





