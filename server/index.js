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

mongoose.connect("mongodb://127.0.0.1:27017/techup");


app.post("/api/register", (req, res) => {
  console.log('Inside Register')
  try {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          status: "error",
          message: "Error while Saving",
        });
      } else {
        User.create({
          name: req.body.username,
          email: req.body.email,
          password: hash,
          role: req.body.role
        });
        return res.json({ status: "ok" });
      }
    });
  } catch (err) {
    return res.json({ status: "error", error: "duplicate email" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });
  if (user) {
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (result) {
        const token = jwt.sign(
          {
            email: user.email,
          },
          process.env.JWT_SECRET,
          { expiresIn: "20h" }
        );
        return res.json({
          status: "ok",
          token: token,
          role: user.role,
        });
      } else {
        return res.json({
          status: "error",
          message: "Email or password incorrect",
        });
      }
    });
  } else {
    return res.json({ status: "error", message: "Email or password incorrect" });
  }

  // console.log(req.body.email)
});



app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
