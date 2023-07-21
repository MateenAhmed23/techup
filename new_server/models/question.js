// // Import necessary packages and modules
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  correctOption: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
});

// Define the Question model
const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
