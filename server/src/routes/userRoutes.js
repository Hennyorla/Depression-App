const express = require("express");
const router = express.Router();
const {
  createNewUser,
  verifyUser,
  createNewPassword,
  getCurrentUser,
  selectSymptoms,
} = require("../controllers/userControllers");
const { requireSignin } = require("../middlewares/requireSignin");
const {
  checkUserData,
  checkPasswordValidity,
  checkIsTokenValid,
} = require("../middlewares/dataValidator");

router.post("/", checkUserData, createNewUser);
router.put("/verify", checkIsTokenValid, verifyUser);
router.put("/symptoms", requireSignin, selectSymptoms);
router.put("/update-password", checkPasswordValidity, createNewPassword);
router.get("/me", requireSignin, getCurrentUser);

module.exports = router;
