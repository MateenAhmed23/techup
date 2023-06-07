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
import Memberdisplaycell from "./components/subcomponents/memberdisplaycell";
import JobInfo from "./components/jobinfocell";
import ScreeningQuestions from "./components/screeningquestions";
import Addmember from "./components/addmember";
import Mcqschoosing from "./components/mcqschoosing";
import CandidateProfile from "./components/candidateprofile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage/>,
  
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
    element: < CompanyDashboard/>,
  },
  {
    path: "/companyDetails",
    element: <CompanyDetails />,
  }
  ,
  {
    path: "/jobinfo/:id",
    element: <JobInfo />,
  }
  ,
  {
    path: "/screeningquestions",
    element: <ScreeningQuestions />,
  },
  {
    path: "/addmember",
    element: <Addmember />,
  },
  {
    path: "/mcqschoosing",
    element: <Mcqschoosing />,
  },{
    path: "/CandidateProfile",
    element: <CandidateProfile />,
  }
]);

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
