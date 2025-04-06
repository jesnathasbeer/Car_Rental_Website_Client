import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import  Router  from "./routes/Router";

function App() {
    return (
        <>
            <RouterProvider Router={Router} />
            <Toaster />
        </>
    );
}

export default App;