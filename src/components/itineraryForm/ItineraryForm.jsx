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
import useApi from '../../services/useApi';

const ItineraryForm = () => {
  const { register, handleSubmit, setError } = useForm();
  const navigate = useNavigate();

  const fetchDestinationApi = useApi({
    apiEndpoint: `http://localhost:8000/api/v1/destination_app/`,
  });

  const fetchItineraryApi = useApi({
    apiEndpoint: `http://localhost:8000/api/v1/itineraries/`,
  });

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
        console.log("Submitting data:", data);
        const destination = await fetchDestinationByCity(data.City);
        console.log("Fetched destination:", destination);
        
        const itineraryExists = await checkIfItineraryExists(destination.id, parseInt(data.Duration, 10));
        console.log("Itinerary exists:", itineraryExists);

        if (itineraryExists) {
          const itineraryDetails = await fetchItineraryDetails(destination.id, parseInt(data.Duration, 10));
          console.log("Fetched itinerary details:", itineraryDetails);
          navigate('/results', { state: { itinerary: itineraryDetails, destination } });
        } else {
          alert("No itinerary found for the selected destination and duration.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while fetching the itinerary.");
      }
    } else {
      setError("City", { type: "validate", message: "Invalid city" });
    }
  };

  const fetchDestinationByCity = async (cityName) => {
    try {
      const response = await fetchDestinationApi.request({ params: { name: cityName } });
      console.log("Destination API response:", response.data);
      const destinations = response.data;
      if (destinations.length > 0) {
        return destinations.find(dest => dest.name === cityName);
      }
      throw new Error("Destination not found");
    } catch (error) {
      console.error("Error fetching destination:", error);
      throw error;
    }
  };

  const checkIfItineraryExists = async (destinationId, duration) => {
    try {
      const response = await fetchItineraryApi.request({ params: { destination: destinationId, duration: duration } });
      console.log("Check itinerary API response:", response.data);
      return response.data.length > 0;
    } catch (error) {
      console.error("Error checking itinerary existence:", error);
      throw error;
    }
  };

  const fetchItineraryDetails = async (destinationId, duration) => {
    try {
      const response = await fetchItineraryApi.request({ params: { destination: destinationId, duration: duration } });
      console.log("Fetch itinerary details API response:", response.data);
      const itineraries = response.data;
      if (itineraries.length > 0) {
        return itineraries.find(it => it.destination === destinationId && it.duration === duration);
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
        id="city"
        {...register("City", {
          required: "City is mandatory",
        })}
        placeholder="Barcelona"
      />

      <Label htmlFor="duration">Duration</Label>
      <StyledSelect
        id="duration"
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
