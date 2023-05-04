import React, { Component } from "react";
import "./cssmaincomponents/companydashboard.css";
import CompNav from "./subcomponents/companyNav";
import Sidebar from "./subcomponents/sidebardashboard";
import SearchBar from "./subcomponents/searchbar";
import JobDisplaycell from "./subcomponents/jobdisplaycell";
import Memberdisplaycell from "./subcomponents/memberdisplaycell";

class CompanyDashboard extends Component {
  state = {
    jobs: [
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
    ],
    members: [
      { id: 1, name: "Muqadim", rank: "HR", email: "muqadimorg@gmail.com" },
      { id: 2, name: "Ahmad", rank: "Manager", email: "haris@gmail.com" }, // add more members descriptions here
      
    ],
    displayType: "jobs",
  };

  handleSidebarClick = (displayType) => {
    this.setState({ displayType });
  };

  render() {
    const { jobs, members, displayType } = this.state;
    return (
      <div className="dashboardcompany">
        <div>
          <CompNav className="navbar" />
        </div>
        <div className="Sidebar">
          <Sidebar setActiveTab={this.handleSidebarClick} />
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
                  <tr key={job.id}>
                    <td className="job__desc">
                      <JobDisplaycell
                        id={job.id}
                        title={job.title}
                        Dateposted={job.Dateposted}
                        Status={job.Status}
                      />
                    </td>
                  </tr>
                ))}
              {displayType === "members" &&
                members.map((member) => (
                  <tr key={member.id}>
                    <td className="job__desc">
                      <Memberdisplaycell
                        id={member.id}
                        name={member.name}
                        rank={member.rank}
                        email={member.email}
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
    );
  }
}

export default CompanyDashboard;
