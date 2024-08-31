import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import LoginForm from "../components/login/LoginForm";
import RegisterFom from "../components/register/RegisterForm";
import Form from "../pages/Form";
import GlobalStyle from "../globalStyle";
import Profile from "../pages/Profile";
import Logout from "../components/logout/Logout";import Itineraries from '../pages/Itineraries';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterFom />,
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
      },
      {
        path: "/logout",
        element: <Logout />,
      },  
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
