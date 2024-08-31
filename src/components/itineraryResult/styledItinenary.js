import styled from 'styled-components';

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

export const InfoBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: 15px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 28px;
  margin: 0;
  font-family: 'Inter', sans-serif;
  margin-left: 15px;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

export const ContentContainer = styled.div`
  width: 300px;
  padding: 20px;
  text-align: center;
  color: white;
  margin-top: 100px;
`;

export const DestinationImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Section = styled.div`
  text-align: left;
  margin-top: 150px;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 25px;
  color: #33415C;
`;

export const Text = styled.p`
  font-size: 14px;
  color: white;
  margin-top: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;

export const SmallButton = styled.button`
  padding: 12px 45px;
  font-size: 16px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  color: white;
  background-color: #007A8C
`;
