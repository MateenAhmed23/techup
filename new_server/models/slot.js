const mongoose = require("mongoose");
const { Schema } = mongoose;

const slotSchema = new Schema({
  date: String,
  startTime: String,
  endTime: String,
  clientId: { type: Schema.Types.ObjectId, ref: "Client" },
});

const Slot = mongoose.model("Slot", slotSchema);

module.exports = Slot;
