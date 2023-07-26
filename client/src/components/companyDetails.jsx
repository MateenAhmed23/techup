import React, { useState, useContext, useEffect } from "react";
import Navbar from "./subcomponents/navbar";
import Inputfield from "./subcomponents/inputfield";
import "./cssmaincomponents/companydetails.css";
import { useLocation } from 'react-router-dom';
import UserContext from "../context/user";
import { useNavigate } from "react-router-dom";
import Footer from "./subcomponents/footer";

function CompanyDetails() {
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [number, setNumber] = useState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');

  const location = useLocation();

  // email, password received from registration

  // const {email, password} = location.state


  // companyName,
  //     companyAddress,
  //     companyWebsite,
  //     companyPhoneNumber,
  //     email,
  //     password,

  // console.log(location.state.username)
  const navigate = useNavigate()
  const isLoggedIn = true
  const { isLoading, loginStatus, userInfo } = useContext(UserContext)

  useEffect(() => {
    // loginStatus()
    // console.log(location.state, 'Location')
    if (!location.state) {
      navigate('/register')
    }
    else {
      // const {email, password} = location.state
      // console.log(location.state)
      setEmail(location.state.email)
      setPassword(location.state.password)
    }
  }, [])

  async function handleRegister() {
    console.log('Lets register the company here')
    const companyAddress = address
    const companyWebsite = website
    const companyPhoneNumber = number
    const response = await fetch("http://127.0.0.1:5000/api/company_signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        companyName,
        companyAddress,
        companyWebsite,
        companyPhoneNumber,
      }),
    });
    const data = await response.json()
    console.log(data);
    if (response.status == 201) {
      console.log('USER CREATED SUCCESSFULLY');
      localStorage.setItem("token", data.token);
      loginStatus();
      navigate('/dashboard');
    } else {
      alert(data.message);
      return;
    }
  }

  return (
    <div className="alldetails">
      {!isLoggedIn ?
        (
          <>
            <h1>You cannot access this page without logging in</h1>
            <button onClick={() => navigate('/')}>Go to Home Page</button>
          </>
        ) :
        (
          <>
            <Navbar className="navbar"></Navbar>
            <h1 className="maninhead">Company Details</h1>

            <div className="col1">
              {" "}

              {/* <button onClick={()=>console.log(userInfo.userId, userInfo)}>Update Count</button> */}
              <div className="form-outline mb-4">
                <Inputfield
                  claslabel="form-label"
                  label="Company Name"
                  type="text"
                  value={companyName}
                  classfield="form-control form-control-lg"
                  id="emailfield"
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholdr=""
                />
              </div>
              <div className="form-outline mb-4">
                <Inputfield
                  claslabel="form-label"
                  label="Company Address"
                  type="text"
                  value={address}
                  classfield="form-control form-control-lg"
                  id="emailfield"
                  onChange={(e) => setAddress(e.target.value)}
                  placeholdr=""
                />
              </div>
              <div className="form-outline mb-4">
                <Inputfield
                  claslabel="form-label"
                  label="Website"
                  type="text"
                  value={website}
                  classfield="form-control form-control-lg"
                  id="emailfield"
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholdr=""
                />
              </div>
              <div className="form-outline mb-4">
                <Inputfield
                  claslabel="form-label"
                  label="Company Phone Number"
                  type="tel"
                  value={number}
                  classfield="form-control form-control-lg"
                  id="emailfield"
                  onChange={(e) => setNumber(e.target.value)}
                  placeholdr=""
                />
              </div>
            </div>
            <div className="buttondet">
              <a
                onClick={() => this.props.onnavclick("contractus")}
                className="back1154"
                href="#"
              >
                Back
              </a>
              <button className="register1154" onClick={() => handleRegister()}>Register</button>
            </div>

            <div className="footercompdetailspg">
              {/* <h1 className="heading">Footer</h1> */}
              <Footer />
            </div>
          </>
        )}
    </div>

  )
}
export default CompanyDetails;
