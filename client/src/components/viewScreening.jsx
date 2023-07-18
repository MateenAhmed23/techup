
import React, { useState, useEffect } from 'react';
import CompNav from "./subcomponents/companyNav";
import "./cssmaincomponents/answerscreeningcandidate.css";
// import QuestionDisplaycCell from "./subcomponents/questiondisplaycell";
import JobDescSmall from "./subcomponents/jobDescSmall";
import Footer from "./subcomponents/footer";

import { useNavigate, useLocation } from 'react-router-dom';


function ViewScreening() {
    const [questions, setQuestions] = useState([]);

    const loc = useLocation();
    const navigate = useNavigate();

    const jobId = loc.state.job;
    const answers = loc.state.answers;

    const answerMap = new Map(answers.map(answer => [answer.questionId, answer.answer]));
    console.log("anwers", answerMap);

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
        console.log("questions", sorted);
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
                <h1>View Screening Response</h1>
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
                                            width="60vw"
                                            // value={answerMap[question._id]}
                                            value={answerMap.get(question._id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <div>
            </div>
            <div className="footerscreeningpg">
                <Footer />
            </div>
        </div>
    );
}

export default ViewScreening;