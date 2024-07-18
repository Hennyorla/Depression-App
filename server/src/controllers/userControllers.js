const User = require("../models/userModel");
const { sendVerificationEmail } = require("../services/emailServices");
const {
  findUserByEmail,
  findUserByToken,
  findUserById,
} = require("../services/userServices");
const { generateOTP } = require("../utils/randomCodeGenerator");
const { hashPassword } = require("../utils/passwordHelpers");

const createNewUser = async (req, res) => {
  try {
    // pull out new user data from req.body
    const { firstName, lastName, gender, email, dob } = req.body;

    const userExist = await findUserByEmail(email);

    // check if user with email already exist
    if (userExist) {
      if (!userExist.isVerified) {
        // send verification token if user exist but is not verified
        await sendVerificationEmail(
          userExist.email,
          userExist.verificationToken
        );
        return res
          .status(200)
          .json({ message: "check your email to complete verification" });
      }

      return res
        .status(403)
        .json({ error: "user with this email address already exist" });
    }

    // get otp for user verificadtion
    const verificationToken = generateOTP();

    // create a new instance of User model with user data
    const user = new User({
      firstName,
      lastName,
      email,
      verificationToken,
      gender,
      dob,
    });

    // use the mongoose .save method to save user data in database
    await user.save();

    // check if new user is not created
    if (!user) {
      // send back error message to client if user is not created
      return res.status(400).json({ error: "User not created" });
    }

    // send verification token to user email
    await sendVerificationEmail(user.email, user.verificationToken);

    // send back success response if new user is created on database
    return res
      .status(201)
      .json({ message: "check you email address to complete registration" });
  } catch (error) {
    // send back error message for server related errors

    res.status(500).json({ error: "Internal server error" });
  }
};

const verifyUser = async (req, res) => {
  try {
    // get verificadtiontoken from request body object
    const { verificationToken } = req.body;

    const userWithTokenExist = await findUserByToken(verificationToken);

    if (!userWithTokenExist) {
      return res.status(404).json({ error: "invalid token" });
    }

    userWithTokenExist.isVerified = true;

    await userWithTokenExist.save();

    return res.status(200).json({
      message: "user is verified successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const createNewPassword = async (req, res) => {
  try {
    const { verificationToken, password } = req.body;
    const user = await findUserByToken(verificationToken);

    if (!user) {
      return res
        .status(404)
        .json({ error: "user with this email does not exist" });
    }

    if (!user.isVerified) {
      return res.status(403).json({ error: "user is not verified" });
    }

    // update user password
    const hashedPassword = hashPassword(password);
    user.password = hashedPassword;
    user.verificationToken = undefined;
    await user.save();

    return res.status(200).json({ message: "password updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const { userId } = req.user;

    const user = await findUserById(userId);

    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    return res.status(200).json({ message: "user found", user });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const selectSymptoms = async (req, res) => {
  try {
    const { symptoms } = req.body;
    const { userId } = req.user;
    const user = await findUserById(userId);

    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    user.symptoms = symptoms;

    await user.save();

    return res.status(200).json({ message: "symptoms added successfully" });
  } catch {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createNewUser,
  verifyUser,
  createNewPassword,
  getCurrentUser,
  selectSymptoms,
};
