// import logo from './logo.svg';
import "./App.css";

import React, { Component } from "react";
import Landingpage from "./components/landingpage";
import Login from "./components/login";
import Signup from "./components/signup";
import CompDetails from "./components/companyDetails";

function App() {
  return (
    <React.Fragment>
      {/* <Landingpage></Landingpage> */}
      {/* <Login></Login> */}
      {/* <Signup></Signup> */}
        <CompDetails></CompDetails>
    </React.Fragment>
  );
}

export default App;
