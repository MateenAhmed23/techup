import React, { useState, useEffect, useContext } from "react";
import "./cssmaincomponents/companydashboard.css";
import CompNav from "./subcomponents/companyNav";
import Sidebar from "./subcomponents/sidebardashboard";
import SearchBar from "./subcomponents/searchbar";
import JobDisplaycell from "./subcomponents/jobdisplaycell";
import Memberdisplaycell from "./subcomponents/memberdisplaycell";

import { Link } from 'react-router-dom';

import Footer from "./subcomponents/footer";

import { useNavigate } from "react-router-dom";

import UserContext from "../context/user";

function CompanyDashboard() {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Software Engineer",
      Dateposted: "12-10-2023",
      Status: "Active",
    },
    {
      id: 2,
      title: "Developer",
      Dateposted: "12-10-2023",
      Status: "deactive",
    },

    {
      id: 3,
      title: "HR",
      Dateposted: "12-10-2023",
      Status: "Active",
    },

    {
      id: 4,
      title: "Pion",
      Dateposted: "12-10-2023",
      Status: "Active",
    },

    {
      id: 5,
      title: "Clerk",
      Dateposted: "12-10-2023",
      Status: "Active",
    },

    // add more job descriptions here
  ]);

  const [members, setMembers] = useState([
    { id: 1, name: "Muqadim", rank: "HR", email: "muqadimorg@gmail.com" },
    { id: 2, name: "Ahmad", rank: "Manager", email: "haris@gmail.com" }, // add more members descriptions here
  ]);

  // const [loading, setLoading] = useState(true)

  const [displayType, setDisplayType] = useState("jobs");

  const { isLoading, isLoggedIn, loginStatus, userInfo } =
    useContext(UserContext);

  function handleSidebarClick(displayType) {
    setDisplayType(displayType);
  }

  async function authentication() {
    const res = await loginStatus()
    // console.log('Result from login status', res)
    if (!res) {
      alert('You must login to access this page')
      navigate('/login')
    }
  }

  useEffect(() => {
    if (isLoggedIn && userInfo.companyId) {
      // console.log('Checking logging status', isLoggedIn, 'and', userInfo.companyId)
      getMembers()
      getJobs()
      // setLoading(false)
    }
    else {
      authentication()
      // console.log('Going to get jobs and members')
      // console.log(userInfo.companyId)

    }
  }, [isLoggedIn, userInfo.companyId])

  async function getJobs() {
    const res = await fetch("http://127.0.0.1:5000/api/get_all_jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyId: userInfo.companyId,
      }),
    });

    const data = await res.json();


    if (res.status == 400) {

    } else {
      setJobs(data.jobs)

    }
  }


  async function getMembers() {
    // console.log('Company ID', userInfo.companyId)
    const res = await fetch('http://127.0.0.1:5000/api/get_all_clients', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyId: userInfo.companyId
      })
    })

    const data = await res.json()

    if (res.status == 400) {

    } else {
      setMembers(data.clients)

    }
  }

  return (
    <div className="dashboardcompany">
      <div>
        <CompNav className="navbar" />
      </div>
      <div className="Sidebar">
        <Sidebar setActiveTab={handleSidebarClick} />
      </div>
      <div className="searchbar">
        <h1 className="head">
          {displayType === "jobs" ? "MY JOBS" : "MEMBERS"}
        </h1>
        <SearchBar className="bar23" />
        {displayType === "jobs" ? <Link to="/createnewjob">
          <button className="createNewjob">
            Create new Job
          </button>
        </Link> : <Link to="/addmember">
          <button className="createNewjob">
            Add Member
          </button>
        </Link>}
        <Link to="/createnewjob">
          <button className="createNewjob">
            {displayType === "jobs" ? "Create new Job" : "Create new Member"}
          </button>
        </Link>
      </div>
      <div className="jobs">
        {" "}
        <table>
          <tbody>
            {displayType === "jobs" &&
              jobs.map((job) => (
                <tr key={job._id}>
                  <td className="job__desc">
                    <JobDisplaycell
                      id={job._id}
                      title={job.title}
                      Dateposted={job.Dateposted}
                      Status={job.Status}
                    />
                  </td>
                </tr>
              ))}
            {displayType === "members" &&
              members.map((member) => (
                <tr key={member._id}>
                  <td className="job__desc">
                    <Memberdisplaycell
                      id={member._id}
                      name={member.name}
                      rank={member.role}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="footerDASHBOARDpg">

        <Footer></Footer>
      </div>
    </div>
  );
}



export default CompanyDashboard;
