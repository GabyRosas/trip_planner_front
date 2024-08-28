import styled from "styled-components";


export const Title = styled.p`
font-size: 16PX;
margin-bottom: 40px;
font-family: 'Inter', sans-serif;
`;

export const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 100vh;
text-align: center;
background-color: #007A8C;
color: white;
padding: 20px;
box-sizing: border-box;
margin:0;

@media (max-width: 768px) {
}
`;

export const Logo = styled.img` 
width: 80px;
height: 80px;
margin-top: 5px;
margin.left: 90px;
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
font-size: 18PX;
color: white;
margin-bottom: 40px;
font-family: 'Inter', sans-serif;
` ;