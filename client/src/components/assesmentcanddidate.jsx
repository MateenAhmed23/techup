import React, { useState, useEffect } from 'react';
import "./cssmaincomponents/assesmentcanddidate.css"
import Footer from './subcomponents/footer';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AssesmentCandidate = () => {
    const navigate = useNavigate();
    const loc = useLocation()
    const appId = loc.state.appId
    const jobId = loc.state.jobId
    const company = loc.state.company
    const [noOfQuestions, setNoOfQuestion] = useState(0);

    useEffect(() => {
        const fetchAssessment = async () => {
            const res = await fetch("http://127.0.0.1:5000/api/assessment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    jobId,
                }),
            });

            const data = await res.json();

            if (res.status === 200) {
                setTimer(data.timeLimit * 60);
                setMcqs(data.questions)
                setNoOfQuestion(data.NoOfMCQsToShow)
                console.log("assessment", data);
            } else {
                console.log("error", data);
            }
        }

        fetchAssessment();
    }, []);

    const [mcqs, setMcqs] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});

    const handleOptionClick = (questionId, optionIndex, option) => {
        setSelectedOptions({
            ...selectedOptions,
            [questionId]: option,
        });
    }

    const [timer, setTimer] = useState(60 * 30); // 30 minutes in seconds

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(timer => {
                if (timer === 1) {
                    alert("Time's up!");
                    handleSubmit();  // If timer is 1 second, call the handleSubmit function.
                }
                return timer - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    const handleSubmit = async () => {
        // Get the current data of assessment
        const res = await fetch("http://127.0.0.1:5000/api/assessment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                jobId,
            }),
        });

        const data = await res.json();

        if (res.status !== 200) {
            console.log("error", data);
            return;
        }

        // Here you would make your POST request to your backend
        const response = await fetch("http://127.0.0.1:5000/api/submitAssessment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                jobId,
                appId,
                noOfQuestions: data.NoOfMCQsToShow,  // Use data.NoOfMCQsToShow here
                selectedOptions,
            }),
        });

        const result = await response.json();
        if (response.status == 200) {
            alert("Submitted successfully");
            navigate('/candidate-dashboard');
        }
    }


    return (
        <div className='full_screenassesmetncandid'>
            <div className="navbar">
                <div className="brand">{company}</div>
                <div className="title">Assessment</div>
                <div className="timer">{formatTime(timer)}</div>
            </div>
            <div className="quiz-screen">
                {mcqs.map((mcq, index) => (
                    <div key={mcq.id} className="question-block">
                        <h3>{`Q${index + 1}. ${mcq.question}`}</h3>
                        <div className="options-container">
                            {mcq.options.map((option, i) => (
                                <div
                                    key={i}
                                    className={`option ${selectedOptions[mcq.id] === option ? "selected_option" : ""}`}
                                    onClick={() => handleOptionClick(mcq.id, i, option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <button onClick={handleSubmit}>Submit</button>

                <div className='footercandass'>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default AssesmentCandidate;
