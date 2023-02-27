import React, { Component } from 'react';
import "./cssmaincomponents/login.css";
import Footer from "./subcomponents/footer";
import Navbar from "./subcomponents/navbar";
import SignupForm from './subcomponents/signupform';

class Signup extends Component {
    state = {  } 
    handleSignup = (username, password) => {
        //Please enter login logic here @Mateen @Ahsan
        console.log(username);
      };
    
      render() {
        return (
          <div className="loginpage">
            <Navbar onnavclick={this.handleclick} className="navbar"></Navbar>
    
            <div className="LogForm">
              <SignupForm onSubmit={this.state.handleSignup} />
            </div>
            <div className="footer">
              <h1 className="heading">Footer</h1>
            </div>
          </div>
        );
      }
    }
 
export default Signup;