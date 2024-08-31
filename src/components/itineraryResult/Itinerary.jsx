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
  const queryParams = new URLSearchParams(location.search);
  const username = queryParams.get('username') || 'user';

  const handleLogoClick = () => {
    navigate('/profile');
  };

  const handleBackClick = () => {
    navigate('/form');
  };

  return (
    <Body>
      <InfoBar>
        <Title>Hi, {username}</Title>
        <Logo 
          src={EarthLogo} 
          alt="Earth Logo" 
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        />
      </InfoBar>

      <ContentContainer>
        <DestinationImage src="http://127.0.0.1:8000/api/v1/destination_app/" />
        <Title style={{ margin: '15px 0' }}>Barcelona, Spain</Title>
        
        <Section>
          <SectionTitle>Destination summary</SectionTitle>
          <Text>Barcelona is a city located in Catalunya, Spain.</Text>
        </Section>
        
        <Section>
          <SectionTitle>Itinerary summary</SectionTitle>
          <Text>During 2 days in BCN, you can visit a lot of monuments...</Text>
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