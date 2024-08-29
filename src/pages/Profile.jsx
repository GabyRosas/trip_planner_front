import React from 'react';
import EarthLogoImage from '../assets/images/EarthLogo.svg';
import ProfileImg from '../assets/images/Photo.png';
import LineImg from '../assets/images/Line 19.png';
import PersonalInfo from "../../src/assets/icons/Personal Info.svg";
import MyItineraries from "../assets/icons/My Itineraries.svg";
import Settings from "../assets/icons/Settings.svg";
import Button from '../components/button/Button.jsx';
import CustomButton from '../components/customButton/CustomButton.jsx';
import {Body, Greeting, Logo, Title, Name, MyProfile, Line, ButtonGroup } from '../styled/styled-profile.jsx';





const Profile = () => {
    return (
        <>
    <Body>
            <Greeting><h1>Hi, Lara</h1></Greeting>
            <Logo src={EarthLogoImage} alt="Logo"></Logo>
            <Title>Profile</Title>
            <MyProfile src={ProfileImg} alt="Profile"></MyProfile>
            <Name>Lara</Name>
            <Line src= {LineImg} alt="Line"></Line>
            <ButtonGroup>
            <CustomButton icon={PersonalInfo} nameButton="Personal Information" />
            <CustomButton icon={MyItineraries} nameButton="My Itineraries" />
            <CustomButton icon={Settings} nameButton="Settings" />
            </ButtonGroup>
            <ButtonGroup>
            <Button  nameButton="Log Out" />
            </ButtonGroup>
            <ButtonGroup>
            <Button nameButton="Search itinerary" />
            </ButtonGroup>
    </Body>
        </>
    )
}

export default Profile;



