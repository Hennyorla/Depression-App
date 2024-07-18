const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// professional model
const professionalSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    cv: String,
    experience: Number, // Number of years
    specialties: String,
    summary: String,
    availability: {
      type: String,
      enum: ["available", "unavailable"],
      default: "available",
    },
    sessions: [{ type: Schema.Types.ObjectId, ref: "session" }],
  },
  { timestamps: true }
);

const Professional = mongoose.model("professional", professionalSchema);

module.exports = Professional;
