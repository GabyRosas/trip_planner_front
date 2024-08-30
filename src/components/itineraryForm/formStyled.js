import styled from 'styled-components';
import BeachForm from '../../assets/images/BeachForm.png'; 

export const BackgroundContainer = styled.div`
  background-image: url(${BeachForm});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
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

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 10px 0;
  border: 1px solid #336749;
  border-radius: 5px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007A8C;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 100px;
  transition: background-color 0.3s ease;
`;

export const Label = styled.label`
  color: white;
  font-size: 20px;
  margin-top: 25px;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Inter', sans-serif
`;

export const StyledSelect = styled.select`
    width: 100%;
    padding: 12px 20px;  /* Igual que StyledInput */
    margin: 10px 0;
    border: 1px solid #336749;
    border-radius: 5px;
    font-size: 16px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #6C757D;

    option[value=""][disabled] {
        color: #6C757D;
    }
`;


