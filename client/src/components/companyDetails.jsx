import React, { useState } from "react";
import "./cssmaincomponents/login.css";
// import Footer from "./subcomponents/footer";
import Navbar from "./subcomponents/navbar";
import CompanyForm from "./subcomponents/companyform"


function CompDetails(){

    function handleclick(){
        console.log('CLICKED ON NAVBAR');
    }


    return(
      <div className="loginpage">
      <Navbar onnavclick={handleclick} className="navbar"></Navbar>

      <div className="companyForm">
              <CompanyForm/>
            </div>

        <div className="footer">
          <h1 className="heading">Footer</h1>
        </div>
      </div>
        )

}


export default CompDetails;