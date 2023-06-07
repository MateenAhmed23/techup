// models/job.js
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  department: { type: String, required: true },
  type: { type: String, required: true },
  stack: { type: String, required: true },
  status: {
    type: String,
    enum: ["active", "deactive"],
    required: true,
  },
  location: { type: String, required: true },
  perks: { type: String, required: true },
  description: { type: String, required: true },
  yearsOfExperience: { type: Number, required: true },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
});

module.exports = mongoose.model("Job", jobSchema);