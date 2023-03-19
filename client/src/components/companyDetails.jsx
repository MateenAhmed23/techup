import React, { useState } from "react";
// import Footer from "./subcomponents/footer";
import Navbar from "./subcomponents/navbar";
import Inputfield from "./subcomponents/inputfield";
import "./cssmaincomponents/companydetails.css";

function CompanyDetails() {
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [number, setNumber] = useState();
  const [personName, setPersonName] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [personNumber, setPersonNumber] = useState();
  return (
    <div className="alldetails">
      <Navbar className="navbar"></Navbar>
      <h1 className="maninhead">Profile SetUp</h1>
      <div className="col1">
        {" "}
        <h1 className="headingcomp">Company Details</h1>
        <div className="form-outline mb-4">
          <Inputfield
            claslabel="form-label"
            label="Company Name"
            type="text"
            value={companyName}
            classfield="form-control form-control-lg"
            id="emailfield"
            onChange={(e) => setCompanyName(e.target.value)}
            placeholdr=""
          />
        </div>
        <div className="form-outline mb-4">
          <Inputfield
            claslabel="form-label"
            label="Company Address"
            type="text"
            value={address}
            classfield="form-control form-control-lg"
            id="emailfield"
            onChange={(e) => setAddress(e.target.value)}
            placeholdr=""
          />
        </div>
        <div className="form-outline mb-4">
          <Inputfield
            claslabel="form-label"
            label="Website"
            type="text"
            value={website}
            classfield="form-control form-control-lg"
            id="emailfield"
            onChange={(e) => setWebsite(e.target.value)}
            placeholdr=""
          />
        </div>
        <div className="form-outline mb-4">
          <Inputfield
            claslabel="form-label"
            label="Company Phone Number"
            type="number"
            value={number}
            classfield="form-control form-control-lg"
            id="emailfield"
            onChange={(e) => setNumber(e.target.value)}
            placeholdr=""
          />
        </div>
      </div>
      <div className="col2">
        <h1 className="headingcomp">Person Details</h1>

        <div className="form-outline mb-4">
          <Inputfield
            claslabel="form-label"
            label="Name"
            type="text"
            value={personName}
            classfield="form-control form-control-lg"
            id="emailfield"
            onChange={(e) => setPersonName(e.target.value)}
            placeholdr=""
          />
        </div>

        <div className="form-outline mb-4">
          <Inputfield
            claslabel="form-label"
            label="Designation"
            type="text"
            value={designation}
            classfield="form-control form-control-lg"
            id="emailfield"
            onChange={(e) => setDesignation(e.target.value)}
            placeholdr=""
          />
        </div>

        <div className="form-outline mb-4">
          <Inputfield
            claslabel="form-label"
            label="Email Address"
            type="email"
            value={email}
            classfield="form-control form-control-lg"
            id="emailfield"
            onChange={(e) => setEmail(e.target.value)}
            placeholdr=""
          />
        </div>

        <div className="form-outline mb-4">
          <Inputfield
            claslabel="form-label"
            label="Contact Number"
            type="number"
            value={personNumber}
            classfield="form-control form-control-lg"
            id="emailfield"
            onChange={(e) => setPersonNumber(e.target.value)}
            placeholdr=""
          />
        </div>
      </div>
      <div className="buttondet">
        <a
          onClick={() => this.props.onnavclick("contractus")}
          className="back"
          href="#"
        >
           &nbsp; &nbsp;Back  &nbsp; &nbsp;
        </a>
        <a
          onClick={() => this.props.onnavclick("signup")}
          className="register"
          href="#"
        >
          Register
        </a>
      </div>

      <div className="footer">
        <h1 className="heading">Footer</h1>
      </div>
    </div>
  );
}

// class CompanyDetails extends Component {
//   state = {};
//   render() {
//     return (
//       <div className="alldetails">
//         <Navbar className="navbar"></Navbar>
//         <div className="col1">
//           {" "}
//           <div className="form-outline mb-4">
//             <Inputfield
//               claslabel="form-label"
//               label="Company Name"
//               type="text"
//               value={companyName}
//               classfield="form-control form-control-lg"
//               id="emailfield"
//               onChange={(e) => setCompanyName(e.target.value)}
//               placeholdr=""
//             />
//           </div>
//           <div className="form-outline mb-4">
//             <Inputfield
//               claslabel="form-label"
//               label="Company Address"
//               type="text"
//               value={address}
//               classfield="form-control form-control-lg"
//               id="emailfield"
//               onChange={(e) => setAddress(e.target.value)}
//               placeholdr=""
//             />
//           </div>
//           <div className="form-outline mb-4">
//             <Inputfield
//               claslabel="form-label"
//               label="Website"
//               type="text"
//               value={website}
//               classfield="form-control form-control-lg"
//               id="emailfield"
//               onChange={(e) => setWebsite(e.target.value)}
//               placeholdr=""
//             />
//           </div>
//           <div className="form-outline mb-4">
//             <Inputfield
//               claslabel="form-label"
//               label="Company Phone Number"
//               type="number"
//               value={number}
//               classfield="form-control form-control-lg"
//               id="emailfield"
//               onChange={(e) => setNumber(e.target.value)}
//               placeholdr=""
//             />
//           </div>
//         </div>
//         <div className="col2">
//         <div className="form-outline mb-4">
//               <Inputfield
//                 claslabel="form-label"
//                 label="Name"
//                 type="text"
//                 value={personName}
//                 classfield="form-control form-control-lg"
//                 id="emailfield"
//                 onChange={e=>setPersonName(e.target.value)}
//                 placeholdr=""
//               />
//             </div>

//             <div className="form-outline mb-4">
//               <Inputfield
//                 claslabel="form-label"
//                 label="Designation"
//                 type="text"
//                 value={designation}
//                 classfield="form-control form-control-lg"
//                 id="emailfield"
//                 onChange={e=>setDesignation(e.target.value)}
//                 placeholdr=""
//               />
//             </div>

//             <div className="form-outline mb-4">
//               <Inputfield
//                 claslabel="form-label"
//                 label="Email Address"
//                 type="email"
//                 value={email}
//                 classfield="form-control form-control-lg"
//                 id="emailfield"
//                 onChange={e=>setEmail(e.target.value)}
//                 placeholdr=""
//               />
//             </div>

//             <div className="form-outline mb-4">
//               <Inputfield
//                 claslabel="form-label"
//                 label="Contact Number"
//                 type="number"
//                 value={personNumber}
//                 classfield="form-control form-control-lg"
//                 id="emailfield"
//                 onChange={e=>setPersonNumber(e.target.value)}
//                 placeholdr=""
//               />
//             </div>
//         </div>
//         <div className="footer">
//           <h1 className="heading">Footer</h1>
//         </div>
//       </div>
//     );
//   }
// }

export default CompanyDetails;
