
import React, { Component, useState, useEffect } from 'react';
import CompNav from "./subcomponents/companyNav";
import "./cssmaincomponents/answerscreeningcandidate.css";
// import QuestionDisplaycCell from "./subcomponents/questiondisplaycell";
import JobDescSmall from "./subcomponents/jobDescSmall";
import Footer from "./subcomponents/footer";

import { useNavigate, useLocation } from 'react-router-dom';


function AnswerScreeningCandidate() {
  const [questions, setQuestions] = useState([{
    id: 0,
    quest_statement: "Whta is you specialization",
    type: "text",
    mandatory: "yes",
    placeholder: "e.g. Latest Degree",
    response_size: "long"
  },
  {
    id: 1,
    quest_statement: "Question",
    type: "text",
    mandatory: "no",
    placeholder: "e.g. Latest Degree",
    response_size: "short"
  }, {
    id: 2,
    quest_statement: "What is you father name?",
    type: "text",
    mandatory: "no",
    placeholder: "e.g. Latest Degree",
    response_size: "short"
  }, {
    id: 3,
    quest_statement: "Kadi wich pawai he?",
    type: "text",
    mandatory: "yes",
    placeholder: "e.g. Latest Degree",
    response_size: "short"
  },
  {
    id: 4,
    quest_statement: "Kadi wich pawai he?",
    type: "text",
    mandatory: "yes",
    placeholder: "e.g. Latest Degree",
    response_size: "long"
  },
  ]);

  const loc = useLocation();
  const navigate = useNavigate();

  const jobId = loc.state.jobId;

  function setQuestionsHelper(questions) {
    const sorted = questions.sort((a, b) => {
      if (a.response_size === 'short' && b.response_size === 'long') {
        return -1;
      } else if (a.response_size === 'long' && b.response_size === 'short') {
        return 1;
      }
      return 0;
    });

    setQuestions(sorted);
  }

  async function getQuestions() {
    const res = await fetch('http://127.0.0.1:5000/api/get_screening', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobId: jobId
      })
    })

    const data = await res.json()

    if (res.status == 200) {
      setQuestionsHelper(data);
    } else {
    }
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
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
            {questions.map((jobDesc) => (
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
        <Footer />
      </div>
    </div>
  );
}

export default AnswerScreeningCandidate;