import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom'
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Form from "../pages/Form";
import GlobalStyle from '../globalStyle'


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
                path: "/form",  
                element: <Form />  
            }
        ]
    }
]);

ReactDOM.render(
    <React.StrictMode>
      <GlobalStyle /> {/* Aplica los estilos globales */}
      <RouterProvider router={router} /> {/* Proporciona el enrutador */}
    </React.StrictMode>,
    document.getElementById('root')
);