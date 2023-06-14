import React, { useState, useEffect, useContext } from "react";
import Navbar from "./subcomponents/navbar";
import Footer from "./subcomponents/footer";
import logo from "./subcomponents/csssubcomponents/logoblack.png";
import attract from "./cssmaincomponents/attracttalent.svg";
import sleek from "./cssmaincomponents/minimaltracking.svg";
import efficient from "./cssmaincomponents/efficientassesment.svg";
import recruit from "./cssmaincomponents/recruit.jpg";
import "./cssmaincomponents/landingpage.css";
import Abdul from "./cssmaincomponents/AbdulMuqadim.jpg";
import ahsan from "./cssmaincomponents/AHSAN.jpg";
import mateen from "./cssmaincomponents/MATEEN.jpg";
import saad from "./cssmaincomponents/SAAD.jpg";
import sufi from "./cssmaincomponents/SUFI.jpg";


import UserContext from "../context/user";

// class Landingpage extends Component {
//   state = {
//     serviceIndex: 0,
//     services: [
//       "TECHNICAL RECRUITMENT",
//       "TECHNICAL SCREENING",
//       " REPORT GENERATION",
//       "INTERVIEW SCHEDULING",
//     ], // array of services to cycle through
//     serviceText: "", // text of the current service being typed
//     typing: true, // flag to track whether we are currently typing or erasing text
//     // above is code for typing erasing effect
//     animateServices: false, //code for apearing servoces anumation
//   };

//   componentDidMount() {
//     //below is all code for animations
//     //bewlow is for typig animations
//     // set an interval to update the service text every 3 seconds
//     this.intervalId = setInterval(() => {
//       this.setState((prevState) => ({
//         serviceIndex: (prevState.serviceIndex + 1) % prevState.services.length,
//         serviceText: "",
//         typing: true,
//       }));

//       // delay the start of the typing animation by 500ms
//       setTimeout(() => {
//         this.typeText();
//       }, 500);
//     }, 7000); //important
//     //bewlow is for services animations
//   }

//   componentWillUnmount() {
//     // clear the interval when the component is unmounted
//     clearInterval(this.intervalId);
//   }

//   typeText() {
//     // add the next character to the service text
//     this.setState((prevState) => ({
//       serviceText: prevState.services[prevState.serviceIndex].slice(
//         0,
//         prevState.serviceText.length + 1
//       ),
//     }));

//     // if there are more characters to type, schedule the next character addition
//     if (
//       this.state.serviceText.length <
//       this.state.services[this.state.serviceIndex].length
//     ) {
//       setTimeout(() => {
//         this.typeText();
//       }, 180); //important
//     } else {
//       // if we have typed all the characters, start the erasing animation after 1.5 seconds
//       setTimeout(() => {
//         this.eraseText();
//       }, 2000);
//     }
//   }

//   eraseText() {
//     // remove the last character from the service text
//     this.setState((prevState) => ({
//       serviceText: prevState.serviceText.slice(
//         0,
//         prevState.serviceText.length - 1
//       ),
//     }));

//     // if there are more characters to erase, schedule the next character deletion
//     if (this.state.serviceText.length > 0) {
//       setTimeout(() => {
//         this.eraseText();
//       }, 100);
//     } else {
//       // if we have erased all the characters, set the typing flag to false to indicate that we are done
//       this.setState({
//         typing: false,
//       });
//     }
//   }
//   handleclick = (option) => {
//     let element = null;
//     console.log(option);
//     switch (option) {
//       case "home":
//         element = document.getElementsByClassName("home")[0];
//         break;
//       case "services":
//         element = document.getElementsByClassName("ourcleints")[0];
//         break;
//       case "aboutus":
//         element = document.getElementsByClassName("aboutus")[0];
//         break;
//       case "pricing":
//         element = document.getElementsByClassName("pricing")[0];
//         break;
//       default:
//         break;
//     }

//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop,
//         behavior: "smooth",
//       });
//     }
//   };
//   render() {
//     return (
//       <div className="landingpage">
//         {/* <Footer></Footer> */}
//         <Navbar onnavclick={this.handleclick} className="navbar"></Navbar>

