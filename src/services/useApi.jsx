import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config/urls";

const UseApi = ({ endpoint }) => {
  // Ahora acepta un endpoint como prop
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiEndpoint = `${API_BASE_URL}${endpoint}`; // Usa el endpoint proporcionado

    axios
      .get(apiEndpoint)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        console.error(`Error fetching data: ${error.message}`);
      });
  }, [endpoint]); // Dependencia añadida para recargar si cambia el endpoint

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default UseApi;
