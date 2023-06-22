const mongoose = require("mongoose");
const { Schema } = mongoose;

const slotSchema = new Schema({
  startDate: String,
  endDate: String,
  startTime: String,
  endTime: String,
  duration: Number,
  date: String,
  clientId: { type: Schema.Types.ObjectId, ref: "Client" },
});

const Slot = mongoose.model("Slot", slotSchema);

module.exports = Slot;
