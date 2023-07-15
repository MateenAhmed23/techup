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

  const { id } = useParams();

  const applicants = [
    { id: 1, name: "Muqadim", rate: "40", email: "muqadimorg@gmail.com" },
    { id: 2, name: "Ahmad", rate: "50", email: "haris@gmail.com" },
    { id: 3, name: "Ahmad", rate: "50", email: "haris@gmail.com" },
    { id: 4, name: "Ahmad", rate: "50", email: "haris@gmail.com" }
  ]

  function handleSidebarClick() {

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

  function openScreening(){
    console.log('OPENING SCREENING')

    var str = '/screeningquestions/'+ id
    navigate(str)
  }

  useEffect(() => {
    getJobInfo()
  }, [])

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
        <button className="url">Get Job Url</button>
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
      <div className="jobnoti" onClick={()=>openScreening()}>
        <div className="notibar">
          <div className="notinum">3</div>
          <h5 className="tex">Screening</h5>
        </div>
        <div className="notibar">
          <div className="notinum">3</div>
          <h5 className="tex">Assesment</h5>
        </div>
        <div className="notibar">
          <div className="notinum">!</div>
          <h5 className="tex">Interviews</h5>
        </div>
        <div className="notibar">
          <div className="notinum">10</div>
          <h5 className="tex">Accepted</h5>
        </div>
      </div>
      <div className="applicants">
        <table>
          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant.id}>
                <td className="job__desc">
                  <Applicantdisplaycell
                    id={applicant.id}
                    name={applicant.name}
                    rate={applicant.rate}
                    email={applicant.email}
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
