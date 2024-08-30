import React from 'react';
import { But } from './styled-button';

const Button = ({ to, icon, nameButton, backgroundColor, textColor }) => {
return (
<But 
href={to} 
backgroundColor={backgroundColor} 
textColor={textColor} 
hasIcon={!!icon}
    >
{icon && <img src={icon} alt="icon" />}  
{nameButton}
    </But>
);
};

export default Button;

