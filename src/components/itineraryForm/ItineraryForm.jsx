import React from "react";
import { useForm } from "react-hook-form";
import {
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledButton,
  Label,
} from "./formStyled";
import { useNavigate } from 'react-router-dom';

const ItineraryForm = () => {
  const { register, handleSubmit, setError } = useForm();
  const navigate = useNavigate();

  const validCities = [
    "Barcelona",
    "Ibiza",
    "Santiago de Compostela",
    "Sevilla",
    "Oviedo",
  ];

  const validateCity = (value) => {
    if (!validCities.includes(value)) {
      window.alert("This city is not available in our database");
      return false;
    }
    return true;
  };

  const onSubmit = async (data) => {
    if (validateCity(data.City)) {
      try {
        const destinationId = await fetchDestinationIdByCity(data.City);
        const itineraryExists = await checkIfItineraryExists(destinationId, parseInt(data.Duration, 10));
  
        if (itineraryExists) {
          const itineraryDetails = await fetchItineraryDetails(destinationId, parseInt(data.Duration, 10));
          // Navegar a la página de resultados con los detalles del itinerario
          navigate('/results', { state: { itinerary: itineraryDetails } });
        } else {
          const response = await fetch("http://localhost:8000/api/v1/itineraries/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              description: "No description provided",  // Valor predeterminado
              duration: parseInt(data.Duration, 10),
              destination: destinationId,
            }),
          });
  
          if (response.ok) {
            const result = await response.json();
            // Navegar a la página de resultados con los detalles del nuevo itinerario
            navigate('/results', { state: { itinerary: result } });
          } else {
            const errorData = await response.json();
            console.log("Server error:", errorData);
            alert("Error creating itinerary: " + JSON.stringify(errorData));
          }
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while creating the itinerary.");
      }
    } else {
      setError("City", { type: "validate", message: "Invalid city" });
    }
  };

  const fetchDestinationIdByCity = async (cityName) => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/destination_app/?name=${encodeURIComponent(cityName)}`);
      const destinations = await response.json();
      if (destinations.length > 0) {
        return destinations[0].id;
      }
      throw new Error("Destination not found");
    } catch (error) {
      console.error("Error fetching destination ID:", error);
      throw error;
    }
  };

  const checkIfItineraryExists = async (destinationId, duration) => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/itineraries/?destination=${destinationId}&duration=${duration}`);
      const itineraries = await response.json();
      return itineraries.length > 0;
    } catch (error) {
      console.error("Error checking itinerary existence:", error);
      throw error;
    }
  };

  const fetchItineraryDetails = async (destinationId, duration) => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/itineraries/?destination=${destinationId}&duration=${duration}`);
      const itineraries = await response.json();
      if (itineraries.length > 0) {
        return itineraries[0];  // Devuelve el primer itinerario encontrado
      }
      throw new Error("No itinerary details found");
    } catch (error) {
      console.error("Error fetching itinerary details:", error);
      throw error;
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="city">City</Label>
      <StyledInput
        {...register("City", {
          required: "City is mandatory",
        })}
        placeholder="Barcelona"
      />

      <Label htmlFor="duration">Duration</Label>
      <StyledSelect
        {...register("Duration", { required: "Duration is mandatory" })}
        defaultValue=""
      >
        <option value="" disabled>
          Select number of days
        </option>
        <option value={1}>1 Day</option>
        <option value={2}>2 Days</option>
        <option value={3}>3 Days</option>
      </StyledSelect>

      <StyledButton type="submit">Generate itinerary</StyledButton>
    </StyledForm>
  );
};

export default ItineraryForm;

