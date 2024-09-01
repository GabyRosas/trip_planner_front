import React from "react";
import { useForm } from "react-hook-form";
import {
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledButton,
  Label,
} from "./formStyled";

const ItineraryForm = () => {
  const { register, handleSubmit, setError } = useForm();

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

  const onSubmit = handleSubmit((values) => {
    if (validateCity(values.City)) {
      alert("Form submit: " + JSON.stringify(values));
    } else {
      setError("City", { type: "validate", message: "Invalid city" });
    }
  });

  return (
    <StyledForm onSubmit={onSubmit}>
      <Label htmlFor="City">City</Label>
      <StyledInput
        id="City"
        {...register("City", {
          required: "City is mandatory",
        })}
        placeholder="Barcelona"
      />

      <Label htmlFor="Duration">Duration</Label>
      <StyledSelect
        id="Duration"
        {...register("Duration", { required: "Duration is mandatory" })}
        defaultValue=""
      >
        <option value="" disabled>
          Select number of days
        </option>
        <option value="1 day">1 day</option>
        <option value="2 days">2 days</option>
        <option value="3 days">3 days</option>
      </StyledSelect>

      <StyledButton type="submit">Generate itinerary</StyledButton>
    </StyledForm>
  );
};

export default ItineraryForm;
