import React, { Component } from 'react';
import "./csssubcomponents/companyNav.css";
import logout from "./csssubcomponents/logout.png";
import dropdown from"./csssubcomponents/dropdown.png";
import notifications from"./csssubcomponents/BELL.png";

import { useNavigate  } from 'react-router-dom';


function CompNav(){

  const navigate = useNavigate();


    function signoutUser(){
        localStorage.removeItem("token");
        navigate('/login')
    } 
    
    return(
        <nav>
                <div className="nav-left">
                    <img src={dropdown} className="logo" alt="logo" />
                    <p className="companyname">Company Name</p>
                </div>
                <div className="nav-right">
                    <img src={notifications} className="bellicon" alt="notifications" />
                    <img src={logout} className="avatar" alt="logout" onClick={()=>signoutUser()}/>
                </div>
            </nav>
    )
}
// class CompNav extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <nav>
//                 <div className="nav-left">
//                     <img src={dropdown} className="logo" alt="logo" />
//                     <p className="companyname">Company Name</p>
//                 </div>
//                 <div className="nav-right">
//                     <img src={notifications} className="bellicon" alt="notifications" />
//                     <img src={logout} className="avatar" alt="logout" onClick={()=>signoutUser()}/>
//                 </div>
//             </nav>
//         );
//     }
// }
 
export default CompNav;
