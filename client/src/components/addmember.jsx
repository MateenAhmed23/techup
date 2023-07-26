import React, { useState, useContext, useEffect } from "react";
import CompNav from "./subcomponents/companyNav";
import "./cssmaincomponents/screeningquestions.css";
import JobDescSmall from "./subcomponents/jobDescSmall";
import Memberdisplaycell from "./subcomponents/memberdisplaycell";
import Footer from "./subcomponents/footer";


import UserContext from '../context/user';


import { useNavigate } from 'react-router-dom';



function Addmember() {

  const { isLoading, loginStatus, isLoggedIn, userInfo } = useContext(UserContext);


  const navigate = useNavigate();


  useEffect(() => {


    if (loginStatus()) {

    }
    else {
      console.log('Please login first to access this page.')
      navigate('/')
    }
    // console.log(loginStatus())
    // if (loginStatus())
    // {
    //   console.log('HEE22')
    //   navigate('/')
    // }
  }, [])

  const [addedMembers, setAddedMembers] = useState([])


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [position, setPosition] = useState('')

  const arr = [name, email, position, password, confirmPassword]


  const memberCreation = [
    {
      id: 0,
      label: "Name",
      type: "text",
      placeholder: "e.g. Software E",
      height: "7vh",
    },
    {
      id: 1,
      label: "Email",
      type: "text",
      placeholder: "e.g. Software E",
      height: "7vh",
    },
    {
      id: 2,
      label: "Position at Software House",
      type: "text",
      placeholder: "e.g. Software E",
      height: "7vh",
    },
    {
      id: 3,
      label: "Password",
      type: "password",
      placeholder: "e.g. Software E",
      height: "7vh",
    },
    {
      id: 4,
      label: "Confirm Password",
      type: "password",
      placeholder: "e.g. Software E",
      height: "7vh",
    }]

  async function submitHandler() {
    console.log(name, email, password, confirmPassword, position)

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    else {
      // API

      const response = await fetch("http://127.0.0.1:5000/api/create_client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId: userInfo.userId,
          name,
          email,
          password
        }),
      });

      // const data = await response.json();

      if (response.status === 201) {
        alert('Member added successfully')
        navigate('/dashboard')
      }
    }
  }


  function handleChange(changeFor, value) {
    console.log(changeFor, value)
    switch (changeFor) {
      case 'Name':
        setName(value)
        break;
      case 'Email':
        setEmail(value)
        break;
      case 'Password':
        setPassword(value)
        break;
      case 'Confirm Password':
        setConfirmPassword(value)
        break;
      case 'Position at Software House':
        setPosition(value)
        break;
      default:
        break;

    }
  }

  return (
    <div className="addingmemebrspage">
      <div>
        <CompNav className="navbar" />
      </div>
      <div className="headingscr">
        <h1>Add Member</h1>
      </div>
      <div className="questinsfields">
        <table>
          <tbody>
            {memberCreation.map((jobDesc) => (
              <tr key={jobDesc.id}>
                <td className="job-desc-cell">
                  <JobDescSmall
                    id={jobDesc.id}
                    type={jobDesc.type}
                    placeholder={jobDesc.placeholder}
                    label={jobDesc.label}
                    height={jobDesc.height}
                    change={handleChange}
                    value={arr[jobDesc.id]}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="savequestion">
        <button className="saveques" onClick={() => submitHandler()}>Save Member</button>
      </div>
      <div className="addedmembers">
        {" "}
        <table>
          <tbody>
            {addedMembers.map((member) => (
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
     
      <div className="footerscreeningpg">
        {/* <h1 className="heading">Footer</h1> */}
        <Footer />
      </div>
    </div>
  )
}

// class Addmember extends Component {
//   state = {
//     addedmembers: [
//       { id: 1, name: "Muqadim", rank: "HR", email: "muqadimorg@gmail.com" },
//       { id: 2, name: "Ahmad", rank: "Manager", email: "haris@gmail.com" },
//       { id: 3, name: "Ahmad", rank: "Manager", email: "haris@gmail.com" },
//       { id: 2, name: "Ahmad", rank: "Manager", email: "haris@gmail.com" },
//       { id: 3, name: "Ahmad", rank: "Manager", email: "haris@gmail.com" },
//       { id: 2, name: "Ahmad", rank: "Manager", email: "haris@gmail.com" },
//     ],
//     membercreation: [
//       {
//         id: 1,
//         label: "Name",
//         type: "text",
//         placeholder: "e.g. Software E",
//         height: "7vh",
//       },
//       {
//         id: 2,
//         label: "Email",
//         type: "text",
//         placeholder: "e.g. Software E",
//         height: "7vh",
//       },
//       {
//         id: 3,
//         label: "Password",
//         type: "text",
//         placeholder: "e.g. Software E",
//         height: "7vh",
//       },
//       {
//         id: 4,
//         label: "Confirm Password",
//         type: "text",
//         placeholder: "e.g. Software E",
//         height: "7vh",
//       },
//       {
//         id: 5,
//         label: "Posiiton at Software House",
//         type: "text",
//         placeholder: "e.g. Software E",
//         height: "7vh",
//       },
//     ],
//   };
//   render() {
//     return (
//       <div className="addingmemebrspage">
//         <div>
//           <CompNav className="navbar" />
//         </div>
//         <div className="headingscr">
//           <h1>Adding Members Section</h1>
//         </div>
//         <div className="questinsfields">
//           <table>
//             <tbody>
//               {this.state.membercreation.map((jobDesc) => (
//                 <tr key={jobDesc.id}>
//                   <td className="job-desc-cell">
//                     <JobDescSmall
//                       id={jobDesc.id}
//                       type={jobDesc.type}
//                       placeholder={jobDesc.placeholder}
//                       label={jobDesc.label}
//                       height={jobDesc.height}
//                       //   change={handleChange}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="savequestion">
//           <button className="saveques">Save Member</button>
//         </div>
//         <div className="addedmembers">
//           {" "}
//           <table>
//             <tbody>
//               {this.state.addedmembers.map((member) => (
//                 <tr key={member.id}>
//                   <td className="job-desc-cell">
//                     <Memberdisplaycell
//                       id={member.id}
//                       name={member.name}
//                       rank={member.rank}
//                       email={member.email}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="contolsques">
//           <button className="backquest">Back</button>
//           <button className="nextquest">Next</button>
//         </div>
//         <div className="footerquest">
//           <h1 className="heading">Footer</h1>
//         </div>
//       </div>
//     );
//   }
// }

export default Addmember;
