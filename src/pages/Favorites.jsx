import React from 'react';
import { Title, InfoBar, Logo } from "../components/itineraryForm/formStyled";
import ButtonItineraries from "../components/itinerariesButton/ItinerariesButton";
import EarthLogo from '../assets/images/EarthLogo.svg'; 
import { Name, MyProfile, Line, Titles, Body } from "../styled/styled-profile";
import ProfileImg from "../assets/images/Photo.png";
import LineImg from "../assets/images/Line 19.png";


const Favorites = () => {
    const username = localStorage.getItem("username") || "User";

    return (
    <>
        <Body>
        <InfoBar>
            <Title>Hi, {username}</Title>
            <Logo src={EarthLogo} alt="Earth Logo" />
        </InfoBar>
        <Titles>My favorites</Titles>
        <MyProfile src={ProfileImg} alt="MyFavorites" />
        <Name>HI {username}</Name>
        <Line src={LineImg} alt="Line" />
        <ButtonItineraries to="/results" destination="madrid" days="3 dias" />
        </Body>
    </>
    );
};

export default Favorites;