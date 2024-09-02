import React from 'react';
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
  ButtonContainer,
  SmallButton
} from '../components/itineraryResult/styledItinenary';
import EarthLogo from '../assets/images/EarthLogo.svg'; 
import { useLocation, useNavigate } from 'react-router-dom';

const Itinerary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const itinerary = state?.itinerary; // Obtener los detalles del itinerario del estado

  const handleLogoClick = () => {
    navigate('/profile');
  };

  const handleBackClick = () => {
    navigate('/form');
  };

  if (!itinerary) {
    return <div>No itinerary details available</div>; // Manejo de error si no hay detalles
  }

  return (
    <Body>
      <InfoBar>
        <Title>Hi, {itinerary.user || 'User'}</Title>
        <Logo 
          src={EarthLogo} 
          alt="Earth Logo" 
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        />
      </InfoBar>

      <ContentContainer>
        <DestinationImage src={itinerary.destination.image || 'default-image.jpg'} alt={itinerary.destination.name} />
        <Title style={{ margin: '15px 0' }}>{itinerary.destination.name}, {itinerary.destination.country}</Title>
        
        <Section>
          <SectionTitle>Destination summary</SectionTitle>
          <Text>{itinerary.destination.description}</Text> {/* Descripción del destino */}
        </Section>
        
        <Section>
          <SectionTitle>Itinerary summary</SectionTitle>
          <Text>{itinerary.description}</Text> {/* Descripción del itinerario */}
        </Section>

        <ButtonContainer>
          <SmallButton onClick={handleBackClick}>Back</SmallButton>
          <SmallButton>Save</SmallButton>
        </ButtonContainer>
      </ContentContainer>
    </Body>
  );
};

export default Itinerary;