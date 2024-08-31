import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client"; // Cambiado a 'react-dom/client'
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import LoginForm from "../components/login/LoginForm";
import RegisterForm from "../components/register/RegisterForm"; // Corregido el nombre del componente
import Form from "../pages/Form";
import Itinerary from "../pages/Results";
import GlobalStyle from "../globalStyle";
import Profile from "../pages/Profile";
import Logout from "../components/logout/Logout";import Itineraries from '../pages/Itineraries';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/", // Esta ruta se hereda de la ruta principal
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterForm />, // Corregido el nombre del componente
      },
      {
        path: "/form",
        element: <Form />,
      },
            {
                path: "/itinerary",  
                element: <Itineraries />
            },
      {
            path: "/profile",
            element: <Profile />,

        path: "/results",
        element: <Itinerary />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },  
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // Cambiado a 'createRoot'
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
