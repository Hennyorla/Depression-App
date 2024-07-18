const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// professional model
const profAppSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    cv: {
      type: String,
    },
    experience: Number, // Number of years
    specialties: String,
    summary: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ProfessionalApplication = mongoose.model(
  "professionalApp",
  profAppSchema
);

module.exports = ProfessionalApplication;
