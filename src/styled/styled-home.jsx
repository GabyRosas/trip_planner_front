import styled from "styled-components";


export const Title = styled.p`
font-size: 16px;
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
margin-top: 50px;
` ;

export const TripPlanner = styled.img` 
width: 250px;
height: 100px;
` ;

export const Img = styled.img`
height: auto;
object-fit: cover;
margin:0;
padding:0;
display:block;
background-position: left top, right top;
gap:0;
` ;








