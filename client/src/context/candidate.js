import { createContext, useState } from "react";

const CandidateContext = createContext();

function Provider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [candidateId, setCandidateId] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidateJobs, setCandidateJobs] = useState([]);
  const [candidateName, setCandidateName] = useState("");

  const verifyToken = async (token) => {
    try {
      const res = await fetch(
        "http://127.0.0.1:5000/api/verify-token-candidate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token, // Include the token in the Authorization header
          },
        }
      );
      const r = await res.json();

      return r;
    } catch (e) {
      return { valid: false };
    }
  };

  const getCandidateInformation = async (candidateId) => {
    setIsLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:5000/api/get-candidate-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: candidateId,
        }),
      });
      const data = await res.json();

      setCandidateId(data._id);
      setCandidateEmail(data.email);
      setCandidateName(data.name);
      setCandidateJobs(data.jobs);
    } catch (e) {
      setIsLoggedIn(false);
      localStorage.removeItem("token");
      setCandidateId("");
    }

    setIsLoading(false);
  };

  const loginStatus = async () => {
    setIsLoading(true);

    if (isLoggedIn) {
      setIsLoading(false);
      return true;
    }

    const token = localStorage.getItem("token");

    if (token) {
      const res = await verifyToken(token);

      if (res.valid) {
        setCandidateId(res.payload.candidateId);
        setIsLoggedIn(true);
        setIsLoading(false);

        getCandidateInformation(res.payload.candidateId);
        return true;
      } else {
        localStorage.removeItem("token");
      }
    }

    setIsLoading(false);
    return false;
  };

  const signOutCandidate = () => {
    localStorage.removeItem("token");
    setIsLoading(true);
    setIsLoggedIn(false);
    setCandidateId("");
    setCandidateEmail("");
    setCandidateJobs([]);
    setCandidateName("");
    setIsLoading(false);
  };

  const candidateInfo = {
    candidateEmail,
    candidateId,
    candidateJobs,
    candidateName,
  };

  const valueToShare = {
    isLoading,
    isLoggedIn,
    loginStatus,
    candidateInfo,
    signOutCandidate,
  };

  return (
    <CandidateContext.Provider value={valueToShare}>
      {children}
    </CandidateContext.Provider>
  );
}

export { Provider };
export default CandidateContext;
