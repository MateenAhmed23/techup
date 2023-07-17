import React, { Component, useEffect } from "react";
import "./cssmaincomponents/candidateprofile.css";
import CompNav from "./subcomponents/companyNav";
import Muqadim from "./subcomponents/csssubcomponents/AbdulMuqadim.jpg";
import JobDescSmall from "./subcomponents/jobDescSmall";
import arrow from "./subcomponents/csssubcomponents/arrow.png";
import Footer from "./subcomponents/footer";
import { useLocation } from "react-router-dom";

function CandidateProfile() {
  const loc = useLocation();
  const application = loc.state.app;
  const jobTitle = loc.state.jobTitle;
  function statusToFunction(status) {

  }

  function statusToAction(status) {

  }
  return (
    <div className="candidateprofilepage">
      {" "}
      <div>
        <CompNav className="navbar" />
      </div>
      <div className="leftside">
        {/* <div className="avatarprofile">
            <img src={Muqadim}  className="logoCandidate" />
          </div> */}
        {/* <div className="managerinfo">
            <h2 className="postname">Manger</h2>
            <p className="postholder">Dr Sara Flord</p>
          </div> */}
        <div className="notesprofile">
          <div className="Notesheadings">
            <p className="notesdispalyhead">Notes</p>{" "}
            <p className="addnotesbut">+ Add Note</p>
          </div>
          <div className="inutfieldjobsdescsmall">
            <JobDescSmall
              id="1"
              type="description"
              placeholder="Enter any notes"
              label="notes"
              height="18vh"
              width="26vw"
            />
          </div>
        </div>
        <h1 className="hsitoryheading">History</h1>
        <div className="hsitorydetails">
          <div className="hsitrydet1">
            <h4 className="applidvia hh4r">Applied via Linkedin</h4>
            <p className="date1 dates">Feb 01,2022</p>
          </div>
          <div className="hsitrydet2">
            <h4 className="reviedby hh4r">
              Portfolio scheduled to be reviewed by Ali Wilson
            </h4>
            <p className="date2 dates">Feb 20,2022</p>
          </div>
          <div className="hsitrydet3">
            <h4 className="testsched hh4r">
              Test scheduled At
            </h4>
            <p className="date3 dates">Feb 28,2022</p>
          </div>
        </div>
      </div>
      <div className="rightside">
        <div className="proessList">
          <p className="pending processtask current">Pending</p>
          <img src={arrow} width={35} height={25} className="logoarr" />
          <p className="reviewed processtask">Reviewed</p>
          <img src={arrow} width={35} height={25} className="logoarr" />
          <p className="test processtask">Test Task</p>
          <img src={arrow} width={35} height={25} className="logoarr" />
          <p className="interview processtask">Interview</p>
          <img src={arrow} width={35} height={25} className="logoarr" />
          <p className="hired processtask">Hired</p>
        </div>
        <div className="opencvbutdiv">
          <a className="opnecvbut" href={`http://localhost:5000/api/cv/${application.candidate._id}`} target="_blank">Open CV</a>
          <button className="viewscorebut">Results</button>
        </div>
        <div className="nameandrole">
          <h1 className="nameprof tognamerol">{application.candidate.name}</h1>
          <img src={arrow} width={45} height={35} className="logoarrlarg" />
          <h1 className="roleprof tognamerol">{jobTitle}</h1>
        </div>
        <div className="descprof">
          <p>
            {application.candidate.bio}
          </p>
        </div>

        {/* <div className="companydispayinfodiv">
          <p className="companywantedinfo">
            Company wanted info to be displayed
          </p>
        </div> */}
        <h1 className="cand_info">Experience: {application.candidate.experience} years</h1>
        <h1 className="cand_info">Location: {application.candidate.city}</h1>
        <h1 className="cand_info">Phone number: {application.candidate.phoneNumber}</h1>

        <h1 className="divhead">Skills</h1>
        <div className="skilssetdiv">
          {application.candidate.skills.map(
            (skill) => (
              <p className=" skillsetp">{skill}</p>
            )
          )}
        </div>
        {/* <h1 className="divhead">Jobs Currently Applied For</h1>
        <div className="skilssetdiv">
          <p className=" skillsetp">Fornt end developer </p>
          <p className=" skillsetp">UI/UX Designer</p>
          <p className=" skillsetp">Junior Backend Developer </p>

        </div> */}

      </div>
      <div className="reusltssection">
        {/* <h1>Results Section</h1> */}
        <div className="screeningquestionsdiv">
          <h1 className="headresultssections">Screenig Questioms Rating</h1>
          <h2 className="scoreresults">7/10</h2>
          <button className="butvewrsults">View Results</button>
        </div>
        <div className="mcqsquestionsdiv">
          <h1 className="headresultssections">MCQs Test Score</h1>
          <h2 className="scoreresults">35/50</h2>
          <button className="butvewrsults">View Results</button>
        </div>
      </div>
      <div className="footercandidateprofpg">
        {/* <h1 className="heading">Footer</h1> */}
        <Footer />
      </div>
    </div>
  );
}

export default CandidateProfile;
