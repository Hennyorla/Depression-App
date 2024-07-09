const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// session model
const sessionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    professional: {
      type: Schema.Types.ObjectId,
      ref: "Professional",
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
    notes: String,
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

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
