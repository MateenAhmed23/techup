import React, { useEffect, useContext, useState } from "react";
import logo from "./csssubcomponents/logowhite .png";
import "./csssubcomponents/navbar.css";
import { Link } from "react-router-dom";
import UserContext from "../../context/user";

function Navbar(){

  const {isLoggedIn, signOutUser} = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  useEffect(()=>{
    // console.log(" i was changed in Navbar")
  }, [isLoggedIn])

  return (
    <nav>
        <img src={logo} width={170} height={50} className="logo" />
        <button onClick={toggleDropdown} className="dropdown-button">☰</button>
        <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
          <a onClick={() => this.props.onnavclick("home")} className="commonitems active" href="#">
            Home
          </a>
          <a onClick={() => this.props.onnavclick("services")} className="commonitems" href="#">
            Services
          </a>
          <a onClick={() => this.props.onnavclick("aboutus")} className="commonitems" href="#">
            About Us
          </a>
          <a onClick={() => this.props.onnavclick("pricing")} className="commonitems" href="#">
            Pricing
          </a>
          
        </div>
        <ul className={`nav-dropdown ${dropdownOpen ? 'hide' : ''}`}>
          <li>
            <a onClick={() => this.props.onnavclick("home")} className="commonitems active" href="#">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => this.props.onnavclick("services")} className="commonitems" href="#">
              Services
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
          Contact Us
        </a>
        {isLoggedIn ? 
        (<button className="signup" onClick={()=>signOutUser()}>Signout</button>)
        :
        (<Link to='/register' className="signup">Signup</Link>)
        }
    </nav>
  )
}

export default Navbar;
