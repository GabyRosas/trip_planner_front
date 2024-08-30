import styled from "styled-components";


export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #007a8c;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  margin: 0;
`;

export const Container = styled.div`
  background-color: #4bb2a0;
  border-radius: 20px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  color: #fff;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

export const ImageContainer = styled.div`
  text-align: center;
`;

export const MainImage = styled.img`
  width: 100%;
  border-radius: 15px;
`;

export const Location = styled.h2`
  font-size: 18px;
  margin-top: 10px;
`;

export const Section = styled.div`
  margin-top: 20px;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const ImageGrid = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SmallImage = styled.img`
  width: 48%;
  border-radius: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: #008c74;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;
