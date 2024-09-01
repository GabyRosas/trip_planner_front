import React from "react";
import Button from "../components/button/Button.jsx";
import BallonsImage from "../assets/images/BallonsHome.png";
import MapImage from "../assets/images/MapHome.png";
import EarthLogoImage from "../assets/images/EarthLogo.svg";
import TripPlannerLogo from "../assets/images/TripPlannerLogo.svg";
import { Body, Logo, TripPlanner, Title, Img } from "../styled/styled-home.jsx";

const Home = () => {
  return (
    <Body>
      <Logo src={EarthLogoImage} alt="Logo"></Logo>
      <TripPlanner src={TripPlannerLogo} alt="TripPlanner"></TripPlanner>
      <Title>Creating your perfect itinerary</Title>
      <Button
        to="/login"
        nameButton="Get started"
        backgroundColor="#FFFF"
        textColor="#007A8C"
      />
      <Img src={BallonsImage} alt="Ballons"></Img>
      <Img src={MapImage} alt="Map"></Img>
    </Body>
  );
};

export default Home;
