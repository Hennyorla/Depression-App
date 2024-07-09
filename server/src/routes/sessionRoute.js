const express = require("express");
const router = express.Router();
const { requireSignin } = require("../middlewares/requireSignin");
const { checkUserIsProfessional } = require("../middlewares/authorization");
const sessionController = require("../controllers/sessionController");

router.post("/", requireSignin, sessionController.createSession);
router.get("/:id", requireSignin, sessionController.getSession);
router.get(
  "/",
  requireSignin,
  checkUserIsProfessional,
  sessionController.getSessions
);
router.put("/:id", requireSignin, sessionController.updateSession);
router.delete("/:id", requireSignin, sessionController.deleteSession);

module.exports = router;
