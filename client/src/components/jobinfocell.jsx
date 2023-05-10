import React, { Component } from "react";
import Sidebar from "./subcomponents/sidebardashboard";
import "./cssmaincomponents/jobinfo.css";
import SearchBar from "./subcomponents/searchbar";
import CompNav from "./subcomponents/companyNav";
import Applicantdisplaycell from "./subcomponents/applicantdisplay";

class JobInfo extends Component {
  state = {
    option1: "Dashboard",
    option2: "Edit this Job",
    applicants: [
      { id: 1, name: "Muqadim", rate: "40", email: "muqadimorg@gmail.com" },
      { id: 2, name: "Ahmad", rate: "50", email: "haris@gmail.com" },
      { id: 2, name: "Ahmad", rate: "50", email: "haris@gmail.com" },
      { id: 2, name: "Ahmad", rate: "50", email: "haris@gmail.com" }, // add more members descriptions here
    ],
  };
  render() {
    return (
      <div className="jobinfo">
        <div>
          <CompNav className="navbar" />
        </div>
        <div className="Sidebar">
          <Sidebar
            className="sidebarjob"
            option1={this.state.option1}
            option2={this.state.option2}
            setActiveTab={this.handleSidebarClick}
          />
        </div>
        <div className="searchbarjob">
          <h1 className="head">Job #{this.props.id}</h1>
          <SearchBar className="bar23" />
          <button className="url">Get Job Url</button>
        </div>
        <div className="jobdesc">
          <h1 className="jobtitle">Job Title</h1>
          <p className="jobinfodis  ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem quae quisquam rem iure dolorem iste libero vel? Culpa
            minus natus provident tempore voluptatibus quia ullam, perferendis
            ipsa mollitia, dolorum tenetur asperiores voluptas ex iste vero
            optio debitis blanditiis odit veniam sit voluptatem fugiat?
            Perspiciatis nulla laboriosam, facere nihil ipsum corrupti.
          </p>
          <div className="otherinfo">
            <div>
              <h4>Experience</h4>
              <p>4 years</p>
            </div>
            <div>
              <h4>Domain</h4>
              <p>4 years</p>
            </div>
            <div>
              <h4>Status</h4>
              <p>4 years</p>
            </div>
          </div>
        </div>
        <div className="jobnoti">
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
              {this.state.applicants.map((applicant) => (
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
        <div className="footerjobinfo">
          <h1 className="heading">Footer</h1>
        </div>
      </div>
    );
  }
}

export default JobInfo;