//         <div className="image">
//           <img src={logo} width={370} height={120} className="logomain" />
//           <p className=" statement">
//             WE WILL AUTOMATE{" "}
//             <span className="services">{this.state.serviceText}</span>
//             {this.state.typing ? "|" : ""} FOR YOU
//           </p>

//           <p className="description">
//             Looking for a smarter, more efficient way to handle your hiring
//             process? Our Applicant Tracking System (ATS) can help. With powerful
//             features like resume parsing, automated screening, and easy
//             collaboration, our ATS makes it easier than ever to find the right
//             candidates for your organization. Plus, with customizable workflows
//             and integrations with popular job boards and HR tools, our ATS can
//             be tailored to meet the specific needs of your team. Say goodbye to
//             the hassle of manual candidate tracking and say hello to a better
//             way to hire with our ATS.
//           </p>
//         </div>

//         <div className="desc">
//           <img src={recruit} width={570} height={500} className="recruit" />
//         </div>

//         <div className="ourcleints">
//           <div className="maindifferent">
//             <p className="keyfeatures">Key Features</p>
//             <h1 className="different">What makes Tech-Up different?</h1>
//             <p className="deffdesc1">
//               TalentHall effectively streamlines end-to-end recruitment
//               lifecycle and empowers businesses manage all the stages of
//             </p>
//             <p className="deffdesc2">
//               recruitment journey including sourcing, screening, selection, and
//               onboarding.
//             </p>
//           </div>

