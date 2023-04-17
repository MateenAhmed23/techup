const mongoose = require("mongoose");

const JobDetailsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["open", "closed"],
    required: true,
  },
});

const JobDetails = mongoose.model("JobDetails", JobDetailsSchema);

module.exports = JobDetails;
