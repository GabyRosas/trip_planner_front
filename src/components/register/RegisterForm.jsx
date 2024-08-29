import React from 'react';
import { Container, FormWrapper, Title, Input, Button, LinkStyled } from "../login/styled";
import { useState } from 'react';


const RegisterForm = () => {
    const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    });
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
});
};
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    };
return (
<Container>
<FormWrapper onSubmit={handleSubmit}>
<Title>Create your account</Title>
<Input type="text" name="username" value={formData.username}
onChange={handleChange} placeholder="Username"/>
<Input type="text" name="firstName" value={formData.firstName}
onChange={handleChange} placeholder="First Name"/>
<Input type="text" name="lastName" value={formData.lastName}
onChange={handleChange} placeholder="Last Name"/>
<Input type="email" name="email" value={formData.email}
onChange={handleChange} placeholder="Email Address"/>
<Input type="password" name="password" value={formData.password}
onChange={handleChange} placeholder="Password"/>
<Button type="submit">Sign Up</Button>
<LinkStyled to="/login">Already have an account? Log In</LinkStyled>
</FormWrapper>
</Container>
    );
};

export default RegisterForm;