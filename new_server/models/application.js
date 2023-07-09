const mongoose = require("mongoose");

// we will have to take care of cascading deletions
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
  status: {
    type: String,
    required: true,
    enum: ["invited", "applied", "interview", "accepted"],
    default: "invited",
  },
});

module.exports = mongoose.model("Application", applicationSchema);
