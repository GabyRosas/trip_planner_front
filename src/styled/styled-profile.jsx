import styled from "styled-components";

export const Title = styled.p`
font-size: 20px;
margin-bottom: 40px;
font-family: 'Inter', sans-serif;
color: #33415C
`;


export const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
text-align: center;
background-color: #007A8C;
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
width: 80px;
height: 80px;
margin-top: 5px;
margin-right: 90px;
` ;



export const MyProfile = styled.img`
width: 80px;
height: 80px;
margin-top: 50px;
` ;

export const Name = styled.p`
font-size: 12PX;
margin-bottom: 40px;
font-family: 'Inter', sans-serif;
` ;

export const Greeting =  styled.h1`
font-size: 16px;
color: white;
margin-bottom: 40px;
font-family: 'Inter', sans-serif;
position: absolute;
top: 20px;
left:20px;
margin: 0;

` ;