import React, { useState, useEffect, useContext} from "react";
import "./cssmaincomponents/companydashboard.css";
import CompNav from "./subcomponents/companyNav";
import Sidebar from "./subcomponents/sidebardashboard";
import SearchBar from "./subcomponents/searchbar";
import JobDisplaycell from "./subcomponents/jobdisplaycell";
import Memberdisplaycell from "./subcomponents/memberdisplaycell";

import { useNavigate  } from 'react-router-dom';


import UserContext from "../context/user";


function CompanyDashboard(){

  const navigate = useNavigate();

  const [jobs, setJobs] = useState([
    // {
    //   id: 1,
    //   title: "Software Engineer",
    //   Dateposted: "12-10-2023",
    //   Status: "Active",
    // },
    // {
    //   id: 2,
    //   title: "Developer",
    //   Dateposted: "12-10-2023",
    //   Status: "deactive",
    // },

    // {
    //   id: 3,
    //   title: "HR",
    //   Dateposted: "12-10-2023",
    //   Status: "Active",
    // },

    // {
    //   id: 4,
    //   title: "Pion",
    //   Dateposted: "12-10-2023",
    //   Status: "Active",
    // },

    // {
    //   id: 5,
    //   title: "Clerk",
    //   Dateposted: "12-10-2023",
    //   Status: "Active",
    // },

    // add more job descriptions here
  ])

  const [members, setMembers] = useState([
    // { id: 1, name: "Muqadim", rank: "HR", email: "muqadimorg@gmail.com" },
    // { id: 2, name: "Ahmad", rank: "Manager", email: "haris@gmail.com" }, // add more members descriptions here
    
  ])

  // const [loading, setLoading] = useState(true)

  const [displayType, setDisplayType] = useState('jobs')

  const {isLoading, isLoggedIn, loginStatus, userInfo } = useContext(UserContext)


  function handleSidebarClick(displayType){
    setDisplayType(displayType)
  }

  async function authentication(){
    const res = await loginStatus()
    console.log('Result from login status', res)
    if (!res){
      alert('You must login to access this page')
      navigate('/login')
    }
  }



  useEffect(()=>{
    if (!isLoggedIn){
      authentication()
      // setLoading(false)
    }
    else{
      getMembers()
      getJobs()
    }
  }, [isLoggedIn])


  async function getJobs(){
    const res = await fetch('http://127.0.0.1:5000/api/get_all_jobs', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify({
                companyId: userInfo.companyId
              })
            })

    const data = await res.json()

    setJobs(data.jobs)
  }


  async function getMembers(){
    const res = await fetch('http://127.0.0.1:5000/api/get_all_clients', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify({
                companyId: userInfo.companyId
              })
            })

    const data = await res.json()

    setMembers(data.clients)
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
                        Dateposted={job.type}
                        Status={job.status}
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
        <div className="footer">
          <h1 className="heading">Footer</h1>
        </div>
      </div>
  )
} 


// class CompanyDashboard extends Component {
//   state = {
//     jobs: [
//       {
//         id: 1,
//         title: "Software Engineer",
//         Dateposted: "12-10-2023",
//         Status: "Active",
//       },
//       {
//         id: 2,
//         title: "Developer",
//         Dateposted: "12-10-2023",
//         Status: "deactive",
//       },

//       {
//         id: 3,
//         title: "HR",
//         Dateposted: "12-10-2023",
//         Status: "Active",
//       },

//       {
//         id: 4,
//         title: "Pion",
//         Dateposted: "12-10-2023",
//         Status: "Active",
//       },

//       {
//         id: 5,
//         title: "Clerk",
//         Dateposted: "12-10-2023",
//         Status: "Active",
//       },

//       // add more job descriptions here
//     ],
//     members: [
//       { id: 1, name: "Muqadim", rank: "HR", email: "muqadimorg@gmail.com" },
//       { id: 2, name: "Ahmad", rank: "Manager", email: "haris@gmail.com" }, // add more members descriptions here
      
//     ],
//     displayType: "jobs",
//   };

//   handleSidebarClick = (displayType) => {
//     this.setState({ displayType });
//   };

//   render() {
//     const { jobs, members, displayType } = this.state;
//     return (
//       <div className="dashboardcompany">
//         <div>
//           <CompNav className="navbar" />
//         </div>
//         <div className="Sidebar">
//           <Sidebar setActiveTab={this.handleSidebarClick} />
//         </div>
//         <div className="searchbar">
//           <h1 className="head">
//             {displayType === "jobs" ? "MY JOBS" : "MEMBERS"}
//           </h1>
//           <SearchBar className="bar23" />
//         </div>
//         <div className="jobs">
//           {" "}
//           <table>
//             <tbody>
//               {displayType === "jobs" &&
//                 jobs.map((job) => (
//                   <tr key={job.id}>
//                     <td className="job__desc">
//                       <JobDisplaycell
//                         id={job.id}
//                         title={job.title}
//                         Dateposted={job.Dateposted}
//                         Status={job.Status}
//                       />
//                     </td>
//                   </tr>
//                 ))}
//               {displayType === "members" &&
//                 members.map((member) => (
//                   <tr key={member.id}>
//                     <td className="job__desc">
//                       <Memberdisplaycell
//                         id={member.id}
//                         name={member.name}
//                         rank={member.rank}
//                         email={member.email}
//                       />
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="footer">
//           <h1 className="heading">Footer</h1>
//         </div>
//       </div>
//     );
//   }
// }

export default CompanyDashboard;
