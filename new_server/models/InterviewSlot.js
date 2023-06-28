// models/InterviewSlot.js

const mongoose = require("mongoose");

const InterviewSlotSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // if you have a User model
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  slots: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("InterviewSlot", InterviewSlotSchema);
