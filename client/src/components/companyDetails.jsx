import React, { useState } from "react";
import "./cssmaincomponents/login.css";
// import Footer from "./subcomponents/footer";
import Navbar from "./subcomponents/navbar";

import Inputfield from "./subcomponents/inputfield";



function compDetails(){


    const [companyName,setCompanyName] = useState('')
    const [address,setAddress] = useState('')
    const [website,setWebsite] = useState('')
    const [number,setNumber] = useState()
    const [personName,setPersonName] = useState('')
    const [designation,setDesignation] = useState('')
    const [email,setEmail] = useState('')
    const [personNumber,setPersonNumber] = useState()


    function handleclick(){
        console.log('CLICKED ON NAVBAR');
    }



    return(
        <div className="">
        <Navbar onnavclick={handleclick} className="navbar"></Navbar>


        {/* Left Div */}
        <div className="registerOrg">

            <h3>Register Your Organisation</h3>

                        <div className="form-outline mb-4">
                          <Inputfield
                            claslabel="form-label"
                            label="Company Name"
                            type="text"
                            value={companyName}
                            classfield="form-control form-control-lg"
                            id="emailfield"
                            onChange={e=>setCompanyName(e.target.value)}
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
                            onChange={e=>setAddress(e.target.value)}
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
                            onChange={e=>setWebsite(e.target.value)}
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
                            onChange={e=>setNumber(e.target.value)}
                            placeholdr=""
                          />
                        </div>
                        
        </div>


        {/* Right Div */}

        <div className="personalDetails">

            <h3>Your Details</h3>

            <div className="form-outline mb-4">
              <Inputfield
                claslabel="form-label"
                label="Name"
                type="text"
                value={personName}
                classfield="form-control form-control-lg"
                id="emailfield"
                onChange={e=>setPersonName(e.target.value)}
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
                onChange={e=>setDesignation(e.target.value)}
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
                onChange={e=>setEmail(e.target.value)}
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
                onChange={e=>setPersonNumber(e.target.value)}
                placeholdr=""
              />
            </div>
            
</div>




        <div className="footer">
          <h1 className="heading">Footer</h1>
        </div>
      </div>
    )

}


export default compDetails;