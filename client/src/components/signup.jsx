import React, { useEffect, useContext } from 'react';
import "./cssmaincomponents/login.css";
// import Footer from "./subcomponents/footer";
import Navbar from "./subcomponents/navbar";
import SignupForm from './subcomponents/signupform';



// import verifyToken from './helperFunction/verifyToken';


// import {useHistory} from 'react-router-dom'

import { useNavigate  } from 'react-router-dom';


import UserContext from '../context/user';



function Signup(){

  const navigate = useNavigate();

  const {isLoading, loginStatus, isLoggedIn} = useContext(UserContext);


  // const [userData,setUserData] = useState(null);

  function handleclick(){
    // IDHER KIA DAALNA HA MUQAY????
  }



  useEffect(()=>{


    if (isLoggedIn){
      navigate('/companyDetails')
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

  // useEffect(()=>{
  //   console.log('Called inside signup')
  //   // console.log(count)
  //   updateCount()
  // },[])

  async function handleSignup(email,password,confirmPassword){
    if (password !== confirmPassword) {
      // setError(true);
      alert("Passwords do not match");
      // setTimeout(() => {
      //   setErrorMsg("");
      //   setError(false);
      // }, 5000);
      return;
    } else {
      // const response = await fetch("http://127.0.0.1:5000/api/register", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     username,
      //     email,
      //     password,
      //   }),
      // });

      // const data = await response.json();
      // if (data.status === "error"){
      //   // setError(true);
      //   alert('Credentials not correct');
      //   // setTimeout(() => {
      //   //   setErrorMsg("");
      //   //   setError(false);
      //   // }, 5000);
      //   return;
      // }else{
      //   console.log('USER MADE SUCCESSFULLY');
      //   // console.log(data);

      //   localStorage.setItem('token', data.token);

      //   navigate('/companyDetails')

      //   // Accessing token from local storage
      //   // const myData = JSON.parse(localStorage.getItem('myData'));
      //   // console.log('MY USER TOKEN',localStorage.getItem('token'))
      //   // history.push("/login");
      // }

      navigate('/companyDetails', {state:{
        email,
        password
      }})


    }
    // console.log('Inside Signup Handle Function',username)
  }
  return (
    <div className="loginpage">
      {isLoading ? (
        <h1> I am currently loading. HA</h1>
        ): (
          <>
          <Navbar onnavclick={handleclick} className="navbar"></Navbar>
    
            <div className="LogForm">
              <SignupForm onSubmit={handleSignup} />
            </div>
            <div className="footer">
              <h1 className="heading">Footer</h1>
            </div>
          </>
      )};
            
          </div>
  )
}
 
export default Signup;