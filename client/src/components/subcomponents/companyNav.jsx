import React, { Component } from 'react';
import "./csssubcomponents/companyNav.css"
import logout from "./csssubcomponents/logout.png";
import dropdown from"./csssubcomponents/dropdown.png";
import notifications from"./csssubcomponents/BELL.png";

class CompNav extends Component {
    state = {  } 
    render() { 
        return (
            <nav>
            <img src={dropdown} width={80} height={60} className="logo" />
                <p  className="companyname" >
                  Compay Name
                </p>
            <img src={notifications} width={60} height={40} className="bellicon" />
            <img src={logout} width={70} height={55} className="avatar" />
            
          </nav>
        );
    }
}
 
export default CompNav;