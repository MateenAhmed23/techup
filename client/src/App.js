// import logo from './logo.svg';
import "./App.css";
import React from "react";
// For routing
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landingpage from "./components/landingpage";
import Login from "./components/login";
import Signup from "./components/signup";
import CompanyDetails from "./components/companyDetails";
import CreateNewJob from "./components/createNewJob";
import CompanyDashboard from "./components/companydashboard";
// import Memberdisplaycell from "./components/subcomponents/memberdisplaycell";
import JobInfo from "./components/jobinfocell";
import ScreeningQuestions from "./components/screeningquestions";
import Addmember from "./components/addmember";
import CandidateLogin from "./components/candidateLogin";
import CandidateDashboard from "./components/candidateDashboard";
import Mcqschoosing from "./components/mcqschoosing";
import CandidateProfile from "./components/candidateprofile";
import CandidateSignup from "./components/candidateSignup";
import JobUrl from "./components/jobUrl";
import EditJob from "./components/editJob";
// import inte from "./components/interviewScheduling";
import InterviewScheduler from "./components/interviewScheduling";
import Footer from "./components/subcomponents/footer";
import { Provider as CandidateProvider } from "./context/candidate"; // adjust path according to your folder structure

// import InterviewScheduler from"./components/interviewScheduling"
// import Footer from "./components/subcomponents/footer";
// import ResultsScreen from "./components/resultsscreen";
import AppliedJobs from "./components/appliedjobscandidate";
import SingleDisplaycol from "./components/subcomponents/singledisplaycandidateblock";
import AnswerScreeningCandidate from "./components/answerscreeningcandidate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/createnewjob",
    element: <CreateNewJob />,
  },
  {
    path: "/dashboard",
    element: <CompanyDashboard />,
  },
  {
    path: "/companyDetails",
    element: <CompanyDetails />,
  },
  {
    path: "/joburl/:jobId",
    element: <JobUrl />,
  },
  {
    path: "/jobinfo/:id",
    element: <JobInfo />,
  },
  {
    path: "/screeningquestions/:id",
    element: <ScreeningQuestions />,
  },
  {
    path: "/addmember",
    element: <Addmember />,
  },
  {
    path: "/mcqschoosing",
    element: <Mcqschoosing />,
  },
  {
    path: "/CandidateProfile",
    element: <CandidateProfile />,
  },
  {
    path: "/interviewScheduling",
    element: <InterviewScheduler />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
  {
    path: "/candidate-login",
    element: <CandidateLogin />,
  },
  {
    path: "/candidate-dashboard",
    element: <CandidateDashboard />,
  },
  {
    path: "/candidate-signup",
    element: <CandidateSignup />,
  },
  {
    path: "/appliedjobs",
    element: <AppliedJobs />,
  },
  {
    path: "/SingleDisplaycol",
    element: <SingleDisplaycol />,
  },
  {
    path: "/screeningcandidate",
    element: <AnswerScreeningCandidate />,
  },
  {
    path: "/edit-job",
    element: <EditJob />,
  },
]);

function App() {
  return (
    <CandidateProvider>
      <React.Fragment>
        <RouterProvider router={router} />
      </React.Fragment>
    </CandidateProvider>
  );
}

export default App;
