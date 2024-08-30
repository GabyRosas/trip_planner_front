import React from 'react';
import { But } from './styled-button';

const Button = ({ to, icon, nameButton }) => {
return (
    <But to={to} hasIcon={!!icon}>
    {icon && <img src={icon} alt="icon" />}  
    {nameButton}
    </But>
);
};

export default Button;

