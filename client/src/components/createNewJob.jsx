import React, { useState } from "react";
import "./cssmaincomponents/createnewjob.css"
import JobInputField from "./subcomponents/jobInputFiel";

function CreateNewJob() {
    const [jobTitle, setJobTitle] = useState("");
    const [department, setDepartment] = useState("");
    const [location, setLocation] = useState("");
    const [technology_stack, setTechStack] = useState("");
    const [job_duties, setJobDescription] = useState("");
    const [requirements, setRequirements] = useState("");

    return (
        < div className="jobform" >
            <h1 className="maninhead">Create new Job</h1>
            <div className="compcol1">
                <JobInputField label="Job Title:" setter={setJobTitle}></JobInputField>
                <JobInputField label="Department:" setter={setDepartment}></JobInputField>
                <JobInputField label="Job Type:" setter={setTechStack}></JobInputField>
                <JobInputField label="Location:" setter={setLocation}></JobInputField>
                <JobInputField label="Tech Stack:" setter={setTechStack}></JobInputField>
            </div>
            <div className="requirement">
                <JobInputField label="Job Requirements:" setter={setRequirements}></JobInputField>
            </div>
        </div >
    )
}

export default CreateNewJob;