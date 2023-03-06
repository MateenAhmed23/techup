import React, { useState } from "react";
import "./cssmaincomponents/login.css";
// import Footer from "./subcomponents/footer";
import Navbar from "./subcomponents/navbar";
import LoginForm from "./subcomponents/loginform";


// ERROR:


// BACKEND NEEDS EMAIL, FRONTEND IS PROVIDING USERNAME

// class Login extends Component {
//   state = {};
//   handleLogin = (username, password) => {
//     //Please enter login logic here @Mateen @Ahsan


//     // const response = await fetch("http://localhost:5000/api/login", {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify({
//     //       username,
//     //       password,
//     //     }),
//     //   });

//     //   const data = await response.json();
//     //   if (data.status === "error"){
//     //     setError(true);
//     //     setErrorMsg(data.message);
//     //     setTimeout(() => {
//     //       setErrorMsg("");
//     //       setError(false);
//     //     }, 5000);
//     //     return;
//     //   }else{
//     //     localStorage.setItem("token", data.token);
//     //     // Redirect to the homepage
//     //     // history.push("/");
//     //   }
//     console.log(username,password);
//   };

//   render() {
//     return (
//       <div className="loginpage">
//         <Navbar onnavclick={this.handleclick} className="navbar"></Navbar>

//         <div className="LogForm">
//           <LoginForm onSubmit={this.state.handleLogin} />
//         </div>
//         <div className="footer">
//           <h1 className="heading">Footer</h1>
//         </div>
//       </div>
//     );
//   }
// }



function Login(){

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(email, password){
      console.log(email)

      const response = await fetch("http://127.0.0.1:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      if (data.status === "error"){
        // setError(true);
        alert(data.message);
        // setTimeout(() => {
        //   setErrorMsg("");
        //   setError(false);
        // }, 5000);
        return;
      }else{
        console.log('USER LOGINNED SUCCESSFULLY')
        localStorage.setItem("token", data.token);
        // history.push("/");
      }
  }

  function handleclick(){

  }


  return (
    <div className="loginpage">
        <Navbar onnavclick={handleclick} className="navbar"></Navbar>

        <div className="LogForm">
          <LoginForm onSubmit={handleLogin} />
        </div>
        <div className="footer">
          <h1 className="heading">Footer</h1>
        </div>
      </div>
  )

}

export default Login;
