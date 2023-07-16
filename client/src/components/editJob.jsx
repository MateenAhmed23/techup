import React, { useState, useContext, useEffect } from "react";
import CompNav from "./subcomponents/companyNav";
import "./cssmaincomponents/createnewjob.css";
import JobDescSmall from "./subcomponents/jobDescSmall";
import Footer from "./subcomponents/footer";

import UserContext from '../context/user';

import { useNavigate, useLocation } from 'react-router-dom';

function EditJob() {
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

    const [title, setTitle] = useState(job.title)
    const [department, setDepartment] = useState(job.department)
    const [location, setLocation] = useState(job.location)
    const [jobType, setType] = useState(job.type)
    const [stack, setStack] = useState(job.stack)
    const [experience, setExperience] = useState(job.yearsOfExperience)
    const [desc, setDesc] = useState(job.description)
    const [perks, setPerks] = useState(job.perks)

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



    async function submitHandler() {
        const response = await fetch("http://127.0.0.1:5000/api/edit_job", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                department,
                type: jobType,
                stack,
                description: desc,
                yearsOfExperience: experience,
                jobId: job._id,
                location: location,
                perks: perks
            }),
        });

        const data = await response.json();

        if (response.status == 200) {
            navigate('/dashboard')
            alert('Job Edited Successfully');
        } else {
            console.log(response.message);
        }
    }

    function handleChange(changeFor, value) {
        console.log('I AM FREAKING HEREEEE')
        switch (changeFor) {
            case 'Job Title':
                setTitle(value)
                break;
            case 'Job Location':
                setLocation(value)
                break;
            case 'Type':
                setType(value)
                console.log(value)
                break;
            case 'Stack':
                setStack(value)
                break;
            case 'Experience':
                setExperience(value)
                break;
            case 'General Job Description':
                setDesc(value)
                break;
            case 'Perks':
                setPerks(value)
                break;
            case 'Department':
                setDepartment(value)
                break;
            default:
                break;
        }
    }

    return (
        <div className="newjobpage">
            <CompNav className="navbar" />
            <div className="mainhead">
                <h1 className="h1h">Create New Job </h1>
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
                                        change={handleChange}
                                        value={
                                            jobDesc.label === 'Job Title' ? title :
                                                jobDesc.label === 'Department' ? department :
                                                    jobDesc.label === 'Job Location' ? location :
                                                        jobDesc.label === 'Type' ? jobType :
                                                            jobDesc.label === 'Stack' ? stack :
                                                                jobDesc.label === 'Experience' ? experience :
                                                                    jobDesc.label === 'General Job Description' ? desc :
                                                                        jobDesc.label === 'Perks' ? perks :
                                                                            ''
                                        }
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
                                        change={handleChange}
                                        value={
                                            jobDesc.label === 'Job Title' ? title :
                                                jobDesc.label === 'Department' ? department :
                                                    jobDesc.label === 'Job Location' ? location :
                                                        jobDesc.label === 'Type' ? jobType :
                                                            jobDesc.label === 'Stack' ? stack :
                                                                jobDesc.label === 'Experience' ? experience :
                                                                    jobDesc.label === 'General Job Description' ? desc :
                                                                        jobDesc.label === 'Perks' ? perks :
                                                                            ''
                                        }
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="buttonjobnew">
                <button className="createjobnew" onClick={() => submitHandler()}>Edit</button>
            </div>
            <div className="footerjob1">
                <h1 className="heading">Footer</h1>

            </div>
        </div>
    )
}

export default EditJob;
