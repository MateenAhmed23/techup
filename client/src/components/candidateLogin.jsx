import React, { useState, useEffect, useContext } from "react";
import "./cssmaincomponents/login.css";
import Navbar from "./subcomponents/navbar";
import LoginForm from "./subcomponents/loginform";
import { useNavigate } from 'react-router-dom';
import Footer from "./subcomponents/footer";
import CandidateContext from '../context/candidate';
import UserContext from "../context/user";

function CandidateLogin() {
    const navigate = useNavigate();
    const { isLoading, loginStatus, isLoggedIn, candidateInfo } = useContext(CandidateContext);
    // const { isLoggedIn: isUserLoggedIn, loginStatus: userLoginStatus } = useContext(UserContext);

    useEffect(() => {
        // if (isUserLoggedIn) {
        //     navigate('/dashboard')
        // }
        // else if (userLoginStatus()) {
        //     navigate('/dashboard')
        // }
        // else 
        if (isLoggedIn) {
            navigate('/candidate-dashboard');
        }
        else {
            loginStatus()
        }
    }, [isLoggedIn])

    async function handleLogin(email, password) {
        const response = await fetch("http://127.0.0.1:5000/api/candidate-login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            })
        });

        const data = await response.json();

        if (response.status === 201) {
            localStorage.setItem('token', data.token);
            navigate('/candidate-dashboard');
        } else {
            alert(data.message); // show error message from server
        }
    }

    function handleclick() {

    }

    return (
        <div className="loginpage">
            <Navbar onnavclick={handleclick} className="navbar"></Navbar>

            <div className="LogForm">
                <LoginForm onSubmit={handleLogin} link={'/candidate-signup'} />
            </div>

            <div className="footerloginpg">
                <Footer />
            </div>
        </div>
    );
}

export default CandidateLogin;
