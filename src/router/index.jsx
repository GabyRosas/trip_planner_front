import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import LoginForm from "../components/login/LoginForm";
import RegisterForm from "../components/register/RegisterForm";
import Form from "../pages/Form";
import Itinerary from "../pages/Results";
import Profile from "../pages/Profile";
import Logout from "../components/logout/Logout";
import PersonalInfo from "../pages/PersonalInfo";
import Favorites from "../pages/Favorites";
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
        element: <RegisterForm />, 
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
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
      {
        path: "/personalInfo",
        element: <PersonalInfo />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

