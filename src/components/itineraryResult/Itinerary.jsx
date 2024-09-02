import React from "react";
import {
  Body,
  InfoBar,
  Title,
  Logo,
  ContentContainer,
  DestinationImage,
  Section,
  SectionTitle,
  Text,
  SmallButton,
  ButtonContainer,
} from "../components/itineraryResult/styledItinenary";
import EarthLogo from "../assets/images/EarthLogo.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Itinerary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const itinerary = state?.itinerary;
  const destination = state?.destination;

  const username = localStorage.getItem("username") || "User";

  const handleLogoClick = () => {
    navigate("/profile");
  };

  const handleBackClick = () => {
    navigate("/form");
  };

  if (!itinerary || !destination) {
    return <div>No itinerary or destination details available</div>;
  }

  return (
    <Body>
      <InfoBar>
        <Title>Hi, {username}</Title>
        <Logo
          src={EarthLogo}
          alt="Earth Logo"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        />
      </InfoBar>
      <ContentContainer>
        {/* Aquí mostramos la imagen del destino */}
        {destination.image && (
          <DestinationImage src={destination.image} alt={destination.name} />
        )}

        {/* Descripción del destino */}
        <Section>
          <SectionTitle>{destination.name}</SectionTitle>
          <Text>{destination.description || "No description available"}</Text>
        </Section>

        {/* Descripción del itinerario */}
        <Section>
          <SectionTitle>Your itinerary</SectionTitle>
          <Text>{itinerary.description || "No description available"}</Text>
        </Section>

        {/* Botones de acción */}
        <ButtonContainer>
          <SmallButton onClick={handleBackClick}>Back</SmallButton>
          <SmallButton>Save</SmallButton>
        </ButtonContainer>
      </ContentContainer>
    </Body>
  );
};

export default Itinerary;
