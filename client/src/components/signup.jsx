import React, { useState } from 'react';
import "./cssmaincomponents/login.css";
// import Footer from "./subcomponents/footer";
import Navbar from "./subcomponents/navbar";
import SignupForm from './subcomponents/signupform';



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


  function handleclick(){
    // IDHER KIA DAALNA HA MUQAY????
  }


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
        alert(data.message);
        // setTimeout(() => {
        //   setErrorMsg("");
        //   setError(false);
        // }, 5000);
        return;
      }else{
        console.log('USER MADE SUCCESSFULLY');
        // history.push("/login");
      }
    }
    console.log('Inside Signup Handle Function',username)
  }
  return (
    <div className="loginpage">
            <Navbar onnavclick={handleclick} className="navbar"></Navbar>
    
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