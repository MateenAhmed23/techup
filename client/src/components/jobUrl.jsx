// JobInfo.js

import React, { useState, useEffect, useContext } from 'react';
import CandidateContext from '../context/candidate';
import { useParams, useNavigate } from 'react-router-dom';

const JobUrl = () => {
    const [jobData, setJobData] = useState({});
    const { isLoggedIn, candidateId, loginStatus } = useContext(CandidateContext);
    const { jobId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        console.log(candidateId);
        if (!isLoggedIn && candidateId) {
            if (!loginStatus()) {
                alert("Kindly login before applying to a job");
                navigate("/candidate-login");
            }
        } else {
            createApplication();
        }
    }, [isLoggedIn]);

    const createApplication = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/api/create_application", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    candidateId,
                    jobId,
                }),
            });

            const data = await response.json();
            alert(data.message);

            if (response.status == 200) {
                navigate('/candidate-dashboard');
            } else {
                return;
            }
        } catch (error) {
            console.log("Failed to fetch job data:", error);
        }
    };
};

export default JobUrl;
