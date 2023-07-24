import React, { useState, useContext, useEffect } from "react";
import "./cssmaincomponents/interviewScheduling.css"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const moment = require("moment");

const SelectInterviewSlot = () => {
    const loc = useLocation();
    const navigate = useNavigate();

    const { jobId, appId, company } = loc.state;

    const [selectedSlot, setSelectedSlot] = useState(null);
    console.log(jobId, appId, company);

    const [interviewSlots, setInterviewSlots] = useState([]);
    useEffect(() => {
        console.log(interviewSlots);
    }, [interviewSlots])

    useEffect(() => {
        const fetchInterviewSlots = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/api/get_candidate_slots', {
                    method: 'POST', // or 'GET' if you use query parameters
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ jobId: jobId }) // or replace 'body' with 'params' if you use query parameters
                });

                if (!response.ok) {
                    throw new Error('Error while fetching slots');
                }

                const slotsData = await response.json();
                setInterviewSlots(slotsData);
            } catch (error) {
                console.error('Failed to fetch interview slots:', error);
            }
        };

        fetchInterviewSlots();
    }, [])

    function handleClick(slotId) {
        if (selectedSlot === slotId) {
            setSelectedSlot(null);
        } else {
            setSelectedSlot(slotId)
        }
    }

    async function handleSubmit() {
        const response = await fetch('http://127.0.0.1:5000/api/book_candidate_slot', {
            method: 'POST', // or 'GET' if you use query parameters
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ appId: appId, slotId: selectedSlot }) // or replace 'body' with 'params' if you use query parameters
        });

        if (response.status == 200) {
            alert("Slot booked successfully");
            navigate("/candidate-dashboard");
        }
    }

    return (
        <div className="interview-scheduler">
            <div className="slots-container-candidate">
                <h2>Interview Slots</h2>
                {interviewSlots.length === 0 ? (
                    <p>No slots available</p>
                ) : (
                    <ul>
                        {interviewSlots.map((slot, index) => (
                            <li key={index}>
                                <div
                                    onClick={() => { handleClick(slot._id) }}
                                    className={selectedSlot === slot._id ? "selected_slot" : ""}
                                >
                                    {moment(slot.date).format("DD MMMM, YYYY")} ||| {slot.startTime} - {slot.endTime},
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <br />
            {
                selectedSlot ?
                    <button onClick={handleSubmit}>Select Slot</button>
                    : ""
            }
        </div>
    )
}

export default SelectInterviewSlot;