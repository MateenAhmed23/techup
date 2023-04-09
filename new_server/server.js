require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const Company = require("./models/company");
const Client = require("./models/client");

const app = express();
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB database
mongoose.connect(process.env.MONGO_URI);

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
    const token = jwt.sign(
      { id: client._id, role: client.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Set JWT as a cookie
    res.cookie("token", token, { httpOnly: true, maxAge: 3600000 }); // 1 hour

    res.status(201).json({ company, client });
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
    const token = jwt.sign(
      { id: client._id, role: client.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Set JWT as a cookie
    res.cookie("token", token, { httpOnly: true, maxAge: 3600000 }); // 1 hour

    res.status(200).json({ message: "Logged in successfully", client });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/create_client", async (req, res) => {
  try {
    const { name, email, password, company_id } = req.body;

    // Check if client email is already registered
    const clientExists = await Client.findOne({ email });
    if (clientExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Create a new client (super user)
    const hashedPassword = await bcrypt.hash(password, 10);
    const client = await Client.create({
      name: name,
      email: email,
      password: hashedPassword,
      role: "superuser",
      company: company_id,
    });

    res.status(201).json({ client });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/jobDetails", async (req, res) => {
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
    const token = jwt.sign(
      { id: client._id, role: client.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Set JWT as a cookie
    res.cookie("token", token, { httpOnly: true, maxAge: 3600000 }); // 1 hour

    res.status(200).json({ message: "Logged in successfully", client });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});
