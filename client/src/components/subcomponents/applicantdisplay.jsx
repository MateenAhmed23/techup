import React, { Component } from 'react';
import "./csssubcomponents/jobdisplaycell.css"
import { useNavigate } from 'react-router-dom';

function Applicantdisplaycell({ candidateId, name, rate, email, status, jobId, app, jobTitle }) {
  const navigate = useNavigate();

  return (<div className='cell'>
    <ul>
      <li>
        <a className="commonitems">
          {name}
        </a>
      </li>
      <li>
        <a className="commonitems">
          {email}
        </a>
      </li>
    </ul>


    <a href="#">&nbsp;&nbsp;</a>

    <a className="viewdetails" onClick={() => { navigate('/CandidateProfile', { state: { app, jobTitle } }) }}>
      View Profile
    </a>
  </div >);
}

export default Applicantdisplaycell;