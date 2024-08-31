import React from 'react';
import { BackgroundContainer, InfoBar, Title, Logo } from '../components/itineraryForm/formStyled';
import ItineraryForm from '../components/itineraryForm/ItineraryForm';
import EarthLogo from '../assets/images/EarthLogo.svg'; 

const Itinerary = () => {
  return (
    <BackgroundContainer>
      <InfoBar>
        <Title>Hi, Lara</Title>
        <Logo src={EarthLogo} alt="Earth Logo" />
      </InfoBar>
      <ItineraryForm />
    </BackgroundContainer>
  );
};

export default Itinerary;