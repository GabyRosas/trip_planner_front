import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import LoginForm from "../components/login/LoginForm";
import RegisterFom from "../components/register/RegisterForm";
import Form from "../pages/Form";
import ButtonItineraries from "../components/itinerariesButton/ItinerariButton";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login", 
                element: <LoginForm />
            },
            {
                path: "/register", 
                element: <RegisterFom />
            },
            {
                path: "/form",  
                element: <Form />  
            },
            {
                path: "/itineraries",  
                element: <ButtonItineraries />  
            },
        ],
    },
]);
