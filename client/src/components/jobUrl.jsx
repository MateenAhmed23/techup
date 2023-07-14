import React, { useState, useEffect, useContext } from 'react';
import CandidateContext from '../context/candidate';
import { useParams, useNavigate } from 'react-router-dom';

const JobUrl = () => {
    const { isLoggedIn, candidateInfo, loginStatus } = useContext(CandidateContext);
    const { jobId } = useParams();
    const navigate = useNavigate();

    async function authentication() {
        const res = await loginStatus()
        // console.log('Result from login status', res)
        if (!res) {
            alert('You must login to access this page')
            navigate('/candidate-login')
        }
    }

    useEffect(() => {
        if (isLoggedIn && candidateInfo.candidateId) {
            createApplication();
        } else {
            authentication();
        }
    }, [isLoggedIn, candidateInfo.candidateId]);

    const createApplication = async () => {
        try {
            console.log("create application");
            const response = await fetch("http://127.0.0.1:5000/api/create_application", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    candidateId: candidateInfo.candidateId,
                    jobId,
                }),
            });

            const data = await response.json();
            alert(data.message);

            navigate('/candidate-dashboard');
        } catch (error) {
            console.log("Failed to fetch job data:", error);
        }
    };

    return null; // return as per your requirement
};

export default JobUrl;
