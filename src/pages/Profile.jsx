import React from 'react';
import Button from '../components/button/Button.jsx';
import ProfileImg from '../assets/images/Profile.png';
import {Body, Greeting, Logo, Title, Name, MyProfile} from '../styled/styled-profile.jsx';



const Profile = () => {
    return (
        <>
            <Body>
            <Greeting><h1>Hi, Lara</h1></Greeting>
            <Logo></Logo>
            <Title>Profile</Title>
            <MyProfile src={ProfileImg} alt="Profile"></MyProfile>
            <Name>Lara</Name>
            <Button nameButton="Personal Information"/>
            <Button nameButton="My Itineraries"/>
            <Button nameButton="Settings"/>
            <Button nameButton="Log Out"/>
            <Button nameButton="Search Itineraries"/>
</Body>
        </>
    )
}

export default Profile;



