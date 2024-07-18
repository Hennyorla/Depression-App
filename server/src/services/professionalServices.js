const Professional = require("../models/professionalModel");
const ProfessionalApplication = require("../models/profAppModel");
const { findUserById } = require("../services/userServices");

const apply = async (professionalData) => {
  const applicationalAlreadyExists = await ProfessionalApplication.findOne({
    user: professionalData.user,
  });
  if (!applicationalAlreadyExists) {
    const professionalApplication = new ProfessionalApplication(
      professionalData
    );
    await professionalApplication.save();
    return professionalApplication;
  }

  throw new Error("you already applied");
};

const allApplications = async () => {
  return await ProfessionalApplication.find({})
    .populate("user", "firstName lastName email profilePicture")
    .exec();
};

const createProfessional = async (userId) => {
  const user = await ProfessionalApplication.findOne({ user: userId });

  const userInfo = await findUserById(userId);

  if (user) {
    const professionalData = {
      user: userInfo._id,
      cv: user.cv,
      experience: user.experience,
      specialties: user?.specialties,
      summary: user?.summary,
    };

    const professional = new Professional(professionalData);
    await professional.save();

    userInfo.role = "professional";
    userInfo.save();

    await ProfessionalApplication.deleteOne({
      user: userInfo._id.toString(),
    });
    return professional;
  }
};

const getProfessional = async (professionalId) => {
  const professional = await Professional.findById(professionalId)
    .populate("user", "firstName lastName email profilePicture")
    .populate("sessions")
    .exec();
  return professional;
};

const getProfessionals = async () => {
  const professionals = await Professional.find({})
    .populate("user", "firstName lastName email profilePicture")
    .exec();

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
  allApplications,
  apply,
};
