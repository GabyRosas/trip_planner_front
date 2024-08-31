import styled from "styled-components";
import Button from "../components/button/Button.jsx";
import { Link } from 'react-router-dom';


export const Title = styled.p`
font-size: 18px;
margin-top: 120px;
font-family: 'Inter', sans-serif;
color: #33415C;
`;


export const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
text-align: center;
background-color: #3E9CA7;
color: white;
padding: 20px;
box-sizing: border-box;
margin:0;
position: relative;
background-size:cover;

@media (max-width: 768px) {
}
`;

export const Logo = styled.img` 
width: 60px;
height: 63px;
position: absolute;
top: 20px;
right:40px;
margin: 0;
` ;


export const MyProfile = styled.img`
width: 97px;
height: 97px;
margin-top: 30px;
margin:0;

` ;

export const Name = styled.p`
font-size: 16px;
margin-bottom: 40px;
font-family: 'Inter', sans-serif;
` ;

export const Main = styled.p`
font-size: 15px;
color: white;
margin-bottom: 40px;
font-family: 'Inter', sans-serif;
position: absolute;
top: 20px;
left:20px;
margin: 0;

` ;


export const Line = styled.img`
color: white;
margin-bottom: 40px;

` ;


export const Input = styled.input`
width: 80%;
padding: 15px;
margin: 15px;
margin-bottom: 30px;
border-radius: 15px;
border: 1px solid #ddd;
font-size: 16px;
`;


export const InfoBar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-size: cover;
width: 100%;
height: 100vh;
margin-top: 0;

`;