import React from 'react';
import Button from '../components/button/Button.jsx';
import Person from '../assets/images/Profile.png';
import {Greeting, Logo, Title, Name, MyProfile} from '../styled/styled-profile.jsx';



const Profile = () => {
    return (
        <>

            <Greeting><h1>Hi, Lara</h1></Greeting>
            <Logo></Logo>
            <Title>Profile</Title>
            <Person></Person>
            <Name>Lara</Name>
            <Button nameButton="Personal Information"/>
            <Button nameButton="My Itineraries"/>
            <Button nameButton="Settings"/>
            <Button nameButton="Log Out"/>
            <Button nameButton="Search Itineraries"/>

        </>
    )
}

export default Profile;



