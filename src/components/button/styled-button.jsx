import styled from "styled-components";
import { Link } from 'react-router-dom'; 



export const But = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
background-color: ${({ backgroundColor }) => backgroundColor || '#007A8C'}; 
color: ${({ textColor }) => textColor || '#fff'}; 
font-size: 18px !important;
border: none;
border-radius: 30px;
padding: 12px 24px;
width: 100%;
max-width: 400px;
min-width: 200px;
height: auto;
cursor: pointer;
text-decoration: none;
transition: background-color 0.3s;
font-family: "Inter", sans-serif;
margin-bottom: 20px;
gap:10px;

img {
    width: 24px;
    height: 24px;
}
`;



