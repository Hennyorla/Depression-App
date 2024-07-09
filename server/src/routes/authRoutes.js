const express = require("express");
const {
  loginUser,
  logoutUser,
  generateNewAccessToken,
} = require("../controllers/authControllers");
const { requireSignin } = require("../middlewares/requireSignin");
const router = express.Router();

router.post("/login", loginUser);
router.post("/logout", requireSignin, logoutUser);
router.get("/refresh-token", generateNewAccessToken);

module.exports = router;
