import React from 'react';
import { Link } from 'react-router-dom';
import { Container, FormWrapper, Title, Input, Button, LinkStyled } from "../login/styled"; 


const RegisterFom = () => {
    return (
    <Container>
        <FormWrapper>
        <Title>Create your account</Title>
        <Input type="user" placeholder="user name"/>
        <Input type="email" placeholder="Email Address" />
        <Input type="password" placeholder="Password" />
        <Button>Sing Up</Button>
        <LinkStyled to="/login">Already have an account? Log In</LinkStyled>
        </FormWrapper>
    </Container>
    );
};

export default RegisterFom;