import React from 'react'; 


const  Button =  ({ children, oneClick }) => {
    return (
        <button onClick={onClick}>
            { children }
        </button>
    );
};

export default Button;