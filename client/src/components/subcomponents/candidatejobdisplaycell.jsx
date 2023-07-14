import React from 'react';
import "./csssubcomponents/jobdisplaycell.css"

import { useNavigate } from "react-router-dom";

function CandidateJobDisplaycell({ id, company, post, status, action }) {

    const navigate = useNavigate();

    function detailsClicked() {
        var str = '/jobinfo/' + id
        navigate(str)
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
                        {post}
                    </a>
                </li>
                {/* <li>
                    <a className="commonitems">
                        {status}
                    </a>
                </li> */}
            </ul>
            <a onClick={() => { }} className="editt">
                {action}
            </a>
        </div>
    )
}


export default CandidateJobDisplaycell;