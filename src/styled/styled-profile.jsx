import styled from "styled-components";
import Button from "../components/button/Button.jsx";


export const Titles = styled.p`
font-size: 28px;
margin-top: 120px;
font-family: 'Inter', sans-serif;
font-weight: bold;
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

export const Greeting = styled.h1`
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


export const ButtonAway = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
max-width: 400px; 
margin-top: 40px;

`;

export const ButtonMoreAway = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
max-width: 400px; 
margin-top: 100px;

`;

