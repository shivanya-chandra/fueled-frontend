import React from 'react';
import '../App.css';
import loginSvg from '../images/login.svg';
import logoFull from '../images/logofull.png';
import axios from 'axios';
function Home() {
    const handleLogin = async () => {
        try {
            const response = await axios.get('/auth/login');
            const redirectUrl = response.data.redirectUrl;
            window.location.href = redirectUrl; 
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <div className="home-main">
        <div className="flex-container-1">
            <img src={logoFull} alt='logo' />
            <h1 className="home-heading">Welcome</h1>
            <p className="home-description">Please enter your login details to continue accessing your account</p>
            <button className="home-sign-in" onClick={handleLogin}>Sign in with Google</button>
            <button className="home-sign-up" onClick={handleLogin}>Sign up with Google</button>

        </div>

        <div className="flex-container-2">
            <img src={loginSvg} alt="login svg" />
        </div>
        </div>
    );
}

export default Home;
