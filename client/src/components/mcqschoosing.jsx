import React, { useState, useContext, useEffect } from "react";
import CompNav from "./subcomponents/companyNav";
import "./cssmaincomponents/mcqschoosing.css";
import JobDescSmall from "./subcomponents/jobDescSmall";
import QuestionDisplaycell from "./subcomponents/questiondisplaycell";
import Footer from "./subcomponents/footer";

import { useParams } from 'react-router-dom';
import UserContext from "../context/user";
import { useNavigate } from "react-router-dom";





function Mcqschoosing() {

  const { id } = useParams();

  const { isLoading, isLoggedIn, loginStatus, userInfo } =
    useContext(UserContext);

  async function loadSavedQuestions() {
    const response = await fetch("http://127.0.0.1:5000/api/get_assessment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobId: id
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      //{
      //   id: 1,
      //   question: "Where fo you see yourself in 5 years?",
      //   type: "Descriptive",
      // }
      setAddedquestions(data)
      console.log(data)
    }
  }

  useEffect(() => {
    loadSavedQuestions();
  }, [])

  const navigate = useNavigate();

  async function authentication() {
    const res = await loginStatus()
    // console.log('Result from login status', res)
    if (!res) {
      alert('You must login to access this page')
      navigate('/login')
    }
  }


  useEffect(() => {
    if (isLoggedIn && userInfo.companyId) {
      // console.log('Checking logging status', isLoggedIn, 'and', userInfo.companyId)
    }
    else {
      authentication()
    }
  }, [isLoggedIn, userInfo.companyId])



  const [mcqsoptions, setMcqsoptions] = useState([
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
  ])
  const [templatequests, setTemplatequests] = useState([
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
  ])
  const [testsettings, setTestsettings] = useState([
    {
      id: 1,
      label: "Time Limit (minutes)",
      type: "number",
      placeholder: "e.g. Software E",
      height: "7vh",
    },
    {
      id: 2,
      label: "Number of MCQs",
      type: "number",
      placeholder: "e.g. Software E",
      height: "7vh",
    },
  ])
  const [addedquestions, setAddedquestions] = useState([
  ])


  const [question, setQuestion] = useState('');
  const [correctOption, setCorrectOption] = useState('Option 1')
  const [option1, setOption1] = useState('')
  const [option2, setOption2] = useState('')
  const [option3, setOption3] = useState('')
  const [option4, setOption4] = useState('')
  const [noQ, setNoq] = useState(1)
  const arr = [option1, option2, option3, option4]

  const [timeLimit, setTimeLimit] = useState(1)
  const [noMcq, setNoMcq] = useState(1)
  const arr1 = [timeLimit, noMcq]


  function addOption() {
    if (mcqsoptions.length == 4) return;
    const nextId = mcqsoptions.length + 1;

    const newOption = {
      id: nextId,
      label: `Option ${nextId}`,
      type: "text",
      placeholder: "e.g. Software E",
      height: "7vh",
    };
    setMcqsoptions([...mcqsoptions, newOption])
  }
  function remOption() {
    if (mcqsoptions.length == 2) return;
    const newOptions = [...mcqsoptions];
    newOptions.pop();
    setMcqsoptions(newOptions);
  }


  function handleChange(changeFor, value) {
    // console.log(changeFor,value)
    switch (changeFor) {
      case 'Question':
        setQuestion(value);
        break;
      case 'What is the correct option':
        setCorrectOption(value);
        break;
      case 'Option 1':
        // console.log('HEHEEH')
        // console.log(option1)
        setOption1(value)
        break;
      case 'Option 2':
        setOption2(value)
        break;
      case 'Option 3':
        setOption3(value)
        break;
      case 'Option 4':
        setOption4(value)
        break;
      case 'Time Limit (minutes)':
        setTimeLimit(value)
        break;
      case 'Number of MCQs':
        if (value < 0) {
          alert('No of MCQs cannot be less than 1')
          break;
        }
        if (value > addedquestions.length) {
          alert('No of MCQs cannot be more than added questions')
          break;
        }
        setNoMcq(value)

    }

  }

  function addQuestion() {
    const q = {
      id: noQ,
      question: question,
      correctOption: correctOption,
      options: [
        option1,
        option2,
        option3,
        option4
      ]
    }
    console.log(q)
    setNoq(noQ + 1)
    setAddedquestions([...addedquestions, q])
    console.log(addedquestions);

    setQuestion('');
    setCorrectOption('Option 1');
    setOption1('');
    setOption2('');
    setOption3('');
    setOption4('');
  }

  async function submitQuestions() {
    console.log('No of MCQs', noMcq)
    try {
      const response = await fetch("http://127.0.0.1:5000/api/create_assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobId: id,
          questions: addedquestions,
          NoOfMCQsToShow: noMcq,
          timeLimit: timeLimit
        }),
      });

      alert('Assessment Questions added')
      navigate('/jobinfo/' + id)
    } catch (e) {
      alert('There was an error submitting questions', e)
    }
  }

  function removeQuestion(id) {
    console.log(id, 'inside remove Question')
    const updatedItems = addedquestions.filter(question => question._id !== id);
    // const updatedItems = addedquestions.filter((_, i) => i !== id-1);
    setAddedquestions(updatedItems);
  }
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
          placeholder="Question"
          label="Question"
          height="30vh"
          change={handleChange}
          value={question}
        />
        <div className="correctoptionmcqschoosing">

          <JobDescSmall
            id="1"
            type="type"
            placeholder="Option 1"
            label="What is the correct option"
            height="7vh"
            // hehe={mcqsoptions.map((option,index)=>())}
            options={mcqsoptions.map((option, index) => `Option ${index + 1}`)}
            value={correctOption}
            change={handleChange}
          />
        </div>
      </div>
      <div className="Mcqsoptions">
        <h2 className="testheadset">MCQ Options</h2>{" "}
        <table>
          <tbody>
            {mcqsoptions.map((jobDesc) => (
              <tr key={jobDesc.id}>
                <td className="job-desc-cell">
                  <JobDescSmall
                    id={jobDesc.id}
                    type={jobDesc.type}
                    placeholder={jobDesc.placeholder}
                    label={jobDesc.label}
                    height={jobDesc.height}
                    change={handleChange}
                    value={arr[jobDesc.id - 1]}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="buttonWrapper">
          <button onClick={addOption} className="addmcqoption">
            Add Option
          </button>
          <button onClick={remOption} className="remmcqoption">
            Remove Option
          </button>
        </div>
      </div>
      <div className="addcreatedcustomques">
        <button className="addquestioncustombutton" onClick={() => addQuestion()}>Add Question</button>
        <button className="addquestioncustombutton" onClick={() => submitQuestions()}>Add Questions</button>
      </div>
      {/* <div className="headingTemplatequesbx">
          <h1 className="h1haha1cust">Template Questions Section</h1>
        </div>
        <div className="templatequestionsmaindiv">
          <table>
            <tbody>
              {templatequests.map((jobDesc) => (
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
        </div> */}
      <div className="headingsettingstest">
        <h1 className="h1haha1cust">Test Settings Section</h1>
      </div>
      <div className="testsettigsmaindiv">
        <table>
          <tbody>
            {testsettings.map((jobDesc) => (
              <tr key={jobDesc._id}>
                <td className="job-desc-cell">
                  <JobDescSmall
                    id={jobDesc.id}
                    type={jobDesc.type}
                    placeholder={jobDesc.placeholder}
                    label={jobDesc.label}
                    height={jobDesc.height}
                    options={jobDesc.options}
                    change={handleChange}
                    value={arr1[jobDesc.id - 1]}
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
            {addedquestions.map((quest, index) => (
              <tr key={quest._id}>
                <td className="job-desc-cell">
                  <QuestionDisplaycell
                    index={index + 1}
                    id={quest._id}
                    question={quest.question}
                    type={quest.correctOption}
                    remove={removeQuestion}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="footermcqchoosingpg">
        {/* <h1 className="heading">Footer</h1> */}
        <Footer />
      </div>
    </div>
  )
}



export default Mcqschoosing;