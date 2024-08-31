import React from "react";
import EarthLogoImage from "../assets/images/EarthLogo.svg";
import ProfileImg from "../assets/images/Photo.png";
import LineImg from "../assets/images/Line 19.png";
import PersonalInfo from "../../src/assets/icons/Personal Info.svg";
import MyItineraries from "../assets/icons/My Itineraries.svg";
import Settings from "../assets/icons/Settings.svg";
import Button from "../components/button/Button.jsx";
import {Body, Greeting, Logo, Title, Name, MyProfile, Line, ButtonAway, ButtonMoreAway,} from "../styled/styled-profile.jsx";


const Itinerary = () => {
  const { username, destination } = useParams(); // Obtener parámetros de la URL

  return (
    <Container>
      <Header>
        <Title>Hi, {username}</Title>
        <Avatar src="/path_to_avatar_image.png" alt="User Avatar" />
      </Header>
      <main>
        <DestinationImage src="/path_to_barcelona_image.jpg" alt={destination} />
        <DestinationTitle>{destination}</DestinationTitle>
        <Section className="summary">
          <SectionTitle><i className="icon-destination"></i> Resumen del destino</SectionTitle>
          <SectionText>{destination} is a beautiful city located in Catalunya, Spain.</SectionText>
        </Section>
        <Section className="itinerary">
          <SectionTitle><i className="icon-itinerary"></i> Resumen del itinerario</SectionTitle>
          <SectionText>During 2 days in {destination}, you can visit a lot of monuments...</SectionText>
        </Section>
      </main>
      <Footer>
        <Button className="back">Back</Button>
        <Button className="save">Save</Button>
      </Footer>
    </Container>
  );
};

export default Itinerary;