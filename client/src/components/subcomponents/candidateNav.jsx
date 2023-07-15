import React, { useContext, useEffect, useState } from 'react';
import "./csssubcomponents/companyNav.css";
import logout from "./csssubcomponents/logout.png";
import dropdown from "./csssubcomponents/dropdown.png";
import notifications from "./csssubcomponents/BELL.png";

import { useNavigate } from 'react-router-dom';

import CandidateContext from "../../context/candidate";


function CandidateNav() {

    const navigate = useNavigate();

    const { candidateInfo, signOutCandidate } =
        useContext(CandidateContext);

    function signoutUser() {
        signOutCandidate();
        navigate('/');
    }

    return (
        <nav>
            <div className="nav-left">
                <img src={dropdown} className="logo" alt="logo" />
                <p className="companyname">{candidateInfo.candidateName}</p>
            </div>
            <div className="nav-right">
                <img src={logout} className="avatar" alt="logout" onClick={() => signoutUser()} />
            </div>
        </nav>
    )
}

export default CandidateNav;
