import React from 'react';
import EarthLogo from '../assets/images/EarthLogo.svg'; 
import ProfileImg from "../assets/images/Photo.png";
import LineImg from "../assets/images/Line 19.png";
import Button from "../components/button/Button.jsx";
import {Body, Title, Greeting, Logo, Name, MyProfile, Line} from "../styled/styled-personal.jsx";
import { useLocation } from "react-router-dom";

const PersonalInfo = () => {
                const username = localStorage.getItem("username") || "User";
<>
<Body>
<Greeting><h1>Hi, {username}</h1></Greeting>
<Logo src={EarthLogoImage} alt="Logo" />
<Title>Personal Information</Title>
<MyProfile src={ProfileImg} alt="Profile" />
<Name>Lara</Name>
<Line src={LineImg} alt="Line" />
<Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        />
        <Input
        type="text"
        name="username"
        value={formData.usernamename}
        onChange={handleChange}
        placeholder="Username"
        />
        <Input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        />
        <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        />
<Button to="/save changes" nameButton="Save Changes" />
</Body>
</>
};

export default PersonalInfo;