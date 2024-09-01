import styled from "styled-components";
import Button from "../components/button/Button.jsx";
import { Link } from 'react-router-dom';

export const Title = styled.h1`
    font-size: 24px;
    margin-top: 100px;
    margin-bottom: 30px; 
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
    margin: 0;
    position: relative;
    background-size: cover;
`;

export const Logo = styled.img` 
    width: 60px;
    height: 63px;
    position: absolute;
    top: 20px;
    right: 40px;
    margin: 0;
`;

export const MyProfile = styled.img`
    width: 97px;
    height: 97px;
    margin-bottom: 15px; 
`;

export const Name = styled.p`
    font-size: 18px;
    font-family: 'Inter', sans-serif;
    color: #fff;
`;

export const Greeting = styled.p`
    font-size: 15px;
    color: white;
    position: absolute;
    top: 20px;
    left: 20px;
    margin: 0;
`;

export const Line = styled.img`
    color: white;
    margin-bottom: 20px;
    margin-top: 20px;
`;

export const Input = styled.input`
    width: 80%;
    padding: 15px;
    margin: 15px;
    margin-bottom: 30px;
    border-radius: 15px;
    border: 1px solid #ddd;
    font-size: 16px;
`;


export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px; 
`;

