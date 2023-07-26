import React, { useState, useContext, useEffect } from "react";
import "./cssmaincomponents/interviewScheduling.css";
import JobDescSmall from "./subcomponents/jobDescSmall";
import CompNav from "./subcomponents/companyNav";
import Footer from "./subcomponents/footer";
import UserContext from "../context/user";
import { useLocation } from "react-router-dom";

const moment = require("moment");

const InterviewScheduler = () => {
  const [interviewSlots, setInterviewSlots] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [selectedSingleDate, setSelectedSingleDate] = useState("");
  const [selectedRangeStartTime, setSelectedRangeStartTime] = useState("");
  const [selectedRangeEndTime, setSelectedRangeEndTime] = useState("");
  const [selectedStartTime, setSelectedStartTime] = useState("");
  const [selectedEndTime, setSelectedEndTime] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedRangeDuration, setSelectedRangeDuration] = useState("");
  const loc = useLocation();

  const jobId = loc.state.jobId;
  const { isLoading, isLoggedIn, loginStatus, userInfo } =
    useContext(UserContext);

  useEffect(() => {
    if (isLoggedIn) {
      console.log(userInfo);
    } else {
      if (loginStatus()) {
      } else {
      }
    }

    const fetchInterviewSlots = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/get_slots", {
          method: "POST", // or 'GET' if you use query parameters
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ jobId: jobId }), // or replace 'body' with 'params' if you use query parameters
        });

        if (!response.ok) {
          throw new Error("Error while fetching slots");
        }

        const slotsData = await response.json();
        setInterviewSlots(slotsData);
      } catch (error) {
        console.error("Failed to fetch interview slots:", error);
      }
    };

    // Only fetch slots if user is logged in
    if (userInfo && userInfo.userId) {
      fetchInterviewSlots();
    }
  }, [userInfo]);

  const handleStartDateChange = (e) => {
    setSelectedStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setSelectedEndDate(e.target.value);
  };

  const handleSingleDateChange = (e) => {
    setSelectedSingleDate(e.target.value);
  };

  const handleStartRangeTimeChange = (e) => {
    if (selectedRangeEndTime && selectedRangeEndTime < e.target.value) {
      alert("Start time cannot be after end time");
      setSelectedRangeStartTime("");
      return;
    }
    setSelectedRangeStartTime(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    if (selectedEndTime && selectedEndTime < e.target.value) {
      alert("Start time cannot be after end time");
      setSelectedStartTime("");
      return;
    }
    setSelectedStartTime(e.target.value);
  };

  const handleEndRangeTimeChange = (e) => {
    if (selectedRangeStartTime && selectedRangeStartTime > e.target.value) {
      alert("End time cannot be before start time");
      setSelectedRangeEndTime("");
      return;
    }
    setSelectedRangeEndTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    if (selectedStartTime && selectedStartTime > e.target.value) {
      alert("End time cannot be before start time");
      setSelectedEndTime("");
      return;
    }
    setSelectedEndTime(e.target.value);
  };

  const handleDurationChange = (e) => {
    console.log(e);
    setSelectedDuration(e.target.value);
  };

  const handleRangeDurationChange = (e) => {
    console.log(e);
    setSelectedRangeDuration(e.target.value);
  };

  async function handleAddRangeSlot() {
    if (
      selectedStartDate &&
      selectedEndDate &&
      selectedRangeStartTime &&
      selectedRangeEndTime &&
      selectedRangeDuration
    ) {
      const startDate = moment(selectedStartDate);
      const endDate = moment(selectedEndDate);
      const startTime = moment(selectedRangeStartTime, "HH:mm");
      const endTime = moment(selectedRangeEndTime, "HH:mm");
      const duration = parseInt(selectedRangeDuration);

      const slots = [];

      for (
        let day = moment(startDate);
        day.isSameOrBefore(endDate);
        day.add(1, "days")
      ) {
        for (
          let time = moment(startTime);
          time.isSameOrBefore(endTime);
          time.add(duration, "minutes")
        ) {
          let slotEndTime = moment(time).add(duration, "minutes");
          if (slotEndTime.isAfter(endTime)) break;

          let slot = {
            date: day.format("YYYY-MM-DD"),
            startTime: time.format("HH:mm"),
            endTime: slotEndTime.format("HH:mm"),
          };

          slots.push(slot);
        }
      }

      // Clear form input
      setSelectedStartDate("");
      setSelectedEndDate("");
      setSelectedRangeStartTime("");
      setSelectedRangeEndTime("");
      setSelectedRangeDuration("");

      setInterviewSlots([...interviewSlots, ...slots]);

      const payload = slots.map((slot) => ({ ...slot, jobId: jobId }));
      const res = await fetch("http://127.0.0.1:5000/api/add_slots", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    }
  }

  async function handleAddSingleSlot() {
    if (
      selectedSingleDate &&
      selectedStartTime &&
      selectedEndTime &&
      selectedDuration
    ) {
      const date = moment(selectedSingleDate);
      const startTime = moment(selectedStartTime, "HH:mm");
      const endTime = moment(selectedEndTime, "HH:mm");
      const duration = parseInt(selectedDuration);

      const slotDurationInMs = duration * 60 * 1000;
      const slots = [];

      for (
        let time = moment(startTime);
        time.isSameOrBefore(endTime);
        time.add(duration, "minutes")
      ) {
        let slotEndTime = moment(time).add(duration, "minutes");
        if (slotEndTime.isAfter(endTime)) break;

        let slot = {
          date: date.format("YYYY-MM-DD"),
          startTime: time.format("HH:mm"),
          endTime: slotEndTime.format("HH:mm"),
        };

        slots.push(slot);
      }

      // Clear form input
      setSelectedSingleDate("");
      setSelectedStartTime("");
      setSelectedEndTime("");
      setSelectedDuration("");

      setInterviewSlots([...interviewSlots, ...slots]);

      const payload = slots.map((slot) => ({ ...slot, jobId: jobId }));
      const res = await fetch("http://127.0.0.1:5000/api/add_slots", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    }
  }

  // async function handleAddRangeSlot() {
  //   if (
  //     selectedStartDate &&
  //     selectedEndDate &&
  //     selectedRangeStartTime &&
  //     selectedRangeEndTime &&
  //     selectedRangeDuration
  //   ) {
  //     const newSlot = {
  //       startDate: selectedStartDate,
  //       endDate: selectedEndDate,
  //       startTime: selectedRangeStartTime,
  //       endTime: selectedRangeEndTime,
  //       duration: selectedRangeDuration,
  //     };

  //     setInterviewSlots([...interviewSlots, newSlot]);

  //     // setSelectedStartDate("");
  //     // setSelectedEndDate("");
  //     // setSelectedRangeStartTime("");
  //     // setSelectedRangeEndTime("");
  //     // setSelectedRangeDuration("");

  //     console.log(userInfo);
  //   }
  // };

  // async function handleAddSingleSlot() {
  //   if (
  //     selectedSingleDate &&
  //     selectedStartTime &&
  //     selectedEndTime &&
  //     selectedDuration
  //   ) {
  //     const newSlot = {
  //       date: selectedSingleDate,
  //       startTime: selectedStartTime,
  //       endTime: selectedEndTime,
  //       duration: selectedDuration,
  //     };

  //     setInterviewSlots([...interviewSlots, newSlot]);

  //     // setSelectedSingleDate("");
  //     // setSelectedStartTime("");
  //     // setSelectedEndTime("");
  //     // setSelectedDuration("");

  //     newSlot["clientId"] = userInfo.userId;
  //     const res = await fetch("http://127.0.0.1:5000/api/add_slot", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newSlot),
  //     });
  //   }
  // };

  return (
    <div className="interview-scheduler">
      <CompNav className="navinterview" />
      <h1 className="slectionheading">Interview Slots Selection</h1>
      <div className="content">
        <div className="form-container">
          <h2>Add Range Days</h2>
          <div className="input-container">
            <JobDescSmall
              id="1"
              type="date"
              label="Start Date"
              height="7vh"
              width="20vw"
              value={selectedStartDate}
              interview={true}
              change={handleStartDateChange}
            />
          </div>
          <div className="input-container">
            <JobDescSmall
              id="2"
              type="date"
              label="End Date"
              height="7vh"
              width="20vw"
              interview={true}
              value={selectedEndDate}
              change={handleEndDateChange}
            />
          </div>
          <div className="input-container">
            <JobDescSmall
              id="3"
              type="time"
              label="Start Time"
              height="7vh"
              width="20vw"
              value={selectedRangeStartTime}
              interview={true}
              change={handleStartRangeTimeChange}
            />
          </div>
          <div className="input-container">
            <JobDescSmall
              id="4"
              type="time"
              label="End Time"
              height="7vh"
              width="20vw"
              value={selectedRangeEndTime}
              interview={true}
              change={handleEndRangeTimeChange}
            />
          </div>
          <div className="input-container">
            <JobDescSmall
              id="5"
              type="number"
              label="Duration in minutes"
              height="7vh"
              width="20vw"
              value={selectedRangeDuration}
              interview={true}
              change={handleRangeDurationChange}
            />
          </div>
          <button onClick={handleAddRangeSlot}>Add</button>
        </div>
        <div className="form-container">
          <h2>Add Single Day</h2>
          <div className="input-container">
            <JobDescSmall
              id="6"
              type="date"
              label="Date"
              height="7vh"
              width="20vw"
              interview={true}
              value={selectedSingleDate}
              change={handleSingleDateChange}
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
              interview={true}
              change={handleStartTimeChange}
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
              interview={true}
              change={handleEndTimeChange}
            />
          </div>
          <div className="input-container">
            <JobDescSmall
              id="9"
              type="number"
              label="Duration in minutes"
              height="7vh"
              width="20vw"
              value={selectedDuration}
              interview={true}
              change={handleDurationChange}
            />
          </div>
          <button onClick={handleAddSingleSlot}>Add</button>
        </div>
      </div>
      <div className="slots-container">
        <h2>Your Interview Slots</h2>
        {interviewSlots.length === 0 ? (
          <p>No slots available</p>
        ) : (
          <ul>
            {interviewSlots.map((slot, index) => (
              <li key={index}>
                <div className={slot.booked ? "booked_slot" : ""}>
                  {moment(slot.date).format("DD MMMM, YYYY")} |||{" "}
                  {slot.startTime} - {slot.endTime},
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="footercompinterv">
        {" "}
        <Footer className="footer" />
      </div>
    </div>
  );
};

export default InterviewScheduler;
