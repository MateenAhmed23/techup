import React, { useState } from "react";
import CompNav from "./subcomponents/companyNav";
import "./cssmaincomponents/screeningquestions.css";
import QuestionDisplaycCell from "./subcomponents/questiondisplaycell";
import JobDescSmall from "./subcomponents/jobDescSmall";
import Footer from "./subcomponents/footer";

function ScreeningQuestions(){
  const [questioncreation,setQuestionCreation] = useState([
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
            type: "type",
            placeholder: "e.g. Software E",
            height: "7vh",
            options: [
              "LONG",
              "SHORT",
            ],
          },
          {
            id: 2,
            label: "Mandatory",
            type: "type",
            placeholder: "e.g. Software E",
            height: "7vh",
            options: [
              "YES",
              "NO",
            ],
          },
        ]);
  const [addedquestions, setAddedQuestions] = useState([
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
        ])
  return(
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
              {questioncreation.map((jobDesc) => (
                <tr key={jobDesc.id}>
                  <td className="job-desc-cell">
                    <JobDescSmall
                      id={jobDesc.id}
                      type={jobDesc.type}
                      placeholder={jobDesc.placeholder}
                      label={jobDesc.label}
                      height={jobDesc.height}
                      options={jobDesc.options}
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
              {addedquestions.map((quest) => (
                <tr key={quest.id}>
                  <td className="job-desc-cell">
                    <QuestionDisplaycCell
                      id={quest.id}
                      question={quest.question}
                      type={quest.type}
                      showDetailsButton={false}
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
  )
}

export default ScreeningQuestions;
