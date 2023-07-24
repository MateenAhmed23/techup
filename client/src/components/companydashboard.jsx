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
    }
    else {
      authentication()
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

    console.log("got jobs", data);

    if (res.status == 400) {

    } else {
      setJobs(data.jobs)
    }
  }


  async function getMembers() {
    console.log(userInfo, 'userInfo')
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
      // console.log(data.clients)
      setMembers(data.clients)

    }
  }

  async function removeMember(id) {
    const res = await fetch('http://127.0.0.1:5000/api/remove_client', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientId: id
      })
    });

    if (res.status == 200) {
      alert('Member deleted successfully');
    } else {
      // console.log(data.clients)
      alert('Error while deleting member');

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
          {userInfo.userRole === 'superuser' &&
            <button className="createNewjob">
              Create new Job
            </button>
          }
        </Link> : <Link to="/addmember">
          {userInfo.userRole === 'superuser' &&
            <button className="createNewjob">
              Add Member
            </button>
          }
        </Link>}
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
                      job={job}
                      // id={job._id}
                      // title={job.title}
                      // type={job.type}
                      // status={job.status}
                      showRemove={userInfo.userRole === 'superuser' ? true : false}
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
                      showRemove={userInfo.userRole === 'superuser' ? true : false}
                      
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
