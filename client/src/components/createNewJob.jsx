import React, { Component } from "react";
import CompNav from "./subcomponents/companyNav";
import "./cssmaincomponents/createnewjob.css";
import JobDescSmall from "./subcomponents/jobDescSmall";

class CreateNewJob extends Component {
  state = {
    jobDescriptions: [
      {
        id: 1,
        label: "Job Title",
        type: "text",
        placeholder: "e.g. Software Engineer",
        height: "7vh",
      },
      {
        id: 2,
        label: "Department",
        type: "desciption",
        placeholder: "e.g. Human Resources",
        height: "7vh",
      },

      {
        id: 3,
        label: "Job Location",
        type: "text",
        placeholder: "e.g. New York",
        height: "7vh",
      },

      {
        id: 4,
        label: "Salary",

        type: "tel",
        placeholder: "e.g. 1000",
        height: "7vh",
      },

      {
        id: 5,
        label: "Hours",
        type: "text",
        placeholder: "e.g. 6",
        height: "7vh",
      },

      {
        id: 6,
        label: "Overtime",
        type: "text",
        placeholder: "e.g. Yes",
        height: "7vh",
      },

      {
        id: 7,
        label: "Technology",
        type: "text",
        placeholder: "e.g. Web Development",
        height: "7vh",
      },
      {
        id: 8,
        label: "Application Instructions",
        type: "text",
        placeholder: "e.g. Submit cv in pdf format ",
        height: "15vh",
      },
      {
        id: 9,
        label: "General Job Descriptiom",
        type: "text",
        placeholder: "e.g. Web Development",
        height: "23vh",
      },
      {
        id: 10,
        label: "Duties and Responsibilities",
        type: "text",
        placeholder: "e.g. Web Development",
        height: "23vh",
      },
      {
        id: 11,
        label: "Education and Experience ",
        type: "text",
        placeholder: "e.g. Web Development",
        height: "23vh",
      },
      // add more job descriptions here
    ],
  };
  render() {
    const jobDescriptionssmall = this.state.jobDescriptions.slice(0, 8);
    const jobDescriptionslarge = this.state.jobDescriptions.slice(8, 11);

    return (
      <div className="newjobpage">
        <CompNav className="navbar" />
        <div className="mainhead">
          <h1 className="h1h">Create New Job </h1>
        </div>
        <div className="details">
          <table>
            <tbody>
              {jobDescriptionssmall.map((jobDesc) => (
                <tr key={jobDesc.id}>
                  <td className="job-desc-cell">
                    <JobDescSmall
                      id={jobDesc.id}
                      type={jobDesc.type}
                      placeholder={jobDesc.placeholder}
                      label={jobDesc.label}
                      height={jobDesc.height}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="descriptions">
          <table>
            <tbody>
              {jobDescriptionslarge.map((jobDesc) => (
                <tr key={jobDesc.id}>
                  <td className="job-desc-cell">
                    <JobDescSmall
                      id={jobDesc.id}
                      type={jobDesc.type}
                      placeholder={jobDesc.placeholder}
                      label={jobDesc.label}
                      height={jobDesc.height}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="buttonsss">
          <button className="back">Back</button>
          <button className="create">Create</button>
        </div>
        <div className="footer">
          <h1 className="heading">Footer</h1>
        </div>
      </div>
    );
  }
}

export default CreateNewJob;
