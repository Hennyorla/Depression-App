const professionalService = require("../services/professionalServices");
const { apply, allApplications } = require("../services/professionalServices");

const applyForProffessional = async (req, res) => {
  const { userId } = req.user;
  const cv = "uploads/" + req.file.filename;
  const { specialities, experience, summary } = req.body;
  try {
    const professionalData = {
      user: userId,
      cv,
      specialities,
      experience,
      summary,
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

const getProfessionalApplications = async (req, res) => {
  try {
    const applications = await allApplications();

    return res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProfessional = async (req, res) => {
  const { id } = req.params;

  try {
    const professional = await professionalService.createProfessional(id);
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
  getProfessionalApplications,
};
