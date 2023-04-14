import React, { useState, useContext, useEffect } from "react";
// import Footer from "./subcomponents/footer";
import Navbar from "./subcomponents/navbar";
import Inputfield from "./subcomponents/inputfield";
import "./cssmaincomponents/companydetails.css";


import UserContext from "../context/user";

import { useNavigate } from "react-router-dom";

function CompanyDetails(props) {
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [number, setNumber] = useState();
  const [personName, setPersonName] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [personNumber, setPersonNumber] = useState();


  const navigate = useNavigate()

  const {isLoading, loginStatus, userInfo, isLoggedIn} = useContext(UserContext)
  
  useEffect(()=>{
    loginStatus()
  },[])

  function handleRegister(){
    console.log('Lets register the company here')
  }

  return (
    <div className="alldetails">
      {!isLoggedIn ? 
      (  
      <>
      <h1>You cannot access this page without logging in</h1>
      <button onClick={()=>navigate('/')}>Go to Home Page</button>
      </>
      ):
      (
        <>
          <Navbar className="navbar"></Navbar>
          <h1 className="maninhead">Profile SetUp</h1>
      
      <div className="col1">
        {" "}
        <h1 className="headingcomp">Company Details</h1>
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
            type="number"
            value={number}
            classfield="form-control form-control-lg"
            id="emailfield"
            onChange={(e) => setNumber(e.target.value)}
            placeholdr=""
          />
        </div>
      </div>
      <div className="col2">
        <h1 className="headingcomp">Person Details</h1>

        <div className="form-outline mb-4">
          <Inputfield
            claslabel="form-label"
            label="Name"
            type="text"
            value={personName}
            classfield="form-control form-control-lg"
            id="emailfield"
            onChange={(e) => setPersonName(e.target.value)}
            placeholdr=""
          />
        </div>

        <div className="form-outline mb-4">
          <Inputfield
            claslabel="form-label"
            label="Designation"
            type="text"
            value={designation}
            classfield="form-control form-control-lg"
            id="emailfield"
            onChange={(e) => setDesignation(e.target.value)}
            placeholdr=""
          />
        </div>

        <div className="form-outline mb-4">
          <Inputfield
            claslabel="form-label"
            label="Email Address"
            type="email"
            value={email}
            classfield="form-control form-control-lg"
            id="emailfield"
            onChange={(e) => setEmail(e.target.value)}
            placeholdr=""
          />
        </div>

        <div className="form-outline mb-4">
          <Inputfield
            claslabel="form-label"
            label="Contact Number"
            type="number"
            value={personNumber}
            classfield="form-control form-control-lg"
            id="emailfield"
            onChange={(e) => setPersonNumber(e.target.value)}
            placeholdr=""
          />
        </div>
      </div>
      <div className="buttondet">
        <a
          onClick={() => this.props.onnavclick("contractus")}
          className="back"
          href="#"
        >
           &nbsp; &nbsp;Back  &nbsp; &nbsp;
        </a>
        <button className="register" onClick={()=>handleRegister()}>Register</button>
      </div>

      <div className="footer">
        <h1 className="heading">Footer</h1>
      </div>
        </>
      )}
    </div>
    
  )
  return (
    <div className="alldetails">
      
    </div>
  );
}



export default CompanyDetails;
