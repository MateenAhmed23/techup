const mongoose = require("mongoose");
const { Schema } = mongoose;

const slotSchema = new Schema({
  date: String,
  startTime: String,
  endTime: String,
  jobId: { type: Schema.Types.ObjectId, ref: "Job" },
  booked: { type: Boolean, default: false },
});

const Slot = mongoose.model("Slot", slotSchema);

module.exports = Slot;
