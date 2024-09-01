import React from 'react';
import { Body, InfoBar, Title, Logo, ContentContainer, Section, SectionTitle, Text, SmallButton, ButtonContainer } from '../components/itineraryResult/styledItinenary';
import EarthLogo from '../assets/images/EarthLogo.svg'; 
import { useLocation, useNavigate } from 'react-router-dom';

const Itinerary = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;

    // Asumimos que `state` contiene la información del itinerario
    const itinerary = state?.itinerary;

    const username = localStorage.getItem("username") || "User";

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
                    <Text>{itinerary.destination?.description || 'No description available'}</Text> {/* Descripción del destino */}
                </Section>
                <Section>
                    <SectionTitle>Itinerary summary</SectionTitle>
                    <Text>{itinerary.description || 'No description available'}</Text> {/* Descripción del itinerario */}
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