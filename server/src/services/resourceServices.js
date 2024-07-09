const Resource = require('../models/resourceModel');

const createResource = async (resourceData) => {
  const resource = new Resource(resourceData);
  await resource.save();
  return resource;
};

const getResource = async (resourceId) => {
  const resource = await Resource.findById(resourceId)
    .populate('author', 'name email');
  return resource;
};

const getResources = async (filters) => {
  const query = {};
  if (filters.title) {
    query.title = { $regex: filters.title, $options: 'i' };
  }
  const resources = await Resource.find(query)
    .populate('author', 'name email');
  return resources;
};

const updateResource = async (resourceId, resourceData) => {
  const resource = await Resource.findByIdAndUpdate(resourceId, resourceData, { new: true });
  return resource;
};

const deleteResource = async (resourceId) => {
  const resource = await Resource.findByIdAndDelete(resourceId);
  return resource;
};

module.exports = {
  createResource,
  getResource,
  getResources,
  updateResource,
  deleteResource,
};
