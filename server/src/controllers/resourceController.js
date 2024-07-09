const resourceService = require("../services/resourceServices");

const createResource = async (req, res) => {
  try {
    const resource = await resourceService.createResource(req.body);
    res.status(201).json(resource);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

const getResource = async (req, res) => {
  try {
    const resource = await resourceService.getResource(req.params.id);
    if (!resource) {
      return res.status(404).json({ error: "Resource not found" });
    }
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

const getResources = async (req, res) => {
  try {
    const resources = await resourceService.getResources(req.query);
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
};

const updateResource = async (req, res) => {
  try {
    const updatedResource = await resourceService.updateResource(
      req.params.id,
      req.body
    );
    if (!updatedResource) {
      return res.status(404).json({ message: "Resource not found" });
    }
    res.status(200).json(updatedResource);
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
};

const deleteResource = async (req, res) => {
  try {
    const deletedResource = await resourceService.deleteResource(req.params.id);
    if (!deletedResource) {
      return res.status(404).json({ message: "Resource not found" });
    }
    res.status(200).json({ message: "Resource deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
};

module.exports = {
  createResource,
  getResource,
  getResources,
  updateResource,
  deleteResource,
};
