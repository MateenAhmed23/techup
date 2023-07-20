import React, { Component, useEffect } from "react";
import "./cssmaincomponents/candidateprofile.css";
import CompNav from "./subcomponents/companyNav";
import Muqadim from "./subcomponents/csssubcomponents/AbdulMuqadim.jpg";
import JobDescSmall from "./subcomponents/jobDescSmall";
import arrow from "./subcomponents/csssubcomponents/arrow.png";
import Footer from "./subcomponents/footer";
import { useLocation, useNavigate } from "react-router-dom";

function CandidateProfile() {
  const navigate = useNavigate();
  const loc = useLocation();
  const application = loc.state.app;
  const jobTitle = loc.state.jobTitle;

  function decideStatusClass(statusList) {
    if (statusList.includes(application.status)) {
      return "processtask current"
    } else {
      return "processtask"
    }
  }

  function viewScreening() {
    navigate('/viewScreening',
      {
        state: {
          answers: application.answers,
          job: application.job,
        }
      })
  }

  function showAcceptReject() {
    return ["applied", "attempted-assessment", "interviewed"].includes(application.status)
  }

  function statusToFunction() {
    let status = application.status;
    switch (status) {
      case 'applied':
        return viewScreening;
      default:
        return '';
    }
  }

  function statusToActionText() {
    let status = application.status;
    switch (status) {
      case 'applied':
        return 'View screening response';
      case 'pending-assessment':
        return 'Pending assessment'
      case "attempted-assessment":
        return 'Assessment done'
      case "slot-pending":
        return "Pending interview slot selection"
      default:
        return '';
    }
  }

  async function acceptCandidate() {
    const res = await fetch('http://127.0.0.1:5000/api/accept', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appId: application._id,
      })
    });

    if (res.status === 200) {
      alert("Candidate moved forward!");
      navigate('/dashboard');
    } else {
      alert("There was an error, please try again");
    }
  }

  async function rejectCandidate() {
    const res = await fetch('http://127.0.0.1:5000/api/reject', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appId: application._id,
      })
    });

    if (res.status === 200) {
      alert("Candidate removed!");
      navigate('/dashboard');
    } else {
      alert("There was an error, please try again");
    }
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
          <p className={decideStatusClass(["applied"])}>Sreening</p>
          <img src={arrow} width={35} height={25} className="logoarr" />
          <p className={decideStatusClass(["pending-assessment", "attempted-assessment",])}>Assessment</p>
          <img src={arrow} width={35} height={25} className="logoarr" />
          <p className={decideStatusClass(["slot-pending", "interview-pending", "interviewed"])}>Interview</p>
          < img src={arrow} width={35} height={25} className="logoarr" />
          <p className={decideStatusClass(["accepted"])}>Accepted</p>
        </div>
        <div className="opencvbutdiv">
          <a className="opnecvbut" href={`http://localhost:5000/api/cv/${application.candidate._id}`} target="_blank">Open CV</a>
          <button className="actionbut" onClick={statusToFunction()}>{statusToActionText()}</button>
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
        {
          showAcceptReject() ?
            <div className="opencvbutdiv">
              <button className="actionbut" onClick={rejectCandidate}>Reject</button>
              <button className="actionbut" onClick={acceptCandidate}>Accept</button>
            </div> :
            ''
        }


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
          <h2 className="scoreresults">{application.marks}/{application.outOf}</h2>
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
