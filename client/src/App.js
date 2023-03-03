// import logo from './logo.svg';
import "./App.css";

import React, { Component } from "react";
import Landingpage from "./components/landingpage";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <React.Fragment>
      {/* <Landingpage></Landingpage> */}
      {/* <Login></Login> */}
      <Signup></Signup>
    </React.Fragment>
  );
}

export default App;
