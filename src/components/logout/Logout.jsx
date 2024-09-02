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

        await axios.post(`${API_BASE_URL}logout/`, null, {
          headers: {
            Authorization: token ? `Token ${token}` : "",
          },
        });

        localStorage.removeItem("token");

        navigate("/login");
      } catch (err) {
        console.error("Logout error:", err);

        navigate("/login");
      }
    };

    logout();
  }, [navigate]);

  return null;
};

export default Logout;
