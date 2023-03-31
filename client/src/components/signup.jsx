import React, { useState, useEffect, useContext } from 'react';
import "./cssmaincomponents/login.css";
// import Footer from "./subcomponents/footer";
import Navbar from "./subcomponents/navbar";
import SignupForm from './subcomponents/signupform';



// import verifyToken from './helperFunction/verifyToken';


// import {useHistory} from 'react-router-dom'

import { useNavigate  } from 'react-router-dom';


import UserContext from '../context/user';




// ERROR:

// WE ARE NOT CONFIRMING IF THE PASSWORD AND CONFIRMPASSWORD ARE THE SAME


// class Signup extends Component {
//     state = {  } 
//     handleSignup = (username, password) => {
//         //Please enter login logic here @Mateen @Ahsan


//         // if (password !== confirmPassword) {
//         //   setError(true);
//         //   setErrorMsg("Passwords do not match");
//         //   setTimeout(() => {
//         //     setErrorMsg("");
//         //     setError(false);
//         //   }, 5000);
//         //   return;
//         // } else {
//         //   const response = await fetch("http://localhost:5000/api/register", {
//         //     method: "POST",
//         //     headers: {
//         //       "Content-Type": "application/json",
//         //     },
//         //     body: JSON.stringify({
//         //       username,
//         //       email,
//         //       password,
//         //     }),
//         //   });
    
//         //   const data = await response.json();
//         //   if (data.status === "error"){
//         //     setError(true);
//         //     setErrorMsg(data.message);
//         //     setTimeout(() => {
//         //       setErrorMsg("");
//         //       setError(false);
//         //     }, 5000);
//         //     return;
//         //   }else{
//         //     history.push("/login");
//         //   }
//         // }
//         console.log(username);
//       };
    
//       render() {
//         return (
//           <div className="loginpage">
//             <Navbar onnavclick={this.handleclick} className="navbar"></Navbar>
    
//             <div className="LogForm">
//               <SignupForm onSubmit={this.state.handleSignup} />
//             </div>
//             <div className="footer">
//               <h1 className="heading">Footer</h1>
//             </div>
//           </div>
//         );
//       }
//     }


function Signup(){

  const navigate = useNavigate();

  const {loginStatus} = useContext(UserContext);


  const [userData,setUserData] = useState(null);

  function handleclick(){
    // IDHER KIA DAALNA HA MUQAY????
  }



  useEffect(()=>{

    async function verifyToken(token){

      // console.log('Inside VERIFY')

      try{
        const res = await fetch('http://127.0.0.1:5000/api/verify-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token // Include the token in the Authorization header
          }
        })
        // console.log('HAHA')
        const r = await res.json()

        // console.log(r)
        // console.log(r.payload.userId)

        setUserData({
          valid: r.valid,
          _id: r.payload.userId
        })
        // console.log(r)
      }catch(e){
        setUserData({
          valid: false
        })
      }

      

    }

    

    const token = localStorage.getItem('token')
    console.log(token, 'Inside useEffect')

    if (token)
    {

      console.log('token exists')

      
      verifyToken(token)

      // if (validToken){
      //     console.log('You are already logged in, log out to come to this page');
      //     navigate('/home');
      // }
    }
    else{
      setUserData({
        valid: false
      })
      console.log('Token does not exist')
    }
   


  },[])

  useEffect(()=>{

    console.log(userData, 'THIS IS USER DATA IN SIGNUP')


    if (userData && userData.valid){
      console.log('YOU ARE ALREADY LOOGED IN')
      navigate('/')
    }
  },[userData])

  async function handleSignup(username,email,password,confirmPassword){
    if (password !== confirmPassword) {
      // setError(true);
      alert("Passwords do not match");
      // setTimeout(() => {
      //   setErrorMsg("");
      //   setError(false);
      // }, 5000);
      return;
    } else {
      const response = await fetch("http://127.0.0.1:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();
      if (data.status === "error"){
        // setError(true);
        alert('Credentials not correct');
        // setTimeout(() => {
        //   setErrorMsg("");
        //   setError(false);
        // }, 5000);
        return;
      }else{
        console.log('USER MADE SUCCESSFULLY');
        // console.log(data);

        localStorage.setItem('token', data.token);

        navigate('/')

        // Accessing token from local storage
        // const myData = JSON.parse(localStorage.getItem('myData'));
        // console.log('MY USER TOKEN',localStorage.getItem('token'))
        // history.push("/login");
      }
    }
    // console.log('Inside Signup Handle Function',username)
  }
  return (
    <div className="loginpage">
            <Navbar onnavclick={handleclick} className="navbar"></Navbar>

            {/* <h1>{count}</h1> */}
            <button onClick={loginStatus} >Login Status</button>
    
            <div className="LogForm">
              <SignupForm onSubmit={handleSignup} />
            </div>
            <div className="footer">
              <h1 className="heading">Footer</h1>
            </div>
          </div>
  )
}
 
export default Signup;