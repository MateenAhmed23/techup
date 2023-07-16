import React, { useState, useContext, useEffect } from "react";
import CompNav from "./subcomponents/companyNav";
import "./cssmaincomponents/createnewjob.css";
import JobDescSmall from "./subcomponents/jobDescSmall";
import Footer from "./subcomponents/footer";

import UserContext from '../context/user';

import { useNavigate, useLocation } from 'react-router-dom';

function ViewJob() {
    const { isLoading, loginStatus, isLoggedIn, userInfo } = useContext(UserContext);

    const loc = useLocation();
    const navigate = useNavigate();

    const job = loc.state.job;
    console.log("edit", job);

    const jobDescriptions = [
        {
            id: 1,
            label: "Job Title",
            type: "text",
            placeholder: "e.g. Software Engineer",
            height: "7vh",
            value: job.title,
        },
        {
            id: 2,
            label: "Department",
            type: "description",
            placeholder: "e.g. Human Resources",
            height: "7vh",
            value: job.department,
        },
        {
            id: 3,
            label: "Job Location",
            type: "text",
            placeholder: "e.g. New York",
            height: "7vh",
            value: job.location,
        },
        {
            id: 4,
            label: "Type",
            type: "select",
            placeholder: "e.g. Full Time",
            height: "7vh",
            options: ["Full Time", "Part Time", "Contract", "Internship"],
            value: job.type,
        },
        {
            id: 5,
            label: "Stack",
            type: "text",
            placeholder: "e.g. MERN",
            height: "7vh",
            value: job.stack,
        },
        {
            id: 6,
            label: "Experience",
            type: "number",
            placeholder: "e.g. 1 yr",
            height: "7vh",
            value: job.yearsOfExperience,
        },
        {
            id: 7,
            label: "General Job Description",
            type: "text",
            placeholder: "e.g. Your responsibility is to create responsive website",
            height: "23vh",
            value: job.description,
        },
        {
            id: 8,
            label: "Perks",
            type: "text",
            placeholder: "e.g. Work from home",
            height: "23vh",
            value: job.perks,
        },
    ]

    const jobDescriptionssmall = jobDescriptions.slice(0, 6);
    const jobDescriptionslarge = jobDescriptions.slice(6, 11);

    // console.log(jobDescriptionssmall)

    useEffect(() => {
        if (loginStatus()) {

        }
        else {
            console.log('Please login first to access this page.')
            navigate('/')
        }
    }, [])

    return (
        <div className="newjobpage">
            <CompNav className="navbar" />
            <div className="mainhead">
                <h1 className="h1h">View Job </h1>
            </div>
            <div className="details">
                <table>
                    <tbody>
                        {jobDescriptionssmall.map((jobDesc) => (
                            <tr key={jobDesc.id}>
                                <td className="job-desc-cell">
                                    <JobDescSmall
                                        id={jobDesc.id}
                                        type={jobDesc.type}
                                        placeholder={jobDesc.placeholder}
                                        label={jobDesc.label}
                                        height={jobDesc.height}
                                        options={jobDesc.options}
                                        value={jobDesc.value}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="descriptions">
                <table>
                    <tbody>
                        {jobDescriptionslarge.map((jobDesc) => (
                            <tr key={jobDesc.id}>
                                <td className="job-desc-cell">
                                    <JobDescSmall
                                        id={jobDesc.id}
                                        type={jobDesc.type}
                                        placeholder={jobDesc.placeholder}
                                        label={jobDesc.label}
                                        height={jobDesc.height}
                                        value={jobDesc.value}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="buttonjobnew">
                <button className="createjobnew" onClick={() => { navigate("/candidate-dashboard") }}>Back</button>
            </div>
            <div className="footerjob1">
                <h1 className="heading">Footer</h1>
            </div>
        </div>
    )
}

export default ViewJob;
