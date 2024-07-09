const { v4: uuidv4 } = require("uuid");
const generateMessaegeId = () => {
  return uuidv4();
};

// Function to calculate the difference in hours between two times
const calculateHourDifference = (time1) => {
  // Parse the times into Date objects
  const date1 = new Date(time1);
  const date2 = new Date();

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = Math.abs(date2 - date1);

  // Convert milliseconds to hours
  const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);

  return differenceInHours;
};

module.exports = { generateMessaegeId, calculateHourDifference };
