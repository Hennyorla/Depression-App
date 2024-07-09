const sessionService = require("../services/sessionServices");
const { getProfessional } = require("../services/professionalServices");
const { findUserById } = require("../services/userServices");
const { generateMessaegeId } = require("../utils/session");

const createSession = async (req, res) => {
  const { userId } = req.user;
  const { professionalId, sessionDate } = req.body;

  const month = String(new Date(sessionDate).getMonth() + 1).padStart(2, "0");
  const day = String(new Date(sessionDate).getDate()).padStart(2, "0");

  try {
    const user = await findUserById(userId);
    const professional = await getProfessional(professionalId);

    if (!user || !professional) {
      return res
        .status(404)
        .error({ message: "User or professional not found" });
    }

    if (user.session) {
      return res.status(403).json({ error: "Session already exists" });
    }

    if (professional.sessions.length > 3) {
      return res.status(403).json({ error: "Professional is fully booked" });
    }

    const sessionData = {
      user: userId,
      professional: professionalId,
      day,
      month,
      sessionDate,
      messageId: generateMessaegeId(),
    };

    const session = await sessionService.createSession(sessionData);

    if (session) {
      return res
        .status(200)
        .json({ message: "Session created successfully", session });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSession = async (req, res) => {
  try {
    const session = await sessionService.getSession(req.params.id);
    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }
    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSessions = async (req, res) => {
  try {
    const sessions = await sessionService.getSessions();
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSession = async (req, res) => {
  try {
    const updatedSession = await sessionService.updateSession(
      req.params.id,
      req.body
    );
    if (!updatedSession) {
      return res.status(404).json({ message: "Session not found" });
    }
    res.status(200).json(updatedSession);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSession = async (req, res) => {
  try {
    const deletedSession = await sessionService.deleteSession(req.params.id);
    if (!deletedSession) {
      return res.status(404).json({ message: "Session not found" });
    }
    res.status(200).json({ message: "Session deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSession,
  getSession,
  getSessions,
  updateSession,
  deleteSession,
};
