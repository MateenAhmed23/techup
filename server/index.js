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

const secret = 'makingacoolATS';

function generateToken(user) {
  const payload = {
    userId: user._id,
    email: user.email
  };
  const options = {
    expiresIn: '5h'
  };

  return jwt.sign(payload, secret, options);
}


app.post("/api/register", async (req, res) => {
  // console.log(req.body);
  try {
    bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          status: "error",
          message: "Error while Saving",
        });
      } else {
        try{
          const user = await User.create({
            name: req.body.username,
            email: req.body.email,
            password: hash,
            role: req.body.role
          });

          const token = generateToken(user);

          user.tokens.push(token);
          await user.save();

          res.cookie('token', token);

          console.log(token)

          return res.json({
            status: "ok",
            token: token,
            role: user.role
          });
        }
        catch(e){
          console.log(e)
          return res.json({ status: "error", error: "duplicate email" });

        }
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
    bcrypt.compare(req.body.password, user.password,async  function (err, result) {
      if (result) {
        const token = generateToken(user);

        user.tokens.push(token);
        await user.save();

        res.cookie('token', token, { httpOnly: true });
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


// Needs token in req to verify and returns payload
app.post('/api/verify-token', (req, res) => {

  console.log(req.headers.authorization)

  const token = req.headers.authorization;


  // Verify the token and return a response
  try {
    const payload = jwt.verify(token, secret);
    console.log(payload)
    res.status(200).json({ valid: true, payload });
  } catch (err) {
    console.log(err)
    res.status(401).json({ valid: false, error: 'Invalid token' });
  }
});



app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
