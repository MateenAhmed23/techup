require("dotenv").config();


const express = require("express");


const cors = require("cors");


const mongoose = require("mongoose");


const User = require("./models/user");


const jwt = require("jsonwebtoken");


const bcrypt = require("bcrypt");


const app = express();



app.use(cors());
app.use(express.json());


const saltRounds = parseInt(process.env.SALT_ROUNDS);

mongoose.connect("mongodb://localhost:27017/techup");


app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
