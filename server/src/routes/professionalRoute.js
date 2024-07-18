const express = require("express");
const router = express.Router();
const professionalController = require("../controllers/professionalController");
const { requireSignin } = require("../middlewares/requireSignin");
const { checkUserIsAdmin } = require("../middlewares/authorization");
const upload = require("../utils/multer");

router.post(
  "/apply",
  requireSignin,
  upload.single("cv"),
  professionalController.applyForProffessional
);

router.post(
  "/:id",
  requireSignin,
  checkUserIsAdmin,
  professionalController.createProfessional
);

router.get(
  "/applications",
  requireSignin,
  checkUserIsAdmin,
  professionalController.getProfessionalApplications
);

router.get("/", requireSignin, professionalController.getProfessionals);
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
