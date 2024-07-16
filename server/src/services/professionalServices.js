const Professional = require("../models/professionalModel");
const ProfessionalApplication = require("../models/profAppModel");
const { findUserById } = require("../services/userServices");

const apply = async ({ professionalData }) => {
  const professionalApplication = new ProfessionalApplication(professionalData);
  await professionalApplication.save();
  return professionalApplication;
};

const createProfessional = async (userId) => {
  const user = await findUserById(userId);

  const professionData = {
    user: user._id,
  };

  const professional = new Professional(professionalData);
  await professional.save();
  return professional;
};

const getProfessional = async (professionalId) => {
  const professional = await Professional.findById(professionalId)
    .populate("user", "name email")
    .populate("sessions")
    .exec();
  return professional;
};

const getProfessionals = async (filters) => {
  const query = {};
  if (filters.specialties) {
    query.specialties = { $in: filters.specialties.split(",") };
  }
  if (filters.availability) {
    query.availability = filters.availability;
  }
  const professionals = await Professional.find(query).populate(
    "user",
    "name email"
  );
  return professionals;
};

const updateProfessional = async (professionalId, professionalData) => {
  const professional = await Professional.findByIdAndUpdate(
    professionalId,
    professionalData,
    { new: true }
  );
  return professional;
};

const deleteProfessional = async (professionalId) => {
  const professional = await Professional.findByIdAndDelete(professionalId);
  return professional;
};

module.exports = {
  createProfessional,
  getProfessional,
  getProfessionals,
  updateProfessional,
  deleteProfessional,
  apply,
};
