require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const Company = require("./models/company");
const Client = require("./models/client");
const Job = require("./models/job");

const app = express();
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB database
mongoose.connect(process.env.MONGO_URI);

function generateToken(client) {
  const payload = {
    clientId: client._id,
    email: client.email,
  };
  const options = {
    expiresIn: "5h",
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
}

app.post("/company_signup", async (req, res) => {
  try {
    const {
      companyName,
      companyAddress,
      companyWebsite,
      companyPhoneNumber,
      email,
      password,
    } = req.body;

    // Check if company website is already registered
    const companyExists = await Company.findOne({ website: companyWebsite });
    if (companyExists) {
      return res
        .status(400)
        .json({ message: "Company website already exists" });
    }

    // Check if client email is already registered
    const clientExists = await Client.findOne({ email });
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
    res.status(201).json({ client, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/login", async (req, res) => {
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
    res.status(200).json({ message: "Logged in successfully", client, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/verify-token", (req, res) => {
  console.log(req.headers.authorization);

  const token = req.headers.authorization;

  // Verify the token and return a response
  try {
    const payload = jwt.verify(token, secret);
    console.log(payload);
    res.status(200).json({ valid: true, payload });
  } catch (err) {
    console.log(err);
    res.status(401).json({ valid: false, error: "Invalid token" });
  }
});

app.post("/create_jobs", async (req, res) => {
  try {
    const {
      title,
      department,
      type,
      stack,
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
      description,
      yearsOfExperience,
      company: companyId,
    });

    res.status(201).json({ job });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// API endpoint for a superuser client to create new regular clients for its own company
app.post("/create_client", verifyToken, async (req, res) => {
  try {
    // Check if the authenticated client is a superuser
    const client = await Client.findById(req.clientId);

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

    res.status(201).json(newClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});