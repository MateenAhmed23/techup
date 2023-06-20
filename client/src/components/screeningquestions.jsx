import React, { Component } from "react";
import CompNav from "./subcomponents/companyNav";
import "./cssmaincomponents/screeningquestions.css";
import QuestionDisplaycCell from "./subcomponents/questiondisplaycell";
import JobDescSmall from "./subcomponents/jobDescSmall";
import Footer from "./subcomponents/footer";
class ScreeningQuestions extends Component {
  state = {
    questioncreation: [
      {
        id: 1,
        label: "Name",
        type: "text",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
      {
        id: 2,
        label: "Response TYPE",
        type: "text",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
      {
        id: 2,
        label: "Mandatory",
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
        id: 1,
        question: "Where fo you see yourself in 5 years?",
        type: "Descriptive",
      },
      {
        id: 1,
        question: "Where fo you see yourself in 5 years?",
        type: "Descriptive",
      },
    ],
  };
  render() {
    return (
      <div className="screening">
        <div>
          <CompNav className="navbar" />
        </div>
        <div className="headingscr">
          <h1>Screening Questions Section</h1>
        </div>
        <div className="questinsfields">
          <table>
            <tbody>
              {this.state.questioncreation.map((jobDesc) => (
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
        <div className="savequestion">
          <button className="saveques">Save Question</button>
        </div>
        <div className="addedquestions">
          {" "}
          <table>
            <tbody>
              {this.state.addedquestions.map((quest) => (
                <tr key={quest.id}>
                  <td className="job-desc-cell">
                    <QuestionDisplaycCell
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
        <div className="contolsques">
          <button className="backquest">Back</button>
          <button className="nextquest">Next</button>
        </div>
        <div className="footerscreeningpg">
          {/* <h1 className="heading">Foote</h1> */}
          <Footer/>
        </div>
      </div>
    );
  }
}

export default ScreeningQuestions;
