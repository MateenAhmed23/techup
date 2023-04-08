const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  website: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  // other fields as needed
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;

// const mongoose = require("mongoose");

// const CompanySchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   website: {
//     type: String,
//     required: true,
//   },
//   phoneNumber: {
//     type: String,
//     required: true,
//   },
// });

// const Company = mongoose.model("Company", CompanySchema);

// module.exports = Company;
