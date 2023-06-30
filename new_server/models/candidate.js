// Candidate model
const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
});

module.exports = mongoose.model("Candidate", candidateSchema);
