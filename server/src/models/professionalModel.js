const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// professional model
const professionalSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    qualifications: [String],
    experience: Number, // Number of years
    specialties: [String],
    availability: {
      type: String,
      enum: ["available", "unavailable"],
      default: "available",
    },
    sessions: [{ type: Schema.Types.ObjectId, ref: "Session" }],
  },
  { timestamps: true }
);

const Professional = mongoose.model("Professional", professionalSchema);

module.exports = Professional;
