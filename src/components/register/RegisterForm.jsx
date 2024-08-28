import React from "react";
import {
  Container,
  FormWrapper,
  Title,
  Input,
  Button,
  LinkStyled,
} from "../login/styled";

const RegisterFom = () => {
  return (
    <Container>
      <FormWrapper>
        <Title>Create your account</Title>
        <Input type="user" placeholder="user name" />
        <Input type="email" placeholder="Email Address" />
        <Input type="password" placeholder="Password" />
        <Button>Sign Up</Button>
        <LinkStyled to="/login">Already have an account? Log In</LinkStyled>
      </FormWrapper>
    </Container>
  );
};

export default RegisterFom;
