import React, { Component } from 'react';
import "./csssubcomponents/companyNav.css";
import logout from "./csssubcomponents/logout.png";
import dropdown from"./csssubcomponents/dropdown.png";
import notifications from"./csssubcomponents/BELL.png";

class CompNav extends Component {
    state = {  } 
    render() { 
        return (
            <nav>
                <div className="nav-left">
                    <img src={dropdown} className="logo" alt="logo" />
                    <p className="companyname">Company Name</p>
                </div>
                <div className="nav-right">
                    <img src={notifications} className="bellicon" alt="notifications" />
                    <img src={logout} className="avatar" alt="logout" />
                </div>
            </nav>
        );
    }
}
 
export default CompNav;
