const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  questionId: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const mcqAnswerSchema = new mongoose.Schema({
  questionId: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const applicationSchema = new mongoose.Schema({
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidate",
    required: true,
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  marks: {
    type: Number,
    required: true,
    default: "",
  },
  outOf: {
    type: Number,
    required: true,
    default: "",
  },
  status: {
    type: String,
    required: true,
    enum: [
      "invited",
      "applied",
      "pending-assessment",
      "attempted-assessment",
      "slot-pending",
      "interview-pending",
      "interviewed",
      "accepted",
      "rejected",
    ],
    default: "invited",
  },
  answers: [answerSchema],
  mcqAnswers: [mcqAnswerSchema],
});

// Add unique compound index on candidate and job
applicationSchema.index({ candidate: 1, job: 1 }, { unique: true });

module.exports = mongoose.model("Application", applicationSchema);
