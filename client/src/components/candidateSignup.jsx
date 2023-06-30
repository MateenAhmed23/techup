import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CandidateContext from '../context/candidate';
import CandidateSignupForm from './subcomponents/candidateSignupForm';
import Navbar from "./subcomponents/navbar";
import Footer from './subcomponents/footer';
import UserContext from '../context/user';

function CandidateSignup() {
    const navigate = useNavigate();
    const { isLoading, loginStatus, isLoggedIn } = useContext(CandidateContext);
    // const { isLoggedIn: isUserLoggedIn, loginStatus: userLoginStatus } = useContext(UserContext);

    useEffect(() => {
        // if (isUserLoggedIn) {
        //     navigate('/dashboard')
        // } else if (userLoginStatus()) {
        //     navigate('/dashboard')
        // }
        // else 
        if (isLoggedIn) {
            navigate('/candidate-dashboard');
        }
        else {
            loginStatus();
        }
    }, [isLoggedIn]);

    async function handleSignup(name, email, password, confirmPassword) {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        } else {
            const response = await fetch("http://127.0.0.1:5000/api/candidate_signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            const data = await response.json();
            if (data.status === "error") {
                alert('Could not create account');
                return;
            } else {
                localStorage.setItem('token', data.token);
                navigate('/candidate-dashboard');
            }
        }
    }

    function handleclick() {
        // IDHER KIA DAALNA HA MUQAY????
    }

    return (
        <div className="loginpage">
            {isLoading ? (
                <h1> I am currently loading. HA</h1>
            ) : (
                <>
                    <Navbar onnavclick={handleclick} className="navbar"></Navbar>

                    <div className="LogForm">
                        <CandidateSignupForm onSubmit={handleSignup} link='/candidate-login' />
                    </div>
                    <div className="footerloginpg">
                        <Footer />
                    </div>
                </>
            )};

        </div>
    );
}

export default CandidateSignup;
