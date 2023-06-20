import React, { Component } from "react";
import CompNav from "./subcomponents/companyNav";
import "./cssmaincomponents/mcqschoosing.css";
import JobDescSmall from "./subcomponents/jobDescSmall";
import QuestionDisplaycell from "./subcomponents/questiondisplaycell";
import Footer from "./subcomponents/footer";

class Mcqschoosing extends Component {
  state = {
    mcqsoptions: [
      {
        id: 1,
        label: "Option 1",
        type: "text",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
      {
        id: 2,
        label: "Option 2",
        type: "text",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
    ],
    templatequests: [
      {
        id: 1,
        label: "Type",
        type: "select",
        placeholder: "e.g. Software E",
        height: "7vh",
        options: [
          "OOP",
          "Machine Learning",
          "Web Developement ",
          "Operating Sytems",
        ],
      },
      {
        id: 2,
        label: "  Coding langage(Optional)",
        type: "select",
        placeholder: "e.g. Software E",
        height: "7vh",
        options: ["C++", "Python", "Java", "Javascript"],
      },
      {
        id: 3,
        label: "Number of easy",
        type: "number",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
      {
        id: 4,
        label: "Number of Medium",
        type: "number",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
      {
        id: 5,
        label: "Number of Hard",
        type: "number",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
    ],
    testsettings: [
      {
        id: 1,
        label: "Time Limmit",
        type: "number",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
      {
        id: 2,
        label: "Randomization",
        type: "select",
        placeholder: "e.g. Software E",
        height: "7vh",
        options: ["Yes", "No"],
      },
      {
        id: 3,
        label: "Negative Maring per MCQ",
        type: "number",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
      {
        id: 4,
        label: "Test Date",
        type: "date",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
      {
        id: 5,
        label: "Test can be attemplted any time? ",
        type: "select",
        placeholder: "e.g. Software E",
        height: "7vh",
        options: ["Yes", "No"],
      },
      {
        id: 6,
        label: "Test Start  Time ",
        type: "time",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
      {
        id: 7,
        label: "Number of MCQs",
        type: "number",
        placeholder: "e.g. Software E",
        height: "7vh",
      },
    ],
    addedquestions: [
      {
        id: 1,
        question: "Where fo you see yourself in 5 years?",
        type: "Descriptive",
      },
      {
        id: 2,
        question: "Where fo you see yourself in 5 years?",
        type: "Descriptive",
      },
      {
        id: 3,
        question: "Where fo you see yourself in 5 years?",
        type: "Descriptive",
      },
    ],
  };
  addOption = () => {
    const nextId = this.state.mcqsoptions.length + 1;

    const newOption = {
      id: nextId,
      label: `Option ${nextId}`,
      type: "text",
      placeholder: "e.g. Software E",
      height: "7vh",
    };

    this.setState({
      mcqsoptions: [...this.state.mcqsoptions, newOption],
    });
  };
  remOption = () => {
    const newOptions = [...this.state.mcqsoptions];
    newOptions.pop();
    this.setState({
      mcqsoptions: newOptions,
    });
  };
  render() {
    return (
      <div className="mcqschoosingpage">
        {" "}
        <div>
          <CompNav className="navbar" />
        </div>
        <div className="headingcustomsquesbx">
          <h1 className="h1haha1cust">Customs Questions Section</h1>
        </div>
        <div className="customquestions">
          <h2 className="customshead">Question</h2>
          <JobDescSmall
            id="1"
            type="text"
            placeholder="Type Question Here!!"
            label="Question"
            height="30vh"
            // width="52vw"
            color="#FF0000"
          />
        </div>
        <div className="Mcqsoptions">
          <h2 className="testheadset">MCQ Options</h2>{" "}
          <table>
            <tbody>
              {this.state.mcqsoptions.map((jobDesc) => (
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
          <div className="buttonWrapper">
            <button onClick={this.addOption} className="addmcqoption">
              Add Option
            </button>
            <button onClick={this.remOption} className="remmcqoption">
              Remove Option
            </button>
          </div>
        </div>
        <div className="addcreatedcustomques">
          <button className="addquestioncustombutton">Add Question</button>
        </div>
        <div className="headingTemplatequesbx">
          <h1 className="h1haha1cust">Template Questions Section</h1>
        </div>
        <div className="templatequestionsmaindiv">
          <table>
            <tbody>
              {this.state.templatequests.map((jobDesc) => (
                <tr key={jobDesc.id}>
                  <td className="job-desc-cell">
                    <JobDescSmall
                      id={jobDesc.id}
                      type={jobDesc.type}
                      placeholder={jobDesc.placeholder}
                      label={jobDesc.label}
                      height={jobDesc.height}
                      options={jobDesc.options}
                      // change={handleChange}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="addcreatedtemplques">
          <button className="addquestiontemplbutton">Add Questions</button>
        </div>
        <div className="headingsettingstest">
          <h1 className="h1haha1cust">Test Settings Section</h1>
        </div>
        <div className="testsettigsmaindiv">
          <table>
            <tbody>
              {this.state.testsettings.map((jobDesc) => (
                <tr key={jobDesc.id}>
                  <td className="job-desc-cell">
                    <JobDescSmall
                      id={jobDesc.id}
                      type={jobDesc.type}
                      placeholder={jobDesc.placeholder}
                      label={jobDesc.label}
                      height={jobDesc.height}
                      options={jobDesc.options}
                      // change={handleChange}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="testsettignsbutttonswrap">
          <button className="testsettignsbutton">Apply Settings</button>
        </div>
        <div className="headingaddedquests">
          <h2 className="h1haha1cust">Added Questions</h2>
        </div>
        <div className="addedquestionsdispalychoo">
          <table>
            <tbody>
              {this.state.addedquestions.map((quest) => (
                <tr key={quest.id}>
                  <td className="job-desc-cell">
                    <QuestionDisplaycell
                      id={quest.id}
                      question={quest.question}
                      type={quest.type}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="footermcqchoosingpg">
          {/* <h1 className="heading">Footer</h1> */}
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Mcqschoosing;
