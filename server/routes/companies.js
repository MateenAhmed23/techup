const express = require("express");
const router = express.Router();
// const Company = require("../models/Company");
// const User = require("../models/User");

router.post("/", (req, res) => {
  const { name, address, email, password, website, phoneNumber } = req.body;

  // First create the company
  const company = new Company({ name, address, website, phoneNumber });
  company.save((err, savedCompany) => {
    if (err) {
      return res.status(500).send(err);
    }

    // Then create the user with the newly created company as the foreign key
    const user = new User({
      name,
      email,
      password,
      company: savedCompany._id,
    });
    user.save((err, savedUser) => {
      if (err) {
        return res.status(500).send(err);
      }

      res.status(201).send({ company: savedCompany, user: savedUser });
    });
  });
});

module.exports = router;
