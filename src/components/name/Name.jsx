import React from "react";
import Logo from "../logo/logo";

const Name = ({ name, logoSrc, logoAlt }) => {
    return (
        <Logo src={logoSrc} alt={logoAlt}/>
        <span>{name}</span>
);
};

export default Name;




