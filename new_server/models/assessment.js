// Import necessary packages and modules
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Question = require("./question");

// Define the Assessment schema
const assessmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  questions: {
    type: [Question.schema],
    required: true,
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
});

// Define the Assessment model
const Assessment = mongoose.model("Assessment", assessmentSchema);

module.exports = Assessment;
