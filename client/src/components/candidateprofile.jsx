import React, { Component } from "react";
import "./cssmaincomponents/candidateprofile.css";
import CompNav from "./subcomponents/companyNav";
import Muqadim from "./subcomponents/csssubcomponents/AbdulMuqadim.jpg";
import JobDescSmall from "./subcomponents/jobDescSmall";
import arrow from "./subcomponents/csssubcomponents/arrow.png";
import Footer from "./subcomponents/footer";
class CandidateProfile extends Component {
  state = {};
  render() {
    return (
      <div className="candidateprofilepage">
        {" "}
        <div>
          <CompNav className="navbar" />
        </div>
        <div className="leftside">
          <div className="avatarprofile">
            <img src={Muqadim} width={220} height={200} className="logo" />
          </div>
          <div className="managerinfo">
            <h2 className="postname">Manger</h2>
            <p className="postholder">Dr Sara Flord</p>
          </div>
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
            <p className="pending processtask">Pending</p>
            <img src={arrow} width={35} height={25} className="logoarr" />
            <p className="reviewed processtask current">Reviewed</p>
            <img src={arrow} width={35} height={25} className="logoarr" />
            <p className="test processtask">Test Task</p>
            <img src={arrow} width={35} height={25} className="logoarr" />
            <p className="interview processtask">Interview</p>
            <img src={arrow} width={35} height={25} className="logoarr" />
            <p className="hired processtask">Hired</p>
          </div>
          <div className="nameandrole">
            <h1 className="nameprof tognamerol">Abdul-Muqadim</h1>
            <img src={arrow} width={45} height={35} className="logoarrlarg" />
            <h1 className="roleprof tognamerol">Front-End Developer</h1>
          </div>
          <div className="descprof">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium quaerat dignissimos, esse, saepe nisi atque aliquid
              assumenda neque vero veritatis nam tenetur error cum quisquam modi
              omnis delectus est minima numquam illo accusamus ut rerum
              explicabo! Aliquid, deleniti? Nulla enim sunt accusamus totam?
              Repudiandae provident voluptatibus a at officiis distinctio quasi
              culpa dignissimos corporis ex sequi, ea nisi omnis pariatur rem
              labore necessitatibus officia harum nostrum dicta. Similique,
              veritatis.
            </p>
          </div>
          <div className="opencvbutdiv">
            <button className="opnecvbut">Open CV</button>
          </div>
          <div className="companydispayinfodiv">
            <p className="companywantedinfo">
              Company wanted info to be displayed
            </p>
          </div>
          <h1 className="divhead">Skills</h1>
          <div className="skilssetdiv">
            <p className=" skillsetp">React</p>
            <p className=" skillsetp">CSS</p>
            <p className=" skillsetp"> HTML</p>
            <p className=" skillsetp">Figma</p>
            <p className=" skillsetp">Next Js</p>
            
          </div>
          <h1 className="divhead">Jobs Currently Applied For</h1>
          <div className="skilssetdiv">
            <p className=" skillsetp">Fornt end developer </p>
            <p className=" skillsetp">UI/UX Designer</p>
            <p className=" skillsetp">Junior Backend Developer </p>
            
          </div>
          
        </div>
        <div className="footercandidateprofpg">
          {/* <h1 className="heading">Footer</h1> */}
          <Footer/>
        </div>
      </div>
    );
  }
}

export default CandidateProfile;
