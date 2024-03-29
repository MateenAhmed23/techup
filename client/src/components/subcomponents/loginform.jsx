import React, { Component, useState } from "react";
import Button from "./button";
import Inputfield from "./inputfield";
import logo from "./csssubcomponents/logoblack.png";
import google from "./csssubcomponents/google.png";
import linkedin from "./csssubcomponents/linkedin.png";


import { useNavigate } from 'react-router-dom';


function LoginForm({ onSubmit, link }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(username, password);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function redirectToSignup() {
    navigate(link)
  }
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem", height: "97.5vh" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="container d-flex justify-content-center align-items-center mb-5 ">
                        <span className="h1 fw-bold mb-0">
                          <img
                            src={logo}
                            width={220}
                            height={80}
                            className="logomain"
                          />
                        </span>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>

                      <div className="form-outline mb-4">
                        <Inputfield
                          claslabel="form-label"
                          label="Email"
                          type="email"
                          value={username}
                          classfield="form-control form-control-lg"
                          id="emailfield"
                          onChange={handleUsernameChange}
                          placeholdr="Enter your Email Address"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <Inputfield
                          claslabel="form-label"
                          label="Password"
                          type="password"
                          value={password}
                          onChange={handlePasswordChange}
                          classfield="form-control form-control-lg"
                          id="passwordfield"
                          placeholdr="Enter your Password"
                        />
                      </div>

                      <div className="pt-1 mb-4">
                        <Button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Login
                        </Button>
                      </div>

                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p
                        className="mb-2 pb-lg-2"
                        style={{ color: "#393f81" }}
                      >
                        Don't have an account?{" "}
                        <button c onClick={() => redirectToSignup()} style={{ backgroundColor: "#393f81" }}>
                          Register here
                        </button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


// class LoginForm extends Component {
//   state = {
//     username: "",
//     password: "",
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { username, password } = this.state;
//     console.log(username)
//     this.props.onSubmit(username,password);
//   };

//   handleUsernameChange = (e) => {
//     console.log(e.target.value)
//     this.setState({ username: e.target.value });
//   };

//   handlePasswordChange = (e) => {
//     this.setState({ password: e.target.value });
//   };

//   redirectToSignup = ()=>{
//     navigate('/register');
//   }

//   render() {
//     const { username, password } = this.state;
//     return (
//       <section className="vh-100">
//         <div className="container py-5 h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col col-xl-10">
//               <div className="card" style={{ borderRadius: "1rem" }}>
//                 <div className="row g-0">
//                   <div className="col-md-6 col-lg-5 d-none d-md-block">
//                     <img
//                       src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
//                       alt="login form"
//                       className="img-fluid"
//                       style={{ borderRadius: "1rem 0 0 1rem", height: "97.5vh" }}
//                     />
//                   </div>
//                   <div className="col-md-6 col-lg-7 d-flex align-items-center">
//                     <div className="card-body p-4 p-lg-5 text-black">
//                       <form>
//                         <div className="container d-flex justify-content-center align-items-center mb-5 ">
//                           <span className="h1 fw-bold mb-0">
//                             <img
//                               src={logo}
//                               width={220}
//                               height={80}
//                               className="logomain"
//                             />
//                           </span>
//                         </div>

//                         <h5
//                           className="fw-normal mb-3 pb-3"
//                           style={{ letterSpacing: "1px" }}
//                         >
//                           Sign into your account
//                         </h5>

//                         <div className="form-outline mb-4">
//                           <Inputfield
//                             claslabel="form-label"
//                             label="Email"
//                             type="email"
//                             value={username}
//                             classfield="form-control form-control-lg"
//                             id="emailfield"
//                             onChange={this.handleUsernameChange}
//                             placeholdr="Enter your Email Address"
//                           />
//                         </div>  

//                         <div className="form-outline mb-4">
//                           <Inputfield
//                             claslabel="form-label"
//                             label="Password"
//                             type="password"
//                             value={password}
//                             onChange={this.handlePasswordChange}
//                             classfield="form-control form-control-lg"
//                             id="passwordfield"
//                             placeholdr="Enter your Password"
//                           />
//                         </div>

//                         <div className="pt-1 mb-4">
//                           <Button
//                             className="btn btn-dark btn-lg btn-block"
//                             type="button"
//                             onClick={this.handleSubmit}
//                           >
//                             Login
//                           </Button>
//                         </div>

//                         <a className="small text-muted" href="#!">
//                           Forgot password?
//                         </a>
//                         <p
//                           className="mb-2 pb-lg-2"
//                           style={{ color: "#393f81" }}
//                         >
//                           Don't have an account?{" "}
//                           <button onClick={()=>redirectToSignup()} style={{ color: "#393f81" }}>
//                             Register here
//                           </button>
//                         </p>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       // <form onSubmit={this.handleSubmit}>
//       //   <Inputfield
//       //     label="Username"
//       //     type="text"
//       //     value={username}
//       //     onChange={this.handleUsernameChange}
//       //   />
//       //   <Inputfield
//       //     label="Password"
//       //     type="password"
//       //     value={password}
//       //     onChange={this.handlePasswordChange}
//       //     className=""
//       // />
//       //   <Button className="">Login</Button>
//       // </form>
//     );
//   }
// }

export default LoginForm;
