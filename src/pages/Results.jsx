import React from 'react';
import { Body, InfoBar, Title, Logo, ContentContainer, Section, SectionTitle, Text, SmallButton, ButtonContainer } from '../components/itineraryResult/styledItinenary';
import EarthLogo from '../assets/images/EarthLogo.svg'; 
import { useLocation, useNavigate } from 'react-router-dom';

const Itinerary = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;

    const itinerary = state?.itinerary;
    const destination = state?.destination;

    const username = localStorage.getItem("username") || "User";

    const handleLogoClick = () => {
        navigate('/profile');
    };

    const handleBackClick = () => {
        navigate('/form');
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
                    style={{ cursor: 'pointer' }}
                />
            </InfoBar>
            <ContentContainer>
                <Section>
                    <SectionTitle>Destination summary</SectionTitle>
                    <Text>{destination.description || 'No description available'}</Text> {/* Descripción del destino */}
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
