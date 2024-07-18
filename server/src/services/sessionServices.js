const Session = require("../models/sessionModel");
const {
  sendUserReminder,
  sendProfessionalReminder,
} = require("../services/emailServices");
const { calculateHourDifference } = require("../utils/session");

const createSession = async (sessionData) => {
  const session = new Session(sessionData);
  await session.save();

  if (session) {
  }
  return session;
};

const getSession = async (sessionId) => {
  const session = await Session.findById(sessionId)
    .populate("user", "firstName lastName email profilePicture")
    .populate({
      path: "professional",
      populate: {
        path: "user",
        select: "_id email firstName lastName profilePicture",
      },
    })
    .exec();
  return session;
};

const getSessions = async (userId) => {
  const sessions = await Session.find({})
    .populate("user", "firstName lastName email profilePicture")
    .populate({
      path: "professional",
      populate: {
        path: "user",
        select: "email firstName lastName",
      },
    });

  return sessions;
};

const updateSession = async (sessionId, sessionData) => {
  const session = await Session.findByIdAndUpdate(sessionId, sessionData, {
    new: true,
  });
  return session;
};

const deleteSession = async (sessionId) => {
  const session = await Session.findByIdAndDelete(sessionId);
  return session;
};

const sessionReminder = async () => {
  const month = String(new Date().getMonth() + 1).padStart(2, "0");
  const day = String(new Date().getDate()).padStart(2, "0");
  // Find sessions within the  current month and day
  const sessions = await Session.find({ month, day: { $eq: day } })
    .populate("user", "email firstName lastName")
    .populate({
      path: "professional",
      populate: { path: "user", select: "email firstName lastName" },
    })
    .exec();

  if (sessions || sessions.length > 0) {
    for (const session of sessions) {
      const hourDifference = calculateHourDifference(session?.sessionDate);
      if (hourDifference <= 1) {
        await sendProfessionalReminder(
          session.professional.email,
          session.user.firstName
        );
        await sendUserReminder(
          session.user.email,
          session.professional.firstName
        );
      }
    }
  }
};

module.exports = {
  createSession,
  getSession,
  getSessions,
  updateSession,
  deleteSession,
  sessionReminder,
};
