import React, { Component } from "react";
import logo from "./csssubcomponents/logowhite .png";
import "./csssubcomponents/navbar.css";
class Navbar extends Component {
  state = {
    
  };
  render() {
    return (
        <nav>
          <img src={logo} width={170} height={50} className="logo" />
          <ul>
            <li>
              <a onClick={() => this.props.onnavclick("home")} className="commonitems active" href="#">
                Home
              </a>
            </li>
            <li>
              <a onClick={() => this.props.onnavclick("services")} className="commonitems" href="#">
                Serivces
              </a>
            </li>
            <li>
              <a onClick={() => this.props.onnavclick("aboutus")} className="commonitems" href="#">
                About Us
              </a>
            </li>
            <li>
              <a onClick={() => this.props.onnavclick("pricing")} className="commonitems" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <a onClick={() => this.props.onnavclick("contractus")} className="contractus" href="#">
            Contract Us
          </a>
          <a onClick={() => this.props.onnavclick("signup")} className="signup" href="#">
            SignUp
          </a>
        </nav>
    );
  }
}

export default Navbar;
