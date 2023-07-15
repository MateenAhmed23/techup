
import React, { Component } from 'react';
import CompNav from "./subcomponents/companyNav";
import "./cssmaincomponents/answerscreeningcandidate.css";
// import QuestionDisplaycCell from "./subcomponents/questiondisplaycell";
import JobDescSmall from "./subcomponents/jobDescSmall";
import Footer from "./subcomponents/footer";




class AnswerScreeningCandidate extends Component {
    state = {questioncreation:[{
        id: 0,
        quest_statement: "Whta is you specialization",
        type: "text",
        mandatory:"yes",
        placeholder: "e.g. Latest Degree",
        response_size:"long"
      },
      {
        id: 1,
        quest_statement: "Question",
        type: "text",
        mandatory:"no",
        placeholder: "e.g. Latest Degree",
        response_size:"short"
      }, {
        id: 2,
        quest_statement: "What is you father name?",
        type: "text",
        mandatory:"no",
        placeholder: "e.g. Latest Degree",
        response_size:"short"
      }, {
        id: 3,
        quest_statement: "Kadi wich pawai he?",
        type: "text",
        mandatory:"yes",
        placeholder: "e.g. Latest Degree",
        response_size:"short"
      },
      {
        id: 4,
        quest_statement: "Kadi wich pawai he?",
        type: "text",
        mandatory:"yes",
        placeholder: "e.g. Latest Degree",
        response_size:"long"
      },
    ]  
    } 
    render() { 
        const sortedQuestions = this.state.questioncreation.sort((a, b) => {
            if (a.response_size === 'short' && b.response_size === 'long') {
                return -1;
            } else if (a.response_size === 'long' && b.response_size === 'short') {
                return 1;
            }
            return 0;
        });
    
        return(
            <div className="AnswerScreeningCandidate">
              <div>
                <CompNav className="navbar" />
              </div>
              <div className="headingscrcandid">
                <h1>Screening Questions Section</h1>
              </div>
              <div className="Scrquestinscandid">
                <table>
                  <tbody>
                    {sortedQuestions.map((jobDesc) => (
                      <tr key={jobDesc.id}>
                        <td className="job-desc-cell">
                          <JobDescSmall
                            id={jobDesc.id}
                            type={jobDesc.type}
                            placeholder={jobDesc.placeholder}
                            label={`${jobDesc.quest_statement}${jobDesc.mandatory === "yes" ? "*" : ""}`}
                            height={jobDesc.response_size === "short" ? "7vh" : "14vh"}
                            options={jobDesc.options}
                            width="60vw"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="contolsques">
                <button className="backquest" >Submit</button>
              </div>
              <div>
              </div>
              <div className="footerscreeningpg">
                <Footer/>
              </div>
            </div>
        );
    }
    
    
}

export default AnswerScreeningCandidate;