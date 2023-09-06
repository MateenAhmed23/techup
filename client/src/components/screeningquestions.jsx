import React, { useState, useEffect, useContext } from "react";
import CompNav from "./subcomponents/companyNav";
import "./cssmaincomponents/screeningquestions.css";
import QuestionDisplaycCell from "./subcomponents/questiondisplaycell";
import JobDescSmall from "./subcomponents/jobDescSmall";
import Footer from "./subcomponents/footer";


import UserContext from "../context/user";

import { useParams } from 'react-router-dom';


import { useNavigate } from "react-router-dom";


function ScreeningQuestions(){

  const [name, setName] = useState('')
  const [type, setType] = useState('LONG')
  const [required, setRequired] = useState('YES') 
  const [noQ, setNoQ] = useState(1);

  const { id } = useParams();

  const { isLoading, isLoggedIn, loginStatus, userInfo } =
    useContext(UserContext);


  const navigate = useNavigate();

    async function authentication() {
      const res = await loginStatus()
      // console.log('Result from login status', res)
      if (!res) {
        alert('You must login to access this page')
        navigate('/login')
      }
    }

    async function loadSavedQuestions(){
        const response = await fetch("http://127.0.0.1:5000/api/get_screening", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobId: id
        }),
      });

      if (response.status === 200){
        const data = await response.json();
        console.log(data)
        setAddedQuestions(data)
        setNoQ(data.length)
      }

      


    }

    useEffect(()=>{
      loadSavedQuestions();

    // const data = await response.json();

    
    },[])

    useEffect(() => {
      if (isLoggedIn && userInfo.companyId) {
        // console.log('Checking logging status', isLoggedIn, 'and', userInfo.companyId)
      }
      else {
        authentication()
      }
    }, [isLoggedIn, userInfo.companyId])


  const arr = [name, type, required]

  const [questioncreation,setQuestionCreation] = useState([
          {
            id: 0,
            label: "Question",
            type: "text",
            placeholder: "e.g. Latest Degree",
            height: "7vh"
          },
          {
            id: 1,
            label: "Response TYPE",
            type: "type",
            placeholder: "e.g. Software E",
            height: "7vh",
            options: [
              "LONG",
              "SHORT",
            ],
          },
          {
            id: 2,
            label: "Mandatory",
            type: "type",
            placeholder: "e.g. Software E",
            height: "7vh",
            options: [
              "YES",
              "NO",
            ],
          },
          
        ]);
  const [addedquestions, setAddedQuestions] = useState([
        ]) 
        
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 3;
  const totalItems = addedquestions.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedItems = addedquestions.slice(startIndex, endIndex);


  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };


  function handleChange(changeFor, value) {
    // console.log('I AM FREAKING HEREEEE')
    // console.log(changeFor,value)
    switch (changeFor) {
      case 'Question':
        // console.log('ssssss')
        setName(value);
        break;
      case 'Response TYPE':
        setType(value);
        break;
      case 'Mandatory':
        setRequired(value);
      default:
        break;

    }
    // console.log(name, type, required)
  }

  function handleSaveQuestion(){
    console.log(name, type, required)
    const aaa = [...addedquestions,{
      id: noQ,
      question: name,
      type:type,
      required: required
    }]

    setName('')
    setType('LONG')
    setRequired('YES') 

    console.log(aaa)
    setNoQ(noQ+1)
    setAddedQuestions(aaa)
  }

  function removeQuestion(id){
    console.log(id)
    const updatedItems = addedquestions.filter(question => question._id !== id);
    // const updatedItems = addedquestions.filter((_, i) => i !== id-1);
    setAddedQuestions(updatedItems);
    // console.log(id)
  }

  async function handleSubmit(){

    console.log(id)
    console.log(addedquestions)

    let arr;

    arr = addedquestions.map(obj => {
      let newObj = { ...obj };  // Create a copy of the object.
      delete newObj.id;  // Remove the id field.
      return newObj;
    });

    let obb = {
      jobId: id,
      questions: arr
    }

    const response = await fetch("http://127.0.0.1:5000/api/screening", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobId: id,
        questions: arr
      }),
    });

    console.log(response)

    // const data = await response.json();

    if (response.status === 200){
      alert('Questions added successfully')
      navigate('/jobinfo/'+id);
    }
  }
  return(
      <div className="screening">
        <div>
          <CompNav className="navbar" />
        </div>
        <div className="headingscr">
          <h1>Add Screening Questions</h1>
        </div>
        <div className="questinsfields">
          <table>
            <tbody>
              {questioncreation.map((jobDesc) => (
                <tr key={jobDesc.id}>
                  <td className="job-desc-cell">
                    <JobDescSmall
                      id={jobDesc.id}
                      type={jobDesc.type}
                      placeholder={jobDesc.placeholder}
                      label={jobDesc.label}
                      height={jobDesc.height}
                      options={jobDesc.options}
                      change={handleChange}
                      value = {arr[jobDesc.id]}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="savequestion">
          <button className="saveques" onClick={() => handleSaveQuestion()}>Save Question</button>
        </div>
        <div className="addedquestions">
          {" "}
          <table>
            <tbody>
              {paginatedItems.map((quest, index) => (
                <tr key={quest.id}>
                  <td className="job-desc-cell">
                    <QuestionDisplaycCell
                      index={index+1}
                      id={quest._id}
                      question={quest.question}
                      type={quest.type}
                      showDetailsButton={false}
                      remove={()=>removeQuestion(quest._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="contolsques">
          <button className="backquest" onClick={()=>goToPreviousPage()}>Back</button>
          <button className="backquest" onClick={() => handleSubmit()}>Submit</button>
        </div>
        <div>
        </div>
        <div className="footerscreeningpg">
          {/* <h1 className="heading">Foote</h1> */}
          <Footer/>
        </div>
      </div>
  )
}

export default ScreeningQuestions;
