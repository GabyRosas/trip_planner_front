import React from 'react';
import Button from '../components/button/Button.jsx';
import Logo from '../components/logo/logo.jsx';


const Home = () => {
const handleClick = () => {
    alert('Button clicked!');
};
return (
<div>
<Logo src="/" alt="App Logo" />
<Text/>
<Button onClick={handleClick}>Get Started</Button>
</div>
);
};

export default Home;