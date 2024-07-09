const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// professional model
const profAppSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    qualifications: [String],
    experience: Number, // Number of years
    specialties: [String],
  },
  { timestamps: true }
);

const ProfessionalApplication = mongoose.model(
  "ProfessionalApp",
  profAppSchema
);

module.exports = ProfessionalApplication;