//           <div className="uuniqueservices">
//             <div className="service">
//               <img
//                 src={attract}
//                 width={70}
//                 height={70}
//                 className="iconuniq content"
//               />
//               <p className="headinguniq content">Attract talent</p>
//               <p className="descuniq content">
//                 Our ATS features an "attract talent" module to help clients
//                 showcase their brand, create job postings, share them on social
//                 media, and engage with candidates. With a user-friendly
//                 interface and advanced analytics, our ATS streamlines the
//                 recruitment process and helps attract top talent.
//               </p>
//             </div>
//             <div className="service">
//               <img src={sleek} width={70} height={70} className="iconuniq" />
//               <p className="headinguniq">Sleek minimal tracking </p>
//               <p className="descuniq">
//                 Our ATS features a sleek and minimal design that allows users to
//                 navigate with ease and access key features quickly. Our tracking
//                 module offers robust capabilities to manage job postings,
//                 resumes, and candidate communication, while providing a simple
//                 and intuitive user experience.
//               </p>
//             </div>
//             <div className="service">
//               <img
//                 src={efficient}
//                 width={70}
//                 height={70}
//                 className="iconuniq content"
//               />
//               <p className="headinguniq content">Efficient assessment tool</p>
//               <p className="descuniq">
//                 Our ATS offers an efficient assessment tool to evaluate
//                 candidates based on customizable criteria, including skills,
//                 experience, and qualifications. Our intuitive interface
//                 streamlines the assessment process and allows for easy
//                 collaboration among hiring teams.
//               </p>
//             </div>
//             <div className="service">
//               <img
//                 src="https://cdn.vuram.com/3b238589f2a8a016fd89fcd7ba978f06.svg"
//                 width={70}
//                 height={70}
//                 className="iconuniq content"
//               />
//               <p className="headinguniq">
//                 360-degree view into candidate sourcing
//               </p>
//               <p className="descuniq">
//                 Our ATS provides a 360-degree view into candidate sourcing,
//                 allowing recruiters to track the source of each candidate and
//                 the effectiveness of each channel. Advanced analytics provide
//                 insights into which sourcing methods are yielding the best
//                 candidates, while tracking features allow recruiters to optimize
//                 their sourcing strategy.
//               </p>
//             </div>
//             <div className="service">
//               <img
//                 src="https://cdn.vuram.com/e3a583d2e4c0b70c8f83456c4ddccd26.svg"
//                 width={70}
//                 height={70}
//                 className="iconuniq"
//               />
//               <p className="headinguniq">Personalized dashboards</p>
//               <p className="descuniq">
//                 Our ATS offers personalized dashboards for each user, allowing
//                 them to customize their view and access the features most
//                 important to them. The dashboards provide real-time updates on
//                 candidate activity, task management, and other key metrics,
//                 enabling users to streamline their workflow and optimize their
//                 productivity.
//               </p>
//             </div>
//             <div className="service">
//               <img
//                 src="https://cdn.vuram.com/270510ea69092e90212db6a8e8bcab54.svg"
//                 width={70}
//                 height={70}
//                 className="iconuniq"
//               />
//               <p className="headinguniq">Efficiently track referrals</p>
//               <p className="descuniq">
//                 Our ATS allows clients to efficiently track referrals by
//                 capturing data on the source of each candidate and providing
//                 analytics to measure the success of referral programs. Our
//                 tracking features allow clients to optimize their referral
//                 programs and streamline the hiring process for referred
//                 candidates.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="aboutus">
//           <h1 className="keyfeatures">
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABOUT US
//           </h1>
//           <div className="team">
//             <div className="member abdul">
//               <img src={ahsan} width={200} height={200} className="imageteam" />
//               <p className="headingteam">&nbsp;&nbsp;&nbsp;Ahsan Rehman</p>
//               <p className="descteam">&nbsp;&nbsp;Back End developer</p>
//             </div>
//             <div className="member abdul">
//               <img src={Abdul} width={200} height={200} className="imageteam" />
//               <p className="headingteam">&nbsp;Abdul-Muqadim</p>
//               <p className="descteam">&nbsp;Front End developer</p>
//             </div>
//             <div className="member abdul">
//               <img
//                 src={mateen}
//                 width={200}
//                 height={200}
//                 className="imageteam"
//               />
//               <p className="headingteam">
//                 &nbsp;&nbsp;&nbsp;&nbsp;Mateen Ahmad
//               </p>
//               <p className="descteam">&nbsp;&nbsp;&nbsp;Back End developer</p>
//             </div>
//             <div className="member abdul">
//               <img src={saad} width={200} height={200} className="imageteam" />
//               <p className="headingteam">
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saad Karim
//               </p>
//               <p className="descteam">&nbsp;Prototyping Engineer</p>
//             </div>
//             <div className="member abdul">
//               <img src={sufi} width={200} height={200} className="imageteam" />
//               <p className="headingteam">
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sufiaan Saeed
//               </p>
//               <p className="descteam">&nbsp;Prototyping Engineer</p>
//             </div>
//           </div>
//         </div>

//         <div className="pricing">
//           <p className="keyfeatures">Pricing Packages</p>
//           <h1 className="different">
//             &nbsp;TechUp offers very reasonable prices{" "}
//           </h1>
//           <br />
//           <div className="container">
//             <div className="row">
//               <div className="col-md-4 col-sm-6">
//                 <div className="pricingTable">
//                   <h3 className="title">STANDARD</h3>
//                   <div className="price-value">
//                     <span className="currency">$</span>
//                     <span className="amount">10.00</span>
//                     <span className="month">/month</span>
//                   </div>
//                   <ul className="pricing-content">
//                     <li>
//                       <b>50GB</b> Disk Space
//                     </li>
//                     <li>
//                       <b>50</b> Email Accounts
//                     </li>
//                     <li>
//                       <b>50GB</b> Bandwidth
//                     </li>
//                     <li>
//                       <b>10</b> Subdomains
//                     </li>
//                     <li>
//                       <b>15</b> Domains
//                     </li>
//                   </ul>
//                   <a href="#" className="pricingTable-signup">
//                     Order Now
//                   </a>
//                 </div>
//               </div>
//               <div className="col-md-4 col-sm-6">
//                 <div className="pricingTable pink">
//                   <h3 className="title">BUSINESS</h3>
//                   <div className="price-value">
//                     <span className="currency">$</span>
//                     <span className="amount">20.00</span>
//                     <span className="month">/month</span>
//                   </div>
//                   <ul className="pricing-content">
//                     <li>
//                       <b>60GB</b> Disk Space
//                     </li>
//                     <li>
//                       <b>60</b> Email Accounts
//                     </li>
//                     <li>
//                       <b>60GB</b> Bandwidth
//                     </li>
//                     <li>
//                       <b>15</b> Subdomains
//                     </li>
//                     <li>
//                       <b>20</b> Domains
//                     </li>
//                   </ul>
//                   <a href="#" className="pricingTable-signup">
//                     Order Now
//                   </a>
//                 </div>
//               </div>
//               <div className="col-md-4 col-sm-6">
//                 <div className="pricingTable blue">
//                   <h3 className="title">PREMIUM</h3>
//                   <div className="price-value">
//                     <span className="currency">$</span>
//                     <span className="amount">30.00</span>
//                     <span className="month">/month</span>
//                   </div>
//                   <ul className="pricing-content">
//                     <li>
//                       <b>70GB</b> Disk Space
//                     </li>
//                     <li>
//                       <b>70</b> Email Accounts
//                     </li>
//                     <li>
//                       <b>70GB</b> Bandwidth
//                     </li>
//                     <li>
//                       <b>20</b> Subdomains
//                     </li>
//                     <li>
//                       <b>25</b> Domains
//                     </li>
//                   </ul>
//                   <a href="#" className="pricingTable-signup">
//                     Order Now
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* <div className="footer">
//           <h1 className="heading">Footer</h1>
//         </div> */}
//       </div>
//     );
//   }
// }


