// Import necessary packages and modules
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Assessment schema
const assessmentSchema = new Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true,
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true,
  }],
  timeLimit: {
    type: Number,
    required: true,
  },
  NoOfMCQsToShow: {
    type: Number,
    required: true,
  },
});

// Define the Assessment model
const Assessment = mongoose.model("Assessment", assessmentSchema);

module.exports = Assessment;
