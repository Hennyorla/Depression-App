const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// session model
const sessionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    professional: {
      type: Schema.Types.ObjectId,
      ref: "professional",
      required: true,
    },
    sessionDate: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    month: {
      type: Number,
      required: true,
    },
    day: { type: Number, required: true },
    note: String,
    messageId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["scheduled", "completed", "cancelled"],
      default: "scheduled",
    },
  },
  { timestamps: true }
);

const Session = mongoose.model("session", sessionSchema);

module.exports = Session;
