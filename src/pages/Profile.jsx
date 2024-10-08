import React from "react";
import EarthLogoImage from "../assets/images/EarthLogo.svg";
import ProfileImg from "../assets/images/Photo.png";
import LineImg from "../assets/images/Line 19.png";
import PersonalInfo from "../../src/assets/icons/Personal Info.svg";
import MyItineraries from "../assets/icons/My Itineraries.svg";
import Settings from "../assets/icons/Settings.svg";
import Button from "../components/button/Button.jsx";
import {Body, Greeting, Logo, Titles, Name, MyProfile, Line, ButtonAway, ButtonMoreAway} from "../styled/styled-profile.jsx";
import { useLocation } from "react-router-dom";


const Profile = () => {
  const username = localStorage.getItem("username") || "User";

  return (
    <>
      <Body>
        <Greeting>
          <h1>Hi, {username}</h1>
        </Greeting>
        <Logo src={EarthLogoImage} alt="Logo" />
        <Titles>Profile</Titles>
        <MyProfile src={ProfileImg} alt="Profile" />
        <Name>{username}</Name>
        <Line src={LineImg} alt="Line" />
        <Button
          to="/personal-info"
          icon={PersonalInfo}
          nameButton="Personal Information"
        />
        <Button
          to="/favorites"
          icon={MyItineraries}
          nameButton="My favorites"
        />
        <Button to="/settings" icon={Settings} nameButton="Settings" />
        <ButtonAway>
          <Button to="/logout" nameButton="Log Out" />
        </ButtonAway>
        <ButtonMoreAway>
          <Button to="/form" nameButton="Search itinerary" />
        </ButtonMoreAway>
      </Body>
    </>
  );
};

export default Profile;
