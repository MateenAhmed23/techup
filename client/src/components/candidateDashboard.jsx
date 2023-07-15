import React, { useState, useEffect, useContext } from "react";
import CandidateContext from "../context/candidate"; // replace with the actual path to your CandidateContext
import { useNavigate } from 'react-router-dom';
import CandidateJobDisplaycell from "./subcomponents/candidatejobdisplaycell";

function CandidateDashboard() {
    const navigate = useNavigate();
    const { isLoggedIn, candidateInfo, signOutCandidate, loginStatus } = useContext(CandidateContext);

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
            getMyJobs()
        }
        else {
            authentication()
        }
    }, [isLoggedIn, candidateInfo.candidateId])

    async function getMyJobs() {
        const res = await fetch("http://127.0.0.1:5000/api/get_all_applications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                candidate: candidateInfo.candidateId,
            }),
        });

        const data = await res.json();

        // console.log(data);

        if (res.status == 200) {
            console.log(data);
            setJobs(data);
        } else {
        }
    }

    const [jobs, setJobs] = useState([]);

    const signoutCandidate = () => {
        signOutCandidate();
        navigate('/');
    }

    const mapStatusToAction = (status) => {
        switch (status) {
            case 'invited':
                return 'Apply';
            case 'applied':
                return 'Waiting for response';
            case 'assessment':
                return 'Attempt assessment';
            case 'interview':
                return 'Book interview slot';
            default:
                return '';
        }
    };

    return (
        <div className="dashboardcompany">
            <button onClick={signoutCandidate}>Sign Out</button>

            <div className="myjobs">
                {" "}
                <table>
                    <tbody>
                        {jobs.map((job) => (
                            <tr key={job._id}>
                                <td className="job__desc">
                                    <CandidateJobDisplaycell
                                        id={job._id}
                                        company={job.company}
                                        post={job.post}
                                        status={job.status}
                                        action={mapStatusToAction(job.status)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default CandidateDashboard;
