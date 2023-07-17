import React, { useState, useContext, useEffect } from "react";
import Navbar from "./subcomponents/navbar";
import Inputfield from "./subcomponents/inputfield";
import "./cssmaincomponents/companydetails.css";
import { useLocation } from 'react-router-dom';
import CandidateContext from "../context/candidate";
import { useNavigate } from "react-router-dom";
import Footer from "./subcomponents/footer";
import SkillsTag from "./subcomponents/skills";
import BioInputfield from "./subcomponents/bioInput";

function CandidateDetails() {
    const [bio, setBio] = useState("");
    const [experience, setExperience] = useState("");
    const [city, setCity] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    const [skills, setSkills] = useState([]);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const isLoggedIn = true;
    const { isLoading, loginStatus, candidateInfo } = useContext(CandidateContext);

    useEffect(() => {
        if (!location.state) {
            navigate('/candidate-signup');
        } else {
            setName(location.state.name);
            setEmail(location.state.email);
            setPassword(location.state.password);
        }
    }, []);

    async function handleRegister() {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        // Append other candidate information
        formData.append('bio', bio);
        formData.append('experience', experience);
        formData.append('city', city);
        formData.append('phoneNumber', phoneNumber);
        formData.append('skills', skills);
        // Append the CV file
        formData.append('cv', cvFile);

        const response = await fetch("http://127.0.0.1:5000/api/candidate_signup", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        console.log(data);

        if (data.status === 500) {
            alert('Could not create account');
            return;
        } else {
            localStorage.setItem('token', data.token);
            navigate('/candidate-dashboard');
        }
    }

    useEffect(() => {
        console.log(skills);
    }, [skills]);


    const [cvFile, setCVFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setCVFile(file);
    };

    return (
        <div className="alldetails">
            {!isLoggedIn ? (
                <>
                    <h1>You cannot access this page without logging in</h1>
                    <button onClick={() => navigate('/')}>Go to Home Page</button>
                </>
            ) : (
                <>
                    <Navbar className="navbar" />
                    <h1 className="maninhead">Candidate Details</h1>

                    <div className="col1">
                        <div className="form-outline mb-4">
                            <Inputfield
                                claslabel="form-label"
                                label="Experience"
                                type="number"
                                value={experience}
                                classfield="form-control form-control-lg"
                                onChange={(e) => setExperience(e.target.value)}
                                placeholdr="Years of experience"
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <BioInputfield
                                claslabel="form-label"
                                label="Bio"
                                type="text"
                                value={bio}
                                rows={2}
                                classfield="form-control form-control-lg"
                                onChange={(e) => setBio(e.target.value)}
                                placeholdr="Write a short paragraph about yourself"
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <Inputfield
                                claslabel="form-label"
                                label="City"
                                type="text"
                                value={city}
                                classfield="form-control form-control-lg"
                                onChange={(e) => setCity(e.target.value)}
                                placeholdr="Enter your location"
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <Inputfield
                                claslabel="form-label"
                                label="Phone Number"
                                type="tel"
                                value={phoneNumber}
                                classfield="form-control form-control-lg"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholdr="Enter your phone number"
                            />
                        </div>

                        <SkillsTag setParentTags={setSkills} label={"Skills"} />
                        <br />
                        <div>
                            <label className={"form-label"}>Upload your CV</label>
                            <br />
                            <input type="file" accept=".pdf" onChange={handleFileChange} />
                        </div>
                    </div>

                    <div className="buttondet">
                        <a
                            onClick={() => this.props.onnavclick("contractus")}
                            className="back1154"
                            href="#"
                        >
                            &nbsp; &nbsp;Back  &nbsp; &nbsp;
                        </a>
                        <button className="register" onClick={() => handleRegister()}>
                            Register
                        </button>
                    </div>
                </>
            )
            }
            <div className="footercompdetailspg">
                <Footer />
            </div>
        </div >
    );
}

export default CandidateDetails;
