import React, { useState, useEffect } from 'react';
import "./cssmaincomponents/assesmentcanddidate.css"
import Footer from './subcomponents/footer';

const AssesmentCandidate = () => {
    const [mcqs, setMcqs] = useState([
        { 
            id: 1, 
            question: 'Kadi wich pawai he?', 
            options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'] 
        },
        { 
            id: 2, 
            question: 'chal menu hee das de kisi nu nhi dasta maza aya hai?', 
            options: ['Option 1', 'Option 2', 'Option 3'] 
        },
        { 
            id: 2, 
            question: 'chal menu hee das de kisi nu nhi dasta maza aya hai?', 
            options: ['Option 1', 'Option 2'] 
        },
        { 
            id: 2, 
            question: 'chal menu hee das de kisi nu nhi dasta maza aya hai?', 
            options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'] 
        },
        { 
            id: 2, 
            question: 'chal menu hee das de kisi nu nhi dasta maza aya hai?', 
            options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'] 
        },
        //... add more questions as needed
    ]);

    const handleOptionClick = (questionId, optionIndex) => {
        console.log(`Question ID: ${questionId}, Selected Option Index: ${optionIndex}`);
    }

    const [timer, setTimer] = useState(60 * 30); // 30 minutes in seconds

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(timer => timer - 1);
        }, 1000);

        return () => clearInterval(intervalId); 
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    return (
        <div className='full_screenassesmetncandid'>
            <div className="navbar">
                <div className="brand">Company Name</div>
                <div className="title">Assessment</div>
                <div className="timer">{formatTime(timer)}</div>
            </div>
            <div className="quiz-screen">
                {mcqs.map((mcq, index) => (
                    <div key={mcq.id} className="question-block">
                        <h3>{`Q${index+1}. ${mcq.question}`}</h3>
                        <div className="options-container">
                            {mcq.options.map((option, i) => (
                                <div key={i} className="option" onClick={() => handleOptionClick(mcq.id, i)}>
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <div className='footercandass'>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default AssesmentCandidate;
