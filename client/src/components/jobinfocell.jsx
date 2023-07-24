import React, { useState, useContext, useEffect } from "react";
import Sidebar from "./subcomponents/sidebardashboard";
import "./cssmaincomponents/jobinfo.css";
import SearchBar from "./subcomponents/searchbar";
import CompNav from "./subcomponents/companyNav";
import Applicantdisplaycell from "./subcomponents/applicantdisplay";
import Footer from "./subcomponents/footer";


import { useParams } from 'react-router-dom';

import { useNavigate } from "react-router-dom";


function JobInfo() {

  const option1 = 'Dashboard'
  const option2 = 'Edit this Job'

  const navigate = useNavigate();


  // const [jobId, setJobId] = useState(1)


  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [experience, setExperience] = useState('')
  const [domain, setDomain] = useState('')
  const [status, setStatus] = useState('')
  const [applications, setApplications] = useState([])

  const { id } = useParams();
  const [statusCounts, setStatusCounts] = useState({})

  function handleSidebarClick() {

  }

  async function getApplications() {
    const res = await fetch("http://127.0.0.1:5000/api/get_job_applicants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        job: id,
      }),
    });

    const data = await res.json();

    if (res.status == 200) {
      console.log("applications", data);

      const statusOrder = [
        "invited",
        "applied",
        "pending-assessment",
        "attempted-assessment",
        "slot-pending",
        "interview-pending",
        "interviewed",
        "accepted",
        "rejected",
      ];

      data.applications = data.applications.filter(application => {
        return application.status !== "invited" && application.status !== "rejected";
      });

      // Then sort the filtered applications
      data.applications.sort((a, b) => {
        return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
      });

      setApplications(data.applications);
      setStatusCounts(data.statusCounts);
    } else {
      console.log("error", data);
    }
  }

  async function getJobInfo() {
    // get_job/:id
    console.log(id)
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/get_job/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.status)
      const data = await response.json()
      console.log(data)

      setTitle(data.title)
      setExperience(data.yearsOfExperience)
      setDomain(data.stack)
      setStatus(data.status)
      setDesc(data.description)

      if (data.status === 500) {

        alert('There was an error')
      }
    } catch (e) {

    }
  }

  function copyToClipboard() {
    navigator.clipboard.writeText('localhost:3000/joburl/' + id)
      .then(() => {
        // Success!
        alert('Text copied to clipboard');
      })
  };

  function openScreening() {
    console.log('OPENING SCREENING')

    var str = '/screeningquestions/' + id
    navigate(str)
  }

  function openInterview() {
    navigate('/interviewScheduling', { state: { jobId: id } })
  }

  function openAssessment() {
    var str = '/assessmentquestions/' + id
    navigate(str)
  }

  useEffect(() => {
    getJobInfo()
    getApplications();
  }, [])

  useEffect(() => {
    console.log(applications);
  }, [applications])

  return (
    <div className="jobinfo">
      <div>
        <CompNav className="navbar" />
      </div>
      <div className="Sidebar">
        <Sidebar
          className="sidebarjob"
          option1={option1}
          option2={option2}
          setActiveTab={handleSidebarClick}
        />
      </div>
      <div className="searchbarjob">
        <h1 className="head">{title}</h1>
        <SearchBar className="bar23" />
        <button onClick={copyToClipboard} className="url">Get Job Url</button>
      </div>
      <div className="jobdesc">
        {/* <h1 className="jobtitle">{title}</h1> */}
        <p className="jobinfodis  ">
          {desc}
        </p>
        <div className="otherinfo">
          <div>
            <h4>Experience</h4>
            <p>{experience} years</p>
          </div>
          <div>
            <h4>Domain</h4>
            <p>{domain}</p>
          </div>
          <div>
            <h4>Status</h4>
            <p>{status}</p>
          </div>
        </div>
      </div>
      <div className="jobnoti" >
        <div className="notibar" onClick={() => openScreening()}>
          <div className="notinum">{statusCounts.applied ? statusCounts.applied : 0}</div>
          <h5 className="tex">Screening</h5>
        </div>
        <div className="notibar" onClick={() => openAssessment()}>
          <div className="notinum">{statusCounts.assessment ? statusCounts.assessment : 0}</div>
          <h5 className="tex">Assesment</h5>
        </div>
        <div className="notibar" onClick={() => openInterview()}>
          <div className="notinum">{statusCounts.interview ? statusCounts.interview : 0}</div>
          <h5 className="tex">Interviews</h5>
        </div>
        <div className="notibar">
          <div className="notinum">{statusCounts.accepted ? statusCounts.accepted : 0}</div>
          <h5 className="tex">Accepted</h5>
        </div>
      </div>
      <div className="applicants">
        <table>
          <tbody>
            {applications.map((application) => (
              <tr key={application.candidate._id}>
                <td className="job__desc">
                  <Applicantdisplaycell
                    app={application}
                    candidateId={application.candidate._id}
                    name={application.candidate.name}
                    rate={application.rate}
                    email={application.candidate.email}
                    status={application.status}
                    jobId={application.job}
                    jobTitle={title}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="footerjobinfoPG">
        {/* <h1 className="heading">Footer</h1> */}
        <Footer />
      </div>
    </div>
  )
}


export default JobInfo;
