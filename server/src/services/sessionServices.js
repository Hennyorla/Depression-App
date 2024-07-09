const Session = require("../models/sessionModel");
const {
  sendUserReminder,
  sendProfessionalReminder,
} = require("../services/emailServices");
const { calculateHourDifference } = require("../utils/session");

const createSession = async (sessionData) => {
  const session = new Session(sessionData);
  await session.save();
  return session;
};

const getSession = async (sessionId) => {
  const session = await Session.findById(sessionId)
    .populate("user")
    .populate("professional")
    .exec();
  return session;
};

const getSessions = async () => {
  const sessions = await Session.find(query)
    .populate("user", "name email")
    .populate("professional", "name");
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
    .populate("User", "email firstName lastName")
    .populate({
      path: "Professional",
      populate: { path: "User", select: "email firstName lastName" },
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
