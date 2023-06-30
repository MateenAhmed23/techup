import React, { useState, useEffect, useContext } from "react";
import "./cssmaincomponents/login.css";
// import Footer from "./subcomponents/footer";
import Navbar from "./subcomponents/navbar";
import LoginForm from "./subcomponents/loginform";

import { useNavigate } from 'react-router-dom';

import Footer from "./subcomponents/footer";

import UserContext from '../context/user';
import CandidateContext from '../context/candidate';


function Login() {

  const navigate = useNavigate();

  const { isLoading, loginStatus, isLoggedIn } = useContext(UserContext);
  // const { isLoggedIn: isCandidateLoggedIn, loginStatus: candidateLoginStatus } = useContext(CandidateContext)

  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  // const [userData,setUserData] = useState(null);


  useEffect(() => {
    // if (isCandidateLoggedIn) {
    //   navigate('/candidate-dashboard');
    // }
    // else if (candidateLoginStatus()) {
    //   navigate('/candidate-dashboard');
    // }
    // else 
    if (isLoggedIn) {
      navigate('/dashboard')
    }
    else {
      loginStatus()
    }
  }, [isLoggedIn])


  async function handleLogin(email, password) {
    // console.log(email)

    const response = await fetch("http://127.0.0.1:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    console.log(data)

    if (response.status == 201) {
      console.log('USER LOGINNED SUCCESSFULLY')
      localStorage.setItem("token", data.token);
      navigate('/dashboard');
    } else {
      alert(data.message);
      return;
    }
  }

  function handleclick() {

  }


  return (
    <div className="loginpage">
      <Navbar onnavclick={handleclick} className="navbar"></Navbar>

      <div className="LogForm">
        <LoginForm onSubmit={handleLogin} link={"/register"} />
      </div>

      <div className="footerloginpg">
        <Footer />
      </div>
    </div>
  )

}

export default Login;
