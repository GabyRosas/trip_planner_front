import { useState, useCallback } from "react";
import axios from "axios";

const useApi = ({ apiEndpoint, method = "GET" }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (body = null) => {
      setLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem("token"); // Obtener el token del almacenamiento local

        const response = await axios({
          url: apiEndpoint,
          method,
          data: body,
          headers: {
            Authorization: token ? `Token ${token}` : "", // Añadir el token al header
          },
        });

        setData(response.data);
        setLoading(false);
        return response;
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
        setLoading(false);
        throw err; // Permite que el error sea manejado fuera del hook
      }
    },
    [apiEndpoint, method]
  );

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useApi;
