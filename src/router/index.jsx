import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import RegisterFom from "../components/register/RegisterForm";
import LoginForm from "../components/login/LoginForm";



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
                path: "/register", 
                element: <RegisterFom />
            },
            {
                path: "/register", 
                element: <LoginForm />
            },
            
        ]
    }
]);
