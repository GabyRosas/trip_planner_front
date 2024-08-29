import React from 'react'; 
import { IconButton, ButtonContainer } from "../customButton/styled-customButton";


const CustomButton = ({ icon, nameButton }) => {
    return (
        <ButtonContainer>
    <IconButton>
            <img src={icon} alt={`${nameButton} icon`} />
            {nameButton}
    </IconButton>
        </ButtonContainer>
    );
    };
    
    export default CustomButton;