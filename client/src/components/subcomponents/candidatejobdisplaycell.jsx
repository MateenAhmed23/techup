import React from 'react';
import "./csssubcomponents/jobdisplaycell.css"

import { useNavigate } from "react-router-dom";

function CandidateJobDisplaycell({ appId, jobId, company, job, status, action, actionfunction }) {

    const navigate = useNavigate();

    function detailsClicked() {
        navigate('/viewJob', { state: { job } })
    }

    return (
        <div className='cell'>
            <ul>
                <li>
                    <a className="commonitems active">
                        {company}
                    </a>
                </li>
                <li>
                    <a className="commonitems">
                        {job.title}
                    </a>
                </li>
                {/* <li>
                    <a className="commonitems">
                        {status}
                    </a>
                </li> */}
            </ul>

            <a onClick={() => detailsClicked()} className="editt">
                View Details
            </a>

            <a onClick={() => { actionfunction(jobId, appId, company) }} className="editt">
                {action}
            </a>
        </div>
    )
}


export default CandidateJobDisplaycell;