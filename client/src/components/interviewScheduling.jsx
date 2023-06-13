import React, { useState } from "react";
import "./cssmaincomponents/interviewScheduling.css";
import JobDescSmall from "./subcomponents/jobDescSmall";
import CompNav from "./subcomponents/companyNav";

const InterviewScheduler = () => {
  const [interviewSlots, setInterviewSlots] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [selectedSingleDate, setSelectedSingleDate] = useState("");
  const [selectedStartTime, setSelectedStartTime] = useState("");
  const [selectedEndTime, setSelectedEndTime] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");

  const handleStartDateChange = (e) => {
    setSelectedStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setSelectedEndDate(e.target.value);
  };

  const handleSingleDateChange = (e) => {
    setSelectedSingleDate(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    setSelectedStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setSelectedEndTime(e.target.value);
  };

  const handleDurationChange = (e) => {
    setSelectedDuration(e.target.value);
  };

  const handleAddRangeSlot = () => {
    if (
      selectedStartDate &&
      selectedEndDate &&
      selectedStartTime &&
      selectedEndTime &&
      selectedDuration
    ) {
      const newSlot = {
        startDate: selectedStartDate,
        endDate: selectedEndDate,
        startTime: selectedStartTime,
        endTime: selectedEndTime,
        duration: selectedDuration,
      };

      setInterviewSlots([...interviewSlots, newSlot]);

      // Reset selected values
      setSelectedStartDate("");
      setSelectedEndDate("");
      setSelectedStartTime("");
      setSelectedEndTime("");
      setSelectedDuration("");
    }
  };

  const handleAddSingleSlot = () => {
    if (
      selectedSingleDate &&
      selectedStartTime &&
      selectedEndTime &&
      selectedDuration
    ) {
      const newSlot = {
        date: selectedSingleDate,
        startTime: selectedStartTime,
        endTime: selectedEndTime,
        duration: selectedDuration,
      };

      setInterviewSlots([...interviewSlots, newSlot]);

      // Reset selected values
      setSelectedSingleDate("");
      setSelectedStartTime("");
      setSelectedEndTime("");
      setSelectedDuration("");
    }
  };

  return (
    <div className="interview-scheduler">
      <CompNav className="navinterview" />
      <h1 className="slectionheading">Interview Slots Selection</h1>
      <div className="content">
        <div className="form-container">
          <h2>Add Range Slot</h2>
          <div className="input-container">
            <JobDescSmall
              id="1"
              type="date"
              label="Start Date"
              height="7vh"
              width="20vw"
              value={selectedStartDate}
              onChange={handleStartDateChange}
            />
          </div>
          <div className="input-container">
            <JobDescSmall
              id="2"
              type="date"
              label="End Date"
              height="7vh"
              width="20vw"
              value={selectedEndDate}
              onChange={handleEndDateChange}
            />
          </div>
          <div className="input-container">
            <JobDescSmall
              id="3"
              type="time"
              label="Start Time"
              height="7vh"
              width="20vw"
              value={selectedStartTime}
              onChange={handleStartTimeChange}
            />
          </div>
          <div className="input-container">
            <JobDescSmall
              id="4"
              type="time"
              label="End Time"
              height="7vh"
              width="20vw"
              value={selectedEndTime}
              onChange={handleEndTimeChange}
            />
          </div>
          <div className="input-container">
            <JobDescSmall
              id="5"
              type="number"
              label="Duration"
              height="7vh"
              width="20vw"
              value={selectedDuration}
              onChange={handleDurationChange}
            />
          </div>
          <button onClick={handleAddRangeSlot}>Add Range Slot</button>
        </div>
        <div className="form-container">
          <h2>Add Single Slot</h2>
          <div className="input-container">
            <JobDescSmall
              id="6"
              type="date"
              label="Date"
              height="7vh"
              width="20vw"
              value={selectedSingleDate}
              onChange={handleSingleDateChange}
            />
          </div>
          <div className="input-container">
            <JobDescSmall
              id="7"
              type="time"
              label="Start Time"
              height="7vh"
              width="20vw"
              value={selectedStartTime}
              onChange={handleStartTimeChange}
            />
          </div>
          <div className="input-container">
            <JobDescSmall
              id="8"
              type="time"
              label="End Time"
              height="7vh"
              width="20vw"
              value={selectedEndTime}
              onChange={handleEndTimeChange}
            />
          </div>
          <div className="input-container">
            <JobDescSmall
              id="9"
              type="number"
              label="Duration"
              height="7vh"
              width="20vw"
              value={selectedDuration}
              onChange={handleDurationChange}
            />
          </div>
          <button onClick={handleAddSingleSlot}>Add Single Slot</button>
        </div>
      </div>
      <div className="slots-container">
        <h2>Available Interview Slots</h2>
        {interviewSlots.length === 0 ? (
          <p>No slots available</p>
        ) : (
          <ul>
            {interviewSlots.map((slot, index) => (
              <li key={index}>
                {slot.startDate} - {slot.endDate || ""} {slot.date || ""},{" "}
                {slot.startTime} - {slot.endTime}, Duration: {slot.duration}{" "}
                minutes
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InterviewScheduler;
