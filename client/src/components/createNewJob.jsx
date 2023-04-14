import React, { useState } from "react";
import CompNav from "./subcomponents/companyNav";
import "./cssmaincomponents/createnewjob.css";
import JobDescSmall from "./subcomponents/jobDescSmall";



function CreateNewJob(){

  // const [jobDescriptions, setJobDescriptions] = useState([
  //   {
  //     id: 1,
  //     label: "Job Title",
  //     type: "text",
  //     placeholder: "e.g. Software Engineer",
  //     height: "7vh",
  //   },
  //   // {
  //   //   id: 2,
  //   //   label: "Department",
  //   //   type: "desciption",
  //   //   placeholder: "e.g. Human Resources",
  //   //   height: "7vh",
  //   // },

  //   {
  //     id: 3,
  //     label: "Job Location",
  //     type: "text",
  //     placeholder: "e.g. New York",
  //     height: "7vh",
  //   },

  //   // {
  //   //   id: 4,
  //   //   label: "Salary",

  //   //   type: "tel",
  //   //   placeholder: "e.g. 1000",
  //   //   height: "7vh",
  //   // },

  //   {
  //     id: 5,
  //     label: "Type",
  //     type: "text",
  //     placeholder: "e.g. Full Time",
  //     height: "7vh",
  //   },

  //   // {
  //   //   id: 6,
  //   //   label: "Overtime",
  //   //   type: "text",
  //   //   placeholder: "e.g. Yes",
  //   //   height: "7vh",
  //   // },

  //   {
  //     id: 7,
  //     label: "Stack",
  //     type: "text",
  //     placeholder: "e.g. MERN",
  //     height: "7vh",
  //   },
  //   // {
  //   //   id: 8,
  //   //   label: "Application Instructions",
  //   //   type: "text",
  //   //   placeholder: "e.g. Submit cv in pdf format ",
  //   //   height: "15vh",
  //   // },
  //   {
  //     id: 11,
  //     label: "Experience",
  //     type: "text",
  //     placeholder: "e.g. 1 yr",
  //     height: "7vh",
  //   },
  //   {
  //     id: 9,
  //     label: "General Job Description",
  //     type: "text",
  //     placeholder: "e.g. Your responsibility is to create responsive website",
  //     height: "23vh",
  //   },
  //   {
  //     id: 10,
  //     label: "Perks",
  //     type: "text",
  //     placeholder: "e.g. Work from home",
  //     height: "23vh",
  //   },
  //   {
  //     id: 11,
  //     label: "Duties and Responsibilities",
  //     type: "text",
  //     placeholder: "e.g. Should be a teamworker",
  //     height: "23vh",
  //   },
    
   
  //   // add more job descriptions here
  // ])

  const jobDescriptions = [
    {
      id: 1,
      label: "Job Title",
      type: "text",
      placeholder: "e.g. Software Engineer",
      height: "7vh",
    },
    // {
    //   id: 2,
    //   label: "Department",
    //   type: "desciption",
    //   placeholder: "e.g. Human Resources",
    //   height: "7vh",
    // },

    {
      id: 3,
      label: "Job Location",
      type: "text",
      placeholder: "e.g. New York",
      height: "7vh",
    },

    // {
    //   id: 4,
    //   label: "Salary",

    //   type: "tel",
    //   placeholder: "e.g. 1000",
    //   height: "7vh",
    // },

    {
      id: 5,
      label: "Type",
      type: "text",
      placeholder: "e.g. Full Time",
      height: "7vh",
    },

    // {
    //   id: 6,
    //   label: "Overtime",
    //   type: "text",
    //   placeholder: "e.g. Yes",
    //   height: "7vh",
    // },

    {
      id: 7,
      label: "Stack",
      type: "text",
      placeholder: "e.g. MERN",
      height: "7vh",
    },
    // {
    //   id: 8,
    //   label: "Application Instructions",
    //   type: "text",
    //   placeholder: "e.g. Submit cv in pdf format ",
    //   height: "15vh",
    // },
    {
      id: 11,
      label: "Experience",
      type: "text",
      placeholder: "e.g. 1 yr",
      height: "7vh",
    },
    {
      id: 9,
      label: "General Job Description",
      type: "text",
      placeholder: "e.g. Your responsibility is to create responsive website",
      height: "23vh",
    },
    {
      id: 10,
      label: "Perks",
      type: "text",
      placeholder: "e.g. Work from home",
      height: "23vh",
    },
    {
      id: 11,
      label: "Duties and Responsibilities",
      type: "text",
      placeholder: "e.g. Should be a teamworker",
      height: "23vh",
    },
    
   
    // add more job descriptions here
  ]


  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')
  const [stack, setStack] = useState('')
  const [experience, setExperience] = useState('')
  const [desc, setDesc] = useState('')
  const [perks, setPerks] = useState('')
  const [duties, setDuties] = useState('')



  const jobDescriptionssmall = jobDescriptions.slice(0, 5);
  const jobDescriptionslarge = jobDescriptions.slice(5, 11);

  // console.log(jobDescriptionssmall)


  function submitHandler(){
    console.log('Lets crate the job here')
    console.log(title, location, type, stack, experience, desc, perks, duties)
  }

  function handleChange(changeFor, value){
    console.log('I AM FREAKING HEREEEE')
    switch (changeFor){
      case 'Job Title':
        setTitle(value)
        break;
      case 'Job Location':
        setLocation(value)
        break;
      case 'Type':
        setType(value)
        break;
      case 'Stack':
        setStack(value)
        break;
      case 'Experience':
        setExperience(value)
        break;
      case 'General Job Description':
        setDesc(value)
        break;
      case 'Perks':
        setPerks(value)
        break;
      case 'Duties and Responsibilities':
        setDuties(value)
        break;
      default:
        break;

    }
  }

  return(
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
                      change = {handleChange}
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
                      change = {handleChange}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="buttonsss">
          <button className="back">Back</button>
          <button className="create" onClick={()=>submitHandler()}>Create</button>
        </div>
        <div className="footer">
          <h1 className="heading">Footer</h1>
        </div>
      </div>
  )
}

