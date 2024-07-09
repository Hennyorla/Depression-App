const express = require("express");
const router = express.Router();
const professionalController = require("../controllers/professionalController");
const { requireSignin } = require("../middlewares/requireSignin");
const { checkUserIsAdmin } = require("../middlewares/authorization");

router.post(
  "/",
  requireSignin,
  checkUserIsAdmin,
  professionalController.createProfessional
);

router.post(
  "/apply",
  requireSignin,
  professionalController.applyForProffessional
);
router.get("/:id", requireSignin, professionalController.getProfessional);

router.put(
  "/:id",
  requireSignin,
  checkUserIsAdmin,
  professionalController.updateProfessional
);
router.delete(
  "/:id",
  requireSignin,
  checkUserIsAdmin,
  professionalController.deleteProfessional
);

module.exports = router;
