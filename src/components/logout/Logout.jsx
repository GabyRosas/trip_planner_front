import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../config/urls";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const token = localStorage.getItem("token");

        // Hacer la solicitud de logout al backend
        await axios.post(`${API_BASE_URL}logout/`, null, {
          headers: {
            Authorization: token ? `Token ${token}` : "",
          },
        });

        // Eliminar el token del almacenamiento local
        localStorage.removeItem("token");

        // Redirigir al usuario a la página de login
        navigate("/login");
      } catch (err) {
        console.error("Logout error:", err);
        // En caso de error, redirigir al usuario a la página de login de todos modos
        navigate("/login");
      }
    };

    logout();
  }, [navigate]);

  return null;
};

export default Logout;
