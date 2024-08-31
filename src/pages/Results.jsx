import React from 'react';
import { Body, InfoBar, Title, Logo, ContentContainer, Section, SectionTitle, Text, SmallButton, ButtonContainer } from '../components/itineraryResult/styledItinenary';
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