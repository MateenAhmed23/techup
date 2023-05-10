import React, { useEffect, useContext } from "react";
import logo from "./csssubcomponents/logowhite .png";
import "./csssubcomponents/navbar.css";


import { Link } from "react-router-dom";

import UserContext from "../../context/user";



function Navbar(){

  const {isLoggedIn, signOutUser} = useContext(UserContext)

  useEffect(()=>{
    // console.log(" i was changed in Navbar")
  }, [isLoggedIn])


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
          {isLoggedIn ? 
          (<button  className="signup" onClick={()=>signOutUser()}>Signout</button>)
          :
          (<Link to='/register'  className="signup">Signup</Link>)
          
          }
          
        </nav>
  )
}

// class Navbar extends Component {
//   state = {
    
//   };
//   render() {
//     return (
        
//     );
//   }
// }

export default Navbar;
