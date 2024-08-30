import React from 'react';
import { BackgroundContainer, InfoBar, Title, Logo } from '../components/itineraryForm/formStyled';
import ItineraryForm from '../components/itineraryForm/ItineraryForm';
import EarthLogo from '../assets/images/EarthLogo.svg'; 
import { useLocation, useNavigate } from 'react-router-dom';

<InfoBar>
<Title>Hi, {username}</Title>
<Logo 
            src={EarthLogo} 
            alt="Earth Logo" 
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
        />
</InfoBar>