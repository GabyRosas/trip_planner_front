import React from "react";
import {
  BackgroundContainer,
  InfoBar,
  Title,
  Logo,
} from "../components/itineraryForm/formStyled";
import ItineraryForm from "../components/itineraryForm/ItineraryForm";
import EarthLogo from "../assets/images/EarthLogo.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Form = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const username = queryParams.get("username") || "User";

  const handleLogoClick = () => {
    navigate("/profile");
  };

  return (
    <BackgroundContainer>
      <InfoBar>
        <Title>Hi, {username}</Title>
        <Logo
          src={EarthLogo}
          alt="Earth Logo"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        />
      </InfoBar>
      <ItineraryForm />
    </BackgroundContainer>
  );
};

export default Form;
