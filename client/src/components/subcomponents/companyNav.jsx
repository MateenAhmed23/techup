import React, { useContext, useEffect, useState } from 'react';
import "./csssubcomponents/companyNav.css";
import logout from "./csssubcomponents/logout.png";
import dropdown from"./csssubcomponents/dropdown.png";
import notifications from"./csssubcomponents/BELL.png";

import { useNavigate  } from 'react-router-dom';

import UserContext from "../../context/user";


function CompNav(){

  const navigate = useNavigate();

  const { userInfo, signOutUser } =
    useContext(UserContext);

    const [companyName, setCompanyName] = useState('')
    function signoutUser(){
        signOutUser();
        navigate('/');
    } 

    async function getCompanyName(){
    const res = await fetch("http://127.0.0.1:5000/api/get-user-info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userInfo.companyId,
      }),
    });

    const data = await res.json();

    setCompanyName(data.name)
}

useEffect(()=>{
    getCompanyName();
}, [companyName])

    return(
        <nav>
                <div className="nav-left">
                    <img src={dropdown} className="logo" alt="logo" />
                    <p className="companyname">{companyName}</p>
                </div>
                <div className="nav-right">
                    <img src={logout} className="avatar" alt="logout" onClick={()=>signoutUser()}/> 
                </div>
            </nav>
    )
}
 
export default CompNav;
