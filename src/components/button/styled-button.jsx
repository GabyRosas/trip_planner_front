import styled from "styled-components";
import { Link } from 'react-router-dom'; 



export const But = styled(Link)`
display: flex;
align-items: flex-start;
justify-content: center;
background-color: #007A8C;
color: #FFFFFF;
font-size: 16px;
border: none;
border-radius: 30px;
padding: 10px 20px;
width: 100%;
max-width: 300px;
height: 30px;
cursor: pointer;
text-decoration: none;
transition: background-color 0.3s;
font-family: "Inter", sans-serif;
margin-bottom: 20px;
gap:30px;

img {
    width: 24px;
    height: 24px;
}
`;



