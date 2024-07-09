const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// user model
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["user", "professional", "admin"],
      default: "user",
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },

    verificationToken: {
      type: String,
    },

    symptoms: [String],

    session: { type: Schema.Types.ObjectId, ref: "Session" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
