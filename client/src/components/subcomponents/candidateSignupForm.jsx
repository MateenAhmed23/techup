import React, { useState } from "react";
import Button from "./button";
import Inputfield from "./inputfield";
import logo from "./csssubcomponents/logoblack.png";
import google from "./csssubcomponents/google.png";
import linkedin from "./csssubcomponents/linkedin.png";


import { useNavigate } from 'react-router-dom';


function CandidateSignupForm({ onSubmit, link }) {

    const navigate = useNavigate();

    // const [username,setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    function onClickRegister() {
        console.log('HIII')
        onSubmit(name, email, password, confirmPassword)
    }

    function handleNameChange(e) {
        setName(e.target.value)
    };

    function handleEmailChange(e) {
        setEmail(e.target.value)
    };

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    };

    function handleConfirmPasswordChange(e) {
        setConfirmPassword(e.target.value)
    };

    function redirectToLogin() {
        navigate(link);
    }

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                        alt="login form"
                                        className="img-fluid"
                                        style={{
                                            borderRadius: "1rem 0 0 1rem",
                                            height: "97.5vh",
                                        }}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <form>
                                            <div className="container d-flex justify-content-center align-items-center mb-5 ">
                                                <span className="h1 fw-bold mb-0">
                                                    <img
                                                        src={logo}
                                                        width={220}
                                                        height={80}
                                                        className="logomain"
                                                    />
                                                </span>
                                            </div>

                                            <h5
                                                className="fw-normal mb-1 pb-3"
                                                style={{ letterSpacing: "1px" }}
                                            >
                                                Register your account
                                            </h5>

                                            <div className="form-outline mb-3">
                                                <Inputfield
                                                    claslabel="form-label"
                                                    label="Name"
                                                    type="text"
                                                    value={name}
                                                    classfield="form-control form-control-lg"
                                                    id="namefield"
                                                    onChange={handleNameChange}
                                                    placeholdr="Enter your Full Name"
                                                />
                                            </div>

                                            <div className="form-outline mb-3">
                                                <Inputfield
                                                    claslabel="form-label"
                                                    label="Email"
                                                    type="email"
                                                    value={email}
                                                    classfield="form-control form-control-lg"
                                                    id="emailfield"
                                                    onChange={handleEmailChange}
                                                    placeholdr="Enter your Email"
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <Inputfield
                                                    claslabel="form-label"
                                                    label="Password"
                                                    type="password"
                                                    value={password}
                                                    onChange={handlePasswordChange}
                                                    classfield="form-control form-control-lg"
                                                    id="passwordfield"
                                                    placeholdr="Enter your Password"
                                                />
                                            </div>
                                            <div className="form-outline mb-2">
                                                <Inputfield
                                                    claslabel="form-label"
                                                    label="ConfirmPassword"
                                                    type="password"
                                                    value={confirmPassword}
                                                    onChange={handleConfirmPasswordChange}
                                                    classfield="form-control form-control-lg"
                                                    id="Confirmpasswordfield"
                                                    placeholdr="Enter your Password again"
                                                />
                                            </div>

                                            <div className="pt-1 mb-2">
                                                <Button
                                                    className="btn btn-dark btn-lg btn-block"
                                                    type="button"
                                                    onClick={onClickRegister}
                                                >
                                                    Register
                                                </Button>
                                            </div>
                                            <p
                                                className="mb-2 pb-lg-2"
                                                style={{ color: "#393f81" }}
                                            >
                                                Already Have an Account?{" "}
                                                <button onClick={() => redirectToLogin()} style={{ color: "#393f81" }}>
                                                    Login
                                                </button>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CandidateSignupForm;
