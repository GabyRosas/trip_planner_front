import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom'
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import LoginForm from "../components/login/LoginForm";
import RegisterFom from "../components/register/RegisterForm";
import Form from "../pages/Form";
import ButtonItineraries from "../components/itinerariesButton/ItinerariesButton";
import GlobalStyle from '../globalStyle'
import Profile from "../pages/Profile";


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
            {
                    path: "/profile",
                    element: <Profile/>
            },  
        ],
    },
]);

ReactDOM.render(
    <React.StrictMode>
    <GlobalStyle /> 
    <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root')
);