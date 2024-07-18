const express = require("express");
const router = express.Router();
const { requireSignin } = require("../middlewares/requireSignin");
const { checkUserIsProfessional } = require("../middlewares/authorization");
const sessionController = require("../controllers/sessionController");

router.post("/", requireSignin, sessionController.createSession);
router.get("/", requireSignin, sessionController.getSessions);
router.get("/:id", requireSignin, sessionController.getSession);

router.put("/:id", requireSignin, sessionController.updateSession);
router.delete("/:id", requireSignin, sessionController.deleteSession);

module.exports = router;