// class CreateNewJob extends Component {
//   state = {
//     jobDescriptions: [
//       {
//         id: 1,
//         label: "Job Title",
//         type: "text",
//         placeholder: "e.g. Software Engineer",
//         height: "7vh",
//       },
//       {
//         id: 2,
//         label: "Department",
//         type: "desciption",
//         placeholder: "e.g. Human Resources",
//         height: "7vh",
//       },

//       {
//         id: 3,
//         label: "Job Location",
//         type: "text",
//         placeholder: "e.g. New York",
//         height: "7vh",
//       },

//       {
//         id: 4,
//         label: "Salary",

//         type: "tel",
//         placeholder: "e.g. 1000",
//         height: "7vh",
//       },

//       {
//         id: 5,
//         label: "Hours",
//         type: "text",
//         placeholder: "e.g. 6",
//         height: "7vh",
//       },

//       {
//         id: 6,
//         label: "Overtime",
//         type: "text",
//         placeholder: "e.g. Yes",
//         height: "7vh",
//       },

//       {
//         id: 7,
//         label: "Technology",
//         type: "text",
//         placeholder: "e.g. Web Development",
//         height: "7vh",
//       },
//       {
//         id: 8,
//         label: "Application Instructions",
//         type: "text",
//         placeholder: "e.g. Submit cv in pdf format ",
//         height: "15vh",
//       },
//       {
//         id: 9,
//         label: "General Job Descriptiom",
//         type: "text",
//         placeholder: "e.g. Web Development",
//         height: "23vh",
//       },
//       {
//         id: 10,
//         label: "Duties and Responsibilities",
//         type: "text",
//         placeholder: "e.g. Web Development",
//         height: "23vh",
//       },
//       {
//         id: 11,
//         label: "Education and Experience ",
//         type: "text",
//         placeholder: "e.g. Web Development",
//         height: "23vh",
//       },
//       // add more job descriptions here
//     ],
//   };
//   render() {
//     const jobDescriptionssmall = this.state.jobDescriptions.slice(0, 8);
//     const jobDescriptionslarge = this.state.jobDescriptions.slice(8, 11);

//     return (
//       <div className="newjobpage">
//         <CompNav className="navbar" />
//         <div className="mainhead">
//           <h1 className="h1h">Create New Job </h1>
//         </div>
//         <div className="details">
//           <table>
//             <tbody>
//               {jobDescriptionssmall.map((jobDesc) => (
//                 <tr key={jobDesc.id}>
//                   <td className="job-desc-cell">
//                     <JobDescSmall
//                       id={jobDesc.id}
//                       type={jobDesc.type}
//                       placeholder={jobDesc.placeholder}
//                       label={jobDesc.label}
//                       height={jobDesc.height}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="descriptions">
//           <table>
//             <tbody>
//               {jobDescriptionslarge.map((jobDesc) => (
//                 <tr key={jobDesc.id}>
//                   <td className="job-desc-cell">
//                     <JobDescSmall
//                       id={jobDesc.id}
//                       type={jobDesc.type}
//                       placeholder={jobDesc.placeholder}
//                       label={jobDesc.label}
//                       height={jobDesc.height}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="buttonsss">
//           <button className="back">Back</button>
//           <button className="create">Create</button>
//         </div>
//         <div className="footer">
//           <h1 className="heading">Footer</h1>
//         </div>
//       </div>
//     );
//   }
// }

export default CreateNewJob;
