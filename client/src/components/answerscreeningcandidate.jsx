
import React, { Component, useState, useEffect } from 'react';
import CompNav from "./subcomponents/companyNav";
import "./cssmaincomponents/answerscreeningcandidate.css";
// import QuestionDisplaycCell from "./subcomponents/questiondisplaycell";
import JobDescSmall from "./subcomponents/jobDescSmall";
import Footer from "./subcomponents/footer";

import { useNavigate, useLocation } from 'react-router-dom';


function AnswerScreeningCandidate() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  const loc = useLocation();
  const navigate = useNavigate();

  const jobId = loc.state.jobId;
  const appId = loc.state.appId;

  function setQuestionsHelper(questions) {
    const sorted = questions.sort((a, b) => {
      if (a.response_size === 'short' && b.response_size === 'long') {
        return -1;
      } else if (a.response_size === 'long' && b.response_size === 'short') {
        return 1;
      }
      return 0;
    });

    const initialAnswers = sorted.reduce((acc, curr) => {
      acc[curr._id] = "";
      return acc;
    }, {});

    console.log(sorted);
    setQuestions(sorted);
    setAnswers(initialAnswers);
  }

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  function handleInputChange(e, id) {
    setAnswers(prev => ({
      ...prev,
      [id]: e.target.value,
    }));
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

  async function handleSubmit() {
    // Check if all required questions are answered
    for (let question of questions) {
      if (question.required === "YES" && (!answers[question._id] || answers[question._id].trim() === "")) {
        alert("Please answer all required questions");
        return;
      }
    }

    const res = await fetch('http://127.0.0.1:5000/api/save_screening', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appId: appId,
        answers: answers
      })
    });

    if (res.status === 200) {
      alert("Answers submitted successfully!");
      navigate('/candidate-dashboard');
    } else {
      alert("There was an error, please try again");
    }
  }


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
            {questions.length === 0 ?
              <tr><td>No Questions Available</td></tr> :
              questions.map((question) => (
                <tr key={question._id}>
                  <td className="job-desc-cell">
                    <JobDescSmall
                      type={"text"}
                      id={question._id}
                      label={`${question.question}${question.required === "YES" ? "*" : ""}`}
                      height={question.type === "SHORT" ? "7vh" : "14vh"}
                      change={handleInputChange}
                      width="60vw"
                      value={answers[question._id]}
                      placeholder="Enter your answer here"
                      screening={true}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="contolsques">
        {questions.length === 0 ? "" : <button onClick={handleSubmit} className="backquest" >Submit</button>}
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