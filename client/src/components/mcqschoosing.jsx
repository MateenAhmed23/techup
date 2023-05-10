import React, { Component } from "react";
import CompNav from "./subcomponents/companyNav";
import "./cssmaincomponents/mcqschoosing.css";
import JobDescSmall from "./subcomponents/jobDescSmall";
import QuestionDisplaycell from "./subcomponents/questiondisplaycell";

class Mcqschoosing extends Component {
  state = {
    testsettings: [
      {
        id: 1,
        label: "Time Limiit",
        type: "text",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
      {
        id: 2,
        label: "Total Number Of Pages",
        type: "text",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
      {
        id: 3,
        label: "MCQS Shuffling",
        type: "text",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
      {
        id: 3,
        label: "Copy Of Reponse To Applicants",
        type: "text",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
    ],
    addedquestions: [
      {
        id: 1,
        question: "Where fo you see yourself in 5 years?",
        type: "Descriptive",
      },
      {
        id: 2,
        question: "Where fo you see yourself in 5 years?",
        type: "Descriptive",
      },
      {
        id: 3,
        question: "Where fo you see yourself in 5 years?",
        type: "Descriptive",
      },
    ],
  };
  render() {
    return (
      <div className="mcqschoosingpage">
        {" "}
        <div>
          <CompNav className="navbar" />
        </div>
        <div className="customquestions">
          <h2 className="customshead">Custom Questions</h2>
          <JobDescSmall
            id="1"
            type="text"
            placeholder="Type Question Here!!"
            label="Question"
            height="30vh"
            width="36vw"
            color="#FF0000"
          />
        </div>
        <div className="templatequestions">kwrkea</div>
        <div className="wholeassesmentdescription">
          <h2 className="testheadset">Template Questions</h2>
          {" "}
          <table>
            <tbody>
              {this.state.testsettings.map((jobDesc) => (
                <tr key={jobDesc.id}>
                  <td className="job-desc-cell">
                    <JobDescSmall
                      id={jobDesc.id}
                      type={jobDesc.type}
                      placeholder={jobDesc.placeholder}
                      label={jobDesc.label}
                      height={jobDesc.height}
                      //   change={handleChange}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="addedquestionsdispalychoo">
          <h2>Added Questions</h2>
          <table>
            <tbody>
              {this.state.addedquestions.map((quest) => (
                <tr key={quest.id}>
                  <td className="job-desc-cell">
                    <QuestionDisplaycell
                      id={quest.id}
                      question={quest.question}
                      type={quest.type}
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

export default Mcqschoosing;
