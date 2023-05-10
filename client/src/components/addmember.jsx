import React, { Component } from "react";
import CompNav from "./subcomponents/companyNav";
import "./cssmaincomponents/screeningquestions.css";
import JobDescSmall from "./subcomponents/jobDescSmall";
import Memberdisplaycell from "./subcomponents/memberdisplaycell";
class Addmember extends Component {
  state = {
    addedmembers: [
      { id: 1, name: "Muqadim", rank: "HR", email: "muqadimorg@gmail.com" },
      { id: 2, name: "Ahmad", rank: "Manager", email: "haris@gmail.com" },
      { id: 3, name: "Ahmad", rank: "Manager", email: "haris@gmail.com" },
      { id: 2, name: "Ahmad", rank: "Manager", email: "haris@gmail.com" },
      { id: 3, name: "Ahmad", rank: "Manager", email: "haris@gmail.com" },
      { id: 2, name: "Ahmad", rank: "Manager", email: "haris@gmail.com" },
    ],
    membercreation: [
      {
        id: 1,
        label: "Name",
        type: "text",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
      {
        id: 2,
        label: "Email",
        type: "text",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
      {
        id: 3,
        label: "Password",
        type: "text",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
      {
        id: 4,
        label: "Confirm Password",
        type: "text",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
      {
        id: 5,
        label: "Posiiton at Software House",
        type: "text",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
    ],
  };
  render() {
    return (
      <div className="addingmemebrspage">
        <div>
          <CompNav className="navbar" />
        </div>
        <div className="headingscr">
          <h1>Adding Members Section</h1>
        </div>
        <div className="questinsfields">
          <table>
            <tbody>
              {this.state.membercreation.map((jobDesc) => (
                <tr key={jobDesc.id}>
                  <td className="job-desc-cell">
                    <JobDescSmall
                      id={jobDesc.id}
                      type={jobDesc.type}
                      placeholder={jobDesc.placeholder}
                      label={jobDesc.label}
                      height={jobDesc.height}
                      //   change={handleChange}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="savequestion">
          <button className="saveques">Save Member</button>
        </div>
        <div className="addedmembers">
          {" "}
          <table>
            <tbody>
              {this.state.addedmembers.map((member) => (
                <tr key={member.id}>
                  <td className="job-desc-cell">
                    <Memberdisplaycell
                      id={member.id}
                      name={member.name}
                      rank={member.rank}
                      email={member.email}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="contolsques">
          <button className="backquest">Back</button>
          <button className="nextquest">Next</button>
        </div>
        <div className="footerquest">
          <h1 className="heading">Footer</h1>
        </div>
      </div>
    );
  }
}

export default Addmember;
