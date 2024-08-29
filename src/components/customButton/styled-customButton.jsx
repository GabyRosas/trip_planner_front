import styled from 'styled-components';

export const ButtonContainer = styled.div`
display: flex;
justify-content: column;
align-items: center;
gap: 20px;
`;

export const IconButton = styled.button`
display: flex;
align-items: center;
justify-content: center;

background-color: #007A8C;
color: #FFFFFF;
font-size: 14px;
border: none;
border-radius: 10px;
padding: 10px 20px;
width: 100%;
max-width: 200px;
height: 50px;
cursor: pointer;
transition: background-color 0.3s;
margin-bottom:10px;

&:hover {
    background-color: #005f6a;
};




img {
    margin-right: 10px;
    width: 24px;
    height: 24px;
}


&: Notification( : last-child) {
    margin-right: 10px;
}

`;

