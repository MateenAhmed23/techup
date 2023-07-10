// Import necessary packages and modules
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Assessment schema
const screeningSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  madatory: {
    type: String,
    required: true,
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
});

// Define the Assessment model
const Screening = mongoose.model("Screening", screeningSchema);

module.exports = Screening;
