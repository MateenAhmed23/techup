// // Import necessary packages and modules
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;


const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const questionSchema = new Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
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
  }
  });
  
  // Define the Question model
  const Question = mongoose.model("Question", questionSchema);
  
  module.exports = Question;

// // Define the Question schema
// const questionSchema = new Schema({
//   text: {
//     type: String,
//     required: true,
//   },
//   correctAnswer: {
//     type: String,
//     required: true,
//   },
//   incorrectAnswers: {
//     type: [String],
//     required: true,
//   },
//   tag: {
//     type: String,
//     required: true,
//   },
//   difficulty: {
//     type: String,
//     required: true,
//   },
//   template: {
//     type: Boolean,
//     required: true,
//   },
//   company: {
//     type: Schema.Types.ObjectId,
//     ref: "Company",
//     required: function () {
//       return !this.template;
//     },
//   },
// });

// // Define the Question model
// const Question = mongoose.model("Question", questionSchema);

// module.exports = Question;
