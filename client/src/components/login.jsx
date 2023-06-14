import React, { useState, useEffect, useContext } from "react";
import "./cssmaincomponents/login.css";
// import Footer from "./subcomponents/footer";
import Navbar from "./subcomponents/navbar";
import LoginForm from "./subcomponents/loginform";

import { useNavigate  } from 'react-router-dom';


import UserContext from '../context/user';





function Login(){

  const navigate = useNavigate();

  const {isLoading, loginStatus, isLoggedIn} = useContext(UserContext);



  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  // const [userData,setUserData] = useState(null);
  

  useEffect(()=>{


    if (isLoggedIn){
      navigate('/')
    }
    else{
      loginStatus()
    }
    // console.log(loginStatus())
    // if (loginStatus())
    // {
    //   console.log('HEE22')
    //   navigate('/')
    // }
  },[isLoggedIn])


  async function handleLogin(email, password){
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

      if (response.status == 201){
        console.log('USER LOGINNED SUCCESSFULLY')
        localStorage.setItem("token", data.token);
        navigate('/dashboard');
      }else{
        alert(data.message);
        return;
      }
  }

  function handleclick(){

  }


  return (
    <div className="loginpage">
        <Navbar onnavclick={handleclick} className="navbar"></Navbar>

        <div className="LogForm">
          <LoginForm onSubmit={handleLogin} />
        </div>
        <div className="footer">
          <h1 className="heading">Footer</h1>
        </div>
      </div>
  )

}

export default Login;
