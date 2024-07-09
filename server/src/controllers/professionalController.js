const professionalService = require("../services/professionalServices");
const { apply } = require("../services/professionalServices");
const applyForProffessional = async (req, res) => {
  const { userId } = req.user;
  try {
    const { qualifications, specialities, experience } = req.body;
    const professionalData = {
      user: userId,
      qualifications,
      specialities,
      experience,
    };
    const application = await apply(professionalData);

    if (!application) {
      return res.status(400).json({ message: "Application failed" });
    }
    res
      .status(201)
      .json({ message: "Application submitted successfully", application });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProfessional = async (req, res) => {
  const { userId } = req.params;

  try {
    const professional = await professionalService.createProfessional(userId);
    res
      .status(201)
      .json({ message: "professional created successfully", professional });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProfessional = async (req, res) => {
  try {
    const professional = await professionalService.getProfessional(
      req.params.id
    );
    if (!professional) {
      return res.status(404).json({ message: "Professional not found" });
    }
    res.status(200).json(professional);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProfessionals = async (req, res) => {
  try {
    const professionals = await professionalService.getProfessionals();
    res.status(200).json(professionals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProfessional = async (req, res) => {
  try {
    const updatedProfessional = await professionalService.updateProfessional(
      req.params.id,
      req.body
    );
    if (!updatedProfessional) {
      return res.status(404).json({ message: "Professional not found" });
    }
    res.status(200).json(updatedProfessional);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProfessional = async (req, res) => {
  try {
    const deletedProfessional = await professionalService.deleteProfessional(
      req.params.id
    );
    if (!deletedProfessional) {
      return res.status(404).json({ message: "Professional not found" });
    }
    res.status(200).json({ message: "Professional deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProfessional,
  getProfessional,
  getProfessionals,
  updateProfessional,
  deleteProfessional,
  applyForProffessional,
};
