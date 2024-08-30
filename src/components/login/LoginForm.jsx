import React from 'react';
import { Container, FormWrapper, Title, Input, Button, LinkStyled } from "./styled";
import { useState } from 'react';


const LoginForm = () => {
const [username, setUsername] = useState(""); 
const [password, setPassword] = useState("");

const handleSubmit = (e) => {
e.preventDefault()
// aqui hacemos la peticion al back
}
return (
    <Container>
        <FormWrapper onSubmit={handleSubmit} >
        <Title>Your account</Title>
        <Input type="text"  name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
        <Input type="password"  name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
        <LinkStyled>Forgot password?</LinkStyled>
        <Button type="submit">Log In</Button>
        <LinkStyled to="/Register">I don’t have an account</LinkStyled>
        </FormWrapper>
    </Container>
    );
};

export default LoginForm;