import React, { useEffect, useContext } from 'react';
import "./cssmaincomponents/login.css";
// import Footer from "./subcomponents/footer";
import Navbar from "./subcomponents/navbar";
import SignupForm from './subcomponents/signupform';
import Footer from './subcomponents/footer';



// import verifyToken from './helperFunction/verifyToken';


// import {useHistory} from 'react-router-dom'

import { useNavigate } from 'react-router-dom';


import UserContext from '../context/user';
import CandidateContext from '../context/candidate';

function Signup() {

  const navigate = useNavigate();

  const { isLoading, loginStatus, isLoggedIn } = useContext(UserContext);
  const { isLoggedIn: isCandidateLoggedIn, loginStatus: candidateLoginStatus } = useContext(CandidateContext)

  // const [userData,setUserData] = useState(null);

  function handleclick() {
    // IDHER KIA DAALNA HA MUQAY????
  }

  useEffect(() => {
    // if (isCandidateLoggedIn) {
    //   navigate('/candidate-dashboard');
    // } else if (candidateLoginStatus()) {
    //   navigate('/candidate-dashboard');
    // }
    // else
    if (isLoggedIn) {
      navigate('/dashboard')
    }
    else {
      loginStatus()
    }
    // console.log(loginStatus())
    // if (loginStatus())
    // {
    //   console.log('HEE22')
    //   navigate('/')
    // }
  }, [isLoggedIn])

  // useEffect(()=>{
  //   console.log('Called inside signup')
  //   // console.log(count)
  //   updateCount()
  // },[])

  async function handleSignup(email, password, confirmPassword) {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else {
      navigate('/companyDetails', {
        state: {
          email,
          password
        }
      })
    }
  }
  return (
    <div className="loginpage">
      {isLoading ? (
        <h1> I am currently loading. HA</h1>
      ) : (
        <>
          <Navbar onnavclick={handleclick} className="navbar"></Navbar>

          <div className="LogForm">
            <SignupForm onSubmit={handleSignup} link='/login' />
          </div>
          <div className="footerloginpg">
            <Footer />
          </div>
        </>
      )};

    </div>
  )
}

export default Signup;