import React from 'react';
import { Container, FormWrapper, Title, Input, Button, LinkStyled } from "./styled";

const LoginForm = () => {
    return (
    <Container>
        <FormWrapper>
        <Title>Your account</Title>
        <Input type="email" placeholder="Email Address" />
        <Input type="password" placeholder="Password" />
        <LinkStyled>Forgot password?</LinkStyled>
        <Button>Log In</Button>
        <LinkStyled to="/Register">I don’t have an account</LinkStyled>
        </FormWrapper>
    </Container>
    );
};

export default LoginForm;