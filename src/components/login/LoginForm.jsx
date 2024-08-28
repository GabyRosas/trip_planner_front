import React from 'react';
import { Link } from 'react-router-dom';
import { Container, FormWrapper, Title, Input, Button, LinkStyled } from "./styled";

const LoginForm = () => {
    return (
    <Container>
        <FormWrapper>
        <Title>Your account</Title>
        <Input type="email" placeholder="Email Address" />
        <Input type="password" placeholder="Password" />
        <Link>Forgot password?</Link>
        <Button>Log In</Button>
        <LinkStyled to="/register">I don’t have an account</LinkStyled>
        </FormWrapper>
    </Container>
    );
};

export default LoginForm;