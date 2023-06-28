import React, { Component } from "react";
import "./cssmaincomponents/appliedjobscandidate.css";
import Footer from "./subcomponents/footer";
import CompNav from "./subcomponents/companyNav";
import SearchBar from "./subcomponents/searchbar";

class AppliedJobs extends Component {
  state = {};
  render() {
    return (
      <div className="Appliedjobspage">
        {" "}
        <div>
          <CompNav className="navbar" />
        </div>
        <div className="searchbar1122">
        <h1 className="head">
          My Jobs
        </h1>
        <SearchBar className="bar23" />
          <button className="createNewjob">
            Create new Job
          </button>    
        </div>
        <div className="jobsdisplayapplied">chicham pucham</div>

        <div className="footerappliedjobspg">
          {/* <h1 className="heading">Footer</h1> */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default AppliedJobs;
