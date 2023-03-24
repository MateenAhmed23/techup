import React, { useState } from "react";
import Button from "./button";
import Inputfield from "./inputfield";
import logo from "./csssubcomponents/logoblack.png";
import google from "./csssubcomponents/google.png";
import linkedin from "./csssubcomponents/linkedin.png";


function SignupForm({onSubmit}){


  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')


  function onClickRegister(){
    console.log('HIII')
    onSubmit(username,email,password,confirmPassword)
  }


  function handleUsernameChange (e) {
    setUsername(e.target.value)
  };

  function handleEmailChange (e) {
    setEmail(e.target.value)
  };

  function handlePasswordChange (e) {
    setPassword(e.target.value)
  };

  function handleConfirmPasswordChange (e) {
    setConfirmPassword(e.target.value)
  };

  return(
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
                      style={{
                        borderRadius: "1rem 0 0 1rem",
                        height: "97.5vh",
                      }}
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
                          className="fw-normal mb-1 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Register your account
                        </h5>

                        <div className="form-outline mb-3">
                          <Inputfield
                            claslabel="form-label"
                            label="Username"
                            type="text"
                            value={username}
                            classfield="form-control form-control-lg"
                            id="emailfield"
                            onChange={handleUsernameChange}
                            placeholdr="Enter your Username"
                          />
                        </div>

                        <div className="form-outline mb-3">
                          <Inputfield
                            claslabel="form-label"
                            label="Email"
                            type="email"
                            value={email}
                            classfield="form-control form-control-lg"
                            id="emailfield"
                            onChange={handleEmailChange}
                            placeholdr="Enter your Email"
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
                        <div className="form-outline mb-2">
                          <Inputfield
                            claslabel="form-label"
                            label="ConfirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            classfield="form-control form-control-lg"
                            id="Confirmpasswordfield"
                            placeholdr="Enter your Password again"
                          />
                        </div>

                        <div className="pt-1 mb-2">
                          <Button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={onClickRegister}
                          >
                            Register
                          </Button>
                        </div>

                        <p
                          className="container d-flex justify-content-center align-items-center"
                          style={{
                            color: "grey",
                            size: "2%",
                            fontWeight: "bolder",
                            textDecoration: "underline",
                          }}
                        >
                          OR REGISTER with{" "}
                        </p>
                        <div className="container d-flex justify-content-center align-items-center">
                          <span style={{ marginRight: "4%" }}>
                            <img
                              src={google}
                              width={60}
                              height={40}
                              className="logomain"
                            />
                          </span>
                          <span style={{ marginLeft: "0%" }}>
                            <img
                              src={linkedin}
                              width={70}
                              height={49}
                              className="logomain"
                            />
                          </span>
                        </div>
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


// class SignupForm extends Component {
//   state = {
//     username: "",
//     password: "",
//     confirmpassword: "",
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { username,email, password, confirmpassword } = this.state;

//     // NOTE USERNAME IS EMAIL HERE. FARIGH HO AP MUQADIM
//     this.props.onSubmit({ username,email, password, confirmpassword });
//   };

//   handleUsernameChange = (e) => {
//     this.setState({ username: e.target.value });
//   };

//   handleEmailChange = (e) => {
//     this.setState({ email: e.target.value });
//     console.log(this.state.username)
//   };

//   handlePasswordChange = (e) => {
//     this.setState({ password: e.target.value });
//   };
//   handleConfirmPasswordChange = (e) => {
//     this.setState({ confirmpassword: e.target.value });
//   };

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
//                       style={{
//                         borderRadius: "1rem 0 0 1rem",
//                         height: "97.5vh",
//                       }}
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
//                           className="fw-normal mb-1 pb-3"
//                           style={{ letterSpacing: "1px" }}
//                         >
//                           Register your account
//                         </h5>

//                         <div className="form-outline mb-3">
//                           <Inputfield
//                             claslabel="form-label"
//                             label="Username"
//                             type="text"
//                             value={this.state.username}
//                             classfield="form-control form-control-lg"
//                             id="emailfield"
//                             onChange={this.handleUsernameChange}
//                             placeholdr="Enter your Username"
//                           />
//                         </div>

//                         <div className="form-outline mb-3">
//                           <Inputfield
//                             claslabel="form-label"
//                             label="Email"
//                             type="email"
//                             value={this.state.email}
//                             classfield="form-control form-control-lg"
//                             id="emailfield"
//                             onChange={this.handleEmailChange}
//                             placeholdr="Enter your Email"
//                           />
//                         </div>

//                         <div className="form-outline mb-4">
//                           <Inputfield
//                             claslabel="form-label"
//                             label="Password"
//                             type="password"
//                             value={this.state.password}
//                             onChange={this.handlePasswordChange}
//                             classfield="form-control form-control-lg"
//                             id="passwordfield"
//                             placeholdr="Enter your Password"
//                           />
//                         </div>
//                         <div className="form-outline mb-2">
//                           <Inputfield
//                             claslabel="form-label"
//                             label="ConfirmPassword"
//                             type="password"
//                             value={this.state.confirmpassword}
//                             onChange={this.handleConfirmPasswordChange}
//                             classfield="form-control form-control-lg"
//                             id="Confirmpasswordfield"
//                             placeholdr="Enter your Password again"
//                           />
//                         </div>

//                         <div className="pt-1 mb-2">
//                           <Button
//                             className="btn btn-dark btn-lg btn-block"
//                             type="button"
//                             onClick={this.state.onClick}
//                           >
//                             Register
//                           </Button>
//                         </div>

//                         <p
//                           className="container d-flex justify-content-center align-items-center"
//                           style={{
//                             color: "grey",
//                             size: "2%",
//                             fontWeight: "bolder",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           OR REGISTER with{" "}
//                         </p>
//                         <div className="container d-flex justify-content-center align-items-center">
//                           <span style={{ marginRight: "4%" }}>
//                             <img
//                               src={google}
//                               width={60}
//                               height={40}
//                               className="logomain"
//                             />
//                           </span>
//                           <span style={{ marginLeft: "0%" }}>
//                             <img
//                               src={linkedin}
//                               width={70}
//                               height={49}
//                               className="logomain"
//                             />
//                           </span>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

export default SignupForm;