const Landingpage = () => {
  const [state, setState] = useState({
    serviceIndex: 0,
    services: [
      "TECHNICAL RECRUITMENT",
      "TECHNICAL SCREENING",
      " REPORT GENERATION",
      "INTERVIEW SCHEDULING",
    ],
    serviceText: "",
    typing: true,
    animateServices: false,
  });

  const { isLoggedIn, loginStatus, userInfo } =
    useContext(UserContext);

  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => {
      setState((prevState) => ({
        ...prevState,
        serviceIndex: (prevState.serviceIndex + 1) % prevState.services.length,
        serviceText: "",
        typing: true,
      }));

      setTimeout(() => {
        typeText();
      }, 500);
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (loginStatus() && userInfo.companyId) {
      
    }
    else {
    }
  }, [isLoggedIn, userInfo.companyId])

  const typeText = () => {
    setState((prevState) => ({
      ...prevState,
      serviceText: prevState.services[prevState.serviceIndex].slice(
        0,
        prevState.serviceText.length + 1
      ),
    }));

    if (
      state.serviceText.length <
      state.services[state.serviceIndex].length
    ) {
      setTimeout(() => {
        typeText();
      }, 180);
    } else {
      setTimeout(() => {
        eraseText();
      }, 2000);
    }
  };

  const eraseText = () => {
    setState((prevState) => ({
      ...prevState,
      serviceText: prevState.serviceText.slice(
        0,
        prevState.serviceText.length - 1
      ),
    }));

    if (state.serviceText.length > 0) {
      setTimeout(() => {
        eraseText();
      }, 100);
    } else {
      setState((prevState) => ({ ...prevState, typing: false }));
    }
  };

  const handleClick = (option) => {
    let element = null;
    switch (option) {
      case "home":
        element = document.getElementsByClassName("home")[0];
        break;
      case "services":
        element = document.getElementsByClassName("ourcleints")[0];
        break;
      case "aboutus":
        element = document.getElementsByClassName("aboutus")[0];
        break;
      case "pricing":
        element = document.getElementsByClassName("pricing")[0];
        break;
      default:
        break;
    }

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="landingpage">
        {/* <Footer></Footer> */}
        <Navbar onnavclick={handleClick} className="navbar" loginStatus={isLoggedIn}></Navbar>

        <div className="image">
          <img src={logo} width={370} height={120} className="logomain" />
          <p className=" statement">
            WE WILL AUTOMATE{" "}
            <span className="services">{state.serviceText}</span>
            {state.typing ? "|" : ""} FOR YOU
          </p>

          <p className="description">
            Looking for a smarter, more efficient way to handle your hiring
            process? Our Applicant Tracking System (ATS) can help. With powerful
            features like resume parsing, automated screening, and easy
            collaboration, our ATS makes it easier than ever to find the right
            candidates for your organization. Plus, with customizable workflows
            and integrations with popular job boards and HR tools, our ATS can
            be tailored to meet the specific needs of your team. Say goodbye to
            the hassle of manual candidate tracking and say hello to a better
            way to hire with our ATS.
          </p>
        </div>

        <div className="desc">
          <img src={recruit} width={570} height={500} className="recruit" />
        </div>

        <div className="ourcleints">
          <div className="maindifferent">
            <p className="keyfeatures">Key Features</p>
            <h1 className="different">What makes Tech-Up different?</h1>
            <p className="deffdesc1">
              TalentHall effectively streamlines end-to-end recruitment
              lifecycle and empowers businesses manage all the stages of
            </p>
            <p className="deffdesc2">
              recruitment journey including sourcing, screening, selection, and
              onboarding.
            </p>
          </div>

          <div className="uuniqueservices">
            <div className="service">
              <img
                src={attract}
                width={70}
                height={70}
                className="iconuniq content"
              />
              <p className="headinguniq content">Attract talent</p>
              <p className="descuniq content">
                Our ATS features an "attract talent" module to help clients
                showcase their brand, create job postings, share them on social
                media, and engage with candidates. With a user-friendly
                interface and advanced analytics, our ATS streamlines the
                recruitment process and helps attract top talent.
              </p>
            </div>
            <div className="service">
              <img src={sleek} width={70} height={70} className="iconuniq" />
              <p className="headinguniq">Sleek minimal tracking </p>
              <p className="descuniq">
                Our ATS features a sleek and minimal design that allows users to
                navigate with ease and access key features quickly. Our tracking
                module offers robust capabilities to manage job postings,
                resumes, and candidate communication, while providing a simple
                and intuitive user experience.
              </p>
            </div>
            <div className="service">
              <img
                src={efficient}
                width={70}
                height={70}
                className="iconuniq content"
              />
              <p className="headinguniq content">Efficient assessment tool</p>
              <p className="descuniq">
                Our ATS offers an efficient assessment tool to evaluate
                candidates based on customizable criteria, including skills,
                experience, and qualifications. Our intuitive interface
                streamlines the assessment process and allows for easy
                collaboration among hiring teams.
              </p>
            </div>
            <div className="service">
              <img
                src="https://cdn.vuram.com/3b238589f2a8a016fd89fcd7ba978f06.svg"
                width={70}
                height={70}
                className="iconuniq content"
              />
              <p className="headinguniq">
                360-degree view into candidate sourcing
              </p>
              <p className="descuniq">
                Our ATS provides a 360-degree view into candidate sourcing,
                allowing recruiters to track the source of each candidate and
                the effectiveness of each channel. Advanced analytics provide
                insights into which sourcing methods are yielding the best
                candidates, while tracking features allow recruiters to optimize
                their sourcing strategy.
              </p>
            </div>
            <div className="service">
              <img
                src="https://cdn.vuram.com/e3a583d2e4c0b70c8f83456c4ddccd26.svg"
                width={70}
                height={70}
                className="iconuniq"
              />
              <p className="headinguniq">Personalized dashboards</p>
              <p className="descuniq">
                Our ATS offers personalized dashboards for each user, allowing
                them to customize their view and access the features most
                important to them. The dashboards provide real-time updates on
                candidate activity, task management, and other key metrics,
                enabling users to streamline their workflow and optimize their
                productivity.
              </p>
            </div>
            <div className="service">
              <img
                src="https://cdn.vuram.com/270510ea69092e90212db6a8e8bcab54.svg"
                width={70}
                height={70}
                className="iconuniq"
              />
              <p className="headinguniq">Efficiently track referrals</p>
              <p className="descuniq">
                Our ATS allows clients to efficiently track referrals by
                capturing data on the source of each candidate and providing
                analytics to measure the success of referral programs. Our
                tracking features allow clients to optimize their referral
                programs and streamline the hiring process for referred
                candidates.
              </p>
            </div>
          </div>
        </div>

        <div className="aboutus">
          <h1 className="keyfeatures">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABOUT US
          </h1>
          <div className="team">
            <div className="member abdul">
              <img src={ahsan} width={200} height={200} className="imageteam" />
              <p className="headingteam">&nbsp;&nbsp;&nbsp;Ahsan Rehman</p>
              <p className="descteam">&nbsp;&nbsp;Back End developer</p>
            </div>
            <div className="member abdul">
              <img src={Abdul} width={200} height={200} className="imageteam" />
              <p className="headingteam">&nbsp;Abdul-Muqadim</p>
              <p className="descteam">&nbsp;Front End developer</p>
            </div>
            <div className="member abdul">
              <img
                src={mateen}
                width={200}
                height={200}
                className="imageteam"
              />
              <p className="headingteam">
                &nbsp;&nbsp;&nbsp;&nbsp;Mateen Ahmad
              </p>
              <p className="descteam">&nbsp;&nbsp;&nbsp;Full stack developer</p>
            </div>
            <div className="member abdul">
              <img src={saad} width={200} height={200} className="imageteam" />
              <p className="headingteam">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saad Karim
              </p>
              <p className="descteam">&nbsp;Prototyping Engineer</p>
            </div>
            <div className="member abdul">
              <img src={sufi} width={200} height={200} className="imageteam" />
              <p className="headingteam">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sufiaan Saeed
              </p>
              <p className="descteam">&nbsp;Prototyping Engineer</p>
            </div>
          </div>
        </div>

        <div className="pricing">
          <p className="keyfeatures">Pricing Packages</p>
          <h1 className="different">
            &nbsp;TechUp offers very reasonable prices{" "}
          </h1>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="pricingTable">
                  <h3 className="title">STANDARD</h3>
                  <div className="price-value">
                    <span className="currency">$</span>
                    <span className="amount">10.00</span>
                    <span className="month">/month</span>
                  </div>
                  <ul className="pricing-content">
                    <li>
                      <b>50GB</b> Disk Space
                    </li>
                    <li>
                      <b>50</b> Email Accounts
                    </li>
                    <li>
                      <b>50GB</b> Bandwidth
                    </li>
                    <li>
                      <b>10</b> Subdomains
                    </li>
                    <li>
                      <b>15</b> Domains
                    </li>
                  </ul>
                  <a href="#" className="pricingTable-signup">
                    Order Now
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="pricingTable pink">
                  <h3 className="title">BUSINESS</h3>
                  <div className="price-value">
                    <span className="currency">$</span>
                    <span className="amount">20.00</span>
                    <span className="month">/month</span>
                  </div>
                  <ul className="pricing-content">
                    <li>
                      <b>60GB</b> Disk Space
                    </li>
                    <li>
                      <b>60</b> Email Accounts
                    </li>
                    <li>
                      <b>60GB</b> Bandwidth
                    </li>
                    <li>
                      <b>15</b> Subdomains
                    </li>
                    <li>
                      <b>20</b> Domains
                    </li>
                  </ul>
                  <a href="#" className="pricingTable-signup">
                    Order Now
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="pricingTable blue">
                  <h3 className="title">PREMIUM</h3>
                  <div className="price-value">
                    <span className="currency">$</span>
                    <span className="amount">30.00</span>
                    <span className="month">/month</span>
                  </div>
                  <ul className="pricing-content">
                    <li>
                      <b>70GB</b> Disk Space
                    </li>
                    <li>
                      <b>70</b> Email Accounts
                    </li>
                    <li>
                      <b>70GB</b> Bandwidth
                    </li>
                    <li>
                      <b>20</b> Subdomains
                    </li>
                    <li>
                      <b>25</b> Domains
                    </li>
                  </ul>
                  <a href="#" className="pricingTable-signup">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="footer">
          <h1 className="heading">Footer</h1>
        </div> */}
      </div>
  )
}


export default Landingpage;