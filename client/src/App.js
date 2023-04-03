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
    path: "/jobdisplaycell",
    element: < CompanyDashboard/>,
  },
  {
    path: "/companyDetails",
    element: <CompDetails />,
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
