const express = require('express');
const router = express.Router();
const { requireSignin } = require('../middlewares/requireSignin');
const { checkUserIsAdmin } = require('../middlewares/authorization');
const resourceController = require('../controllers/resourceController');

router.post('/',requireSignin, checkUserIsAdmin, resourceController.createResource);
router.get('/:id',requireSignin,  resourceController.getResource);
router.get('/',requireSignin,  resourceController.getResources);
router.put('/:id',requireSignin, checkUserIsAdmin, resourceController.updateResource);
router.delete('/:id',requireSignin, checkUserIsAdmin, resourceController.deleteResource);

module.exports = router;
