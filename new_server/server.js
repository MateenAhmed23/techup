require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const Company = require("./models/company");
const Client = require("./models/client");
const Job = require("./models/job");
const cors = require("cors");
const Question = require("./models/question");
const Assessment = require("./models/assessment");
const Candidate = require("./models/candidate");
const Slot = require("./models/slot");
const Application = require("./models/application");
const Screening = require("./models/screening");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB database
mongoose.connect(process.env.MONGO_URI);

// app.post("/api/add_slot", async (req, res) => {
//   console.log(req.body);
//   try {
//     // const newSlot = await Slot.create(req.body);
//     // res.status(201).json(newSlot);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });
function generateToken(client) {
  const payload = {
    clientId: client._id,
    email: client.email,
  };
  const options = {
    expiresIn: "5h",
  };

  return jwt.sign(payload, process.env.JWT_SECRET_CLIENT, options);
}

function generateCandidateToken(candidate) {
  const payload = {
    candidateId: candidate._id,
    candidateEmail: candidate.email,
  };
  const options = {
    expiresIn: "5h",
  };

  return jwt.sign(payload, process.env.JWT_SECRET_CANDIDATE, options);
}

app.post("/api/get_slots", async (req, res) => {
  try {
    const { clientId } = req.body;
    const slots = await Slot.find({ clientId });

    res.json(slots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// {
// question, type, mandatory, jobId
// }
// {
//   201 success, question object
// }
app.post("/api/screening", async (req, res) => {
  try {
    const { jobId, questions } = req.body;

    // Check if jobId exists in the table
    const existingScreening = await Screening.findOne({ jobId });

    if (existingScreening) {
      // Job exists, replace the array with the new questions

      existingScreening.questions = questions;

      // Save the updated screening data
      const updatedScreening = await existingScreening.save();
      res.status(200).json(updatedScreening);
    } else {
      // Job doesn't exist, create a new screening entry
      const newScreening = new Screening({
        jobId,
        questions,
      });

      // Save the new screening data
      const savedScreening = await newScreening.save();
      res.status(200).json(savedScreening);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// {
//   jobId
// }
// {
//   status 200, questions ki array
// }
app.post("/api/get_screening", async (req, res) => {
  try {
    const { jobId } = req.body;

    // Find the screening data for the jobId
    const screening = await Screening.findOne({ jobId });

    if (screening) {
      // Screening data found, return the questions array
      res.status(200).json(screening.questions);
    } else {
      // Screening data not found for the jobId
      res.status(404).json({ message: "Screening data not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/add_slots", async (req, res) => {
  try {
    const slotsData = req.body;

    const slots = slotsData.map((slotData) => new Slot(slotData));
    await Slot.insertMany(slots);

    res.status(200).send({ message: "Slots added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "An error occurred while adding slots" });
  }
});

// {
//   companyName,
//   companyAddress,
//   companyWebsite,
//   companyPhoneNumber,
//   email,
//   password,
// }
// {
//   status 200
//   clientId
//   companyId
//   token
// }

app.post("/api/company_signup", async (req, res) => {
  try {
    const {
      companyName,
      companyAddress,
      companyWebsite,
      companyPhoneNumber,
      email,
      password,
    } = req.body;

    // console.log(
    //   companyName,
    //   companyAddress,
    //   companyWebsite,
    //   companyPhoneNumber,
    //   email,
    //   password
    // );

    // Check if company name is already registered
    const companyExists = await Company.findOne({ name: companyName });

    // console.log(companyExists);
    if (companyExists) {
      // console.log("Inside company exists");
      return res
        .status(400)
        .json({ message: "Company website already exists" });
    }

    // Check if client email is already registered
    const clientExists = await Client.findOne({ email });

    // console.log(clientExists);
    if (clientExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Create a new company
    const company = await Company.create({
      name: companyName,
      address: companyAddress,
      website: companyWebsite,
      phoneNumber: companyPhoneNumber,
    });

    // Create a new client (super user)
    const hashedPassword = await bcrypt.hash(password, 10);

    const client = await Client.create({
      name: companyName,
      email: email,
      password: hashedPassword,
      role: "superuser",
      company: company._id,
    });

    // Create and sign JWT
    const token = generateToken(client);

    // Set JWT as a cookie
    res.cookie("token", token); // 1 hour
    res
      .status(201)
      .json({ clientId: client._id, companyId: company._id, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/candidate_signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const candidateExists = await Candidate.findOne({ email });

    if (candidateExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const candidate = await Candidate.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = generateCandidateToken(candidate);

    res.cookie("token", token); // 1 hour
    res.status(201).json({ candidateId: candidate._id, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// {
//   clientId
// }
// {
//   200: removed
//   404: not found
// }
app.post("/api/remove_client", async (req, res) => {
  const { clientId } = req.body;

  try {
    const client = await Client.findById(clientId);

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    await Client.findByIdAndDelete(clientId);

    return res.status(200).json({ message: "Client deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

// {
//   email,
//   password
// }
// {
//   res={
//     status 201
//     id: client
//     token
//     message: "Logged in successfully"
//   }
//   cookie token
//   send companyID
// }
app.post("/api/get_company", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    const company = await Company.findById(id);

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    return res.json(company);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

app.post("/api/candidate-login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find candidate by email
    const candidate = await Candidate.findOne({ email });
    if (!candidate) {
      return res.status(400).json({ message: "Invalid email" });
    }

    // Compare password with stored hash
    const validPassword = await bcrypt.compare(password, candidate.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Create and sign JWT
    const token = generateCandidateToken(candidate);

    res.cookie("token", token, { httpOnly: true }); // 1 hour

    res.status(201).json({
      message: "Logged in successfully",
      candidateId: candidate._id,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find client by email
    const client = await Client.findOne({ email });
    if (!client) {
      return res.status(400).json({ message: "Invalid email" });
    }

    // Compare password with stored hash
    const validPassword = await bcrypt.compare(password, client.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Create and sign JWT
    const token = generateToken(client);

    // Set JWT as a cookie
    res.cookie("token", token, { httpOnly: true }); // 1 hour

    res.status(201).json({
      message: "Logged in successfully",
      clientId: client._id,
      token,
      companyId: client.company,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// {
//   headers.authorization -> token
// }
// {
//   status 201
//   valid: true
//   payload -> {clientId: client._id,
//     email: client.email,
// }
// }
app.post("/api/verify-token-client", (req, res) => {
  const token = req.headers.authorization;
  console.log("verifying");
  // Verify the token and return a response
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET_CLIENT);
    res.status(201).json({ valid: true, payload });
  } catch (err) {
    res.status(401).json({ valid: false, error: "Invalid token" });
  }
});

app.post("/api/verify-token-candidate", (req, res) => {
  const token = req.headers.authorization;
  console.log("verifying");
  // Verify the token and return a response
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET_CANDIDATE);
    res.status(201).json({ valid: true, payload });
  } catch (err) {
    res.status(401).json({ valid: false, error: "Invalid token" });
  }
});

// {
//   title,
// department,
// type,
// stack,
// location,
// description
// description,
// yearsOfExperience,
// companyId,
// }

// {
//   status 201
//   { jobId: job._id }
// }
app.post("/api/create_job", async (req, res) => {
  // console.log(req.body);
  try {
    const {
      title,
      department,
      type,
      stack,
      location,
      perks,
      description,
      yearsOfExperience,
      companyId,
    } = req.body;

    // Check if the company exists
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(400).json({ message: "Invalid company ID" });
    }

    // Create a new job
    const job = await Job.create({
      title,
      department,
      type,
      stack,
      location,
      perks,
      description,
      yearsOfExperience,
      status: "deactive",
      company: companyId,
    });

    res.status(201).json({ jobId: job._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// {
//   jobid -> params;
// }
// {
//  complete job details
// }
app.get("/api/get_job/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).exec();

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// {
//   companyId;
// clientId;
// }
// {
//   status_code: 200;
//   type, status, _id;
// }
app.post("/api/get_all_jobs", async (req, res) => {
  // console.log('Inside')
  // console.log(req.body)
  try {
    const companyId = req.body.companyId;

    if (!companyId) {
      return res.status(400).json({ message: "Company ID is required" });
    }

    const jobs = await Job.find({ company: companyId }).select(
      "title type status _id"
    );

    res.status(201).json({
      message: "Jobs fetched successfully",
      jobs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// {
//   headers.authorization -> token
// }
// Middleware to verify JWT tokens
const verifyTokenMiddleWare = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.clientId = decoded.clientId;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

// {
//   clientId
//   name,
//   email,
//   password
// }
// {
//   status 201
//   { clientId: newClient._id }
// }

// API endpoint for a superuser client to create new regular clients for its own company
app.post("/api/create_client", async (req, res) => {
  // console.log(req.body);
  try {
    // Check if the authenticated client is a superuser
    const client = await Client.findById(req.body.clientId);

    if (client.role !== "superuser") {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Check if the authenticated client belongs to a company
    const company = await Company.findById(client.company);

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    // Check if the request body contains the required fields
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if a client with the same email already exists
    const existingClient = await Client.findOne({ email: req.body.email });

    if (existingClient) {
      return res.status(400).json({ message: "Client email already exists" });
    }

    // Create a new client
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newClient = await Client.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      role: "regular", // or whatever role you want to give them
      company: company._id,
    });

    res.status(201).json({ clientId: newClient._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// {
//   companyId;
// }
// {
//   status_code: 200;
//   name, role, _id;
// }
app.post("/api/get_all_clients", async (req, res) => {
  try {
    const companyId = req.body.companyId;
    // console.log("Inside Get all clients", companyId);

    if (!companyId) {
      // console.log("Inside the error smh");
      return res.status(400).json({ message: "Company ID is required" });
    }

    const clients = await Client.find({ company: companyId }).select(
      "name role _id"
    );

    res.status(201).json({
      message: "Clients fetched successfully",
      clients,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/create_application", async (req, res) => {
  try {
    console.log("inside create_application");
    const { candidateId, jobId } = req.body;
    console.log(req.body);
    const application = new Application({
      candidate: candidateId,
      job: jobId,
    });

    await application.save();

    res
      .status(200)
      .json({ message: "Application created successfully", application });
  } catch (error) {
    if (error.code === 11000) {
      // This is a duplicate key error (i.e., the application already exists)
      res.status(400).json({ message: "Application already exists" });
    } else {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }
});

app.post("/api/get-candidate-info", async (req, res) => {
  console.log(req.body, "Inside body");
  const candidateId = req.body.candidateId;

  try {
    const candidate = await Candidate.findById(candidateId);

    res.status(201).json({
      candidateId: candidate._id,
      email: candidate.email,
      name: candidate.name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// {
//   userId
// }
// {
//   status 201
//   { companyId, isSuperUser(boolean), email, name }
// }
app.post("/api/get-user-info", async (req, res) => {
  console.log(req.body, "Inside body");
  const userId = req.body.userId;

  // console.log(userId);
  // console.log("Inside gettingUserInfo", userId);
  try {
    const client = await Client.findById(userId);
    let isSuperUser = false;
    // console.log(client);
    if (client.role === "superuser") {
      isSuperUser = true;
    }

    // console.log(client);
    res.status(201).json({
      companyId: client.company,
      clientRole: client.role,
      email: client.email,
      name: client.name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// {
//   text (question statement),
//   correctAnswer(correct option text),
//   incorrectAnswers(incorrect options ),
//   tag (technical topic like OOP, DB or analytical),
//   difficulty ("easy", "medium", "hard"),
//   template (true if this is request is being made by superadmin, else false),
//   company (only if template is false, contains companyId whos client is creating this question)
// }
// {
//   status:201
//   message: "Question created successfully",
//   question,
// }

app.post("/api/create_question", async (req, res) => {
  try {
    const {
      text,
      correctAnswer,
      incorrectAnswers,
      tag,
      difficulty,
      template,
      company,
    } = req.body;

    if (!template && !company) {
      return res
        .status(400)
        .json({ message: "Company field is required when template is false" });
    }

    const question = new Question({
      text,
      correctAnswer,
      incorrectAnswers,
      tag,
      difficulty,
      template,
      company: template ? null : company,
    });

    await question.save();

    res.status(201).json({
      message: "Question created successfully",
      question,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// {
//   companyId
// }
// {
// status 201
//   questions {array of question objects that belong to this comapnyId or are template questions}
// }
app.post("/api/get_questions", async (req, res) => {
  try {
    const companyId = req.body.companyId;

    if (!companyId) {
      return res.status(400).json({ message: "Company ID is required" });
    }

    const questions = await Question.find({
      $or: [{ company: companyId }, { template: true }],
    });

    res.status(201).json({
      message: "Questions fetched successfully",
      questions,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// {
//   name (name of the test so its easier to remember the purpose),
//   questionIds (array of questionIds references to include in this assessment),
//   company (the company that is creating this assessment)
// }
// {
//   status 201,
//   message: 'Assessment created successfully',
//   assessment,
// }

app.post("/api/create_assessment", async (req, res) => {
  try {
    const { name, questionIds, company } = req.body;

    if (!name || !questionIds || !company) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const assessment = new Assessment({
      name,
      questions: questionIds,
      company,
    });

    await assessment.save();

    res.status(201).json({
      message: "Assessment created successfully",
      assessment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});
