import React, { useContext } from "react";
import CandidateContext from "../context/candidate"; // replace with the actual path to your CandidateContext
import { useNavigate } from 'react-router-dom';

function CandidateDashboard() {
    const navigate = useNavigate();
    const { signOutCandidate } = useContext(CandidateContext);

    const signoutCandidate = () => {
        signOutCandidate();
        navigate('/');
    }

    return (
        <div>
            <h1>CANDIDATE DASHBOARD</h1>
            <button onClick={signoutCandidate}>Sign Out</button>
        </div>
    );
}

export default CandidateDashboard;
