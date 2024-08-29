import React from 'react'; 
import { But } from './styled-button';

const  Button = ({ to, nameButton}) => {
    return (
        <But to={to}>{nameButton}</But>
    );
};

export default Button;