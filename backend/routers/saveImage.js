const express = require('express');
const router = express.Router();
const saveImageController = require('../controllers/saveImageController');
const auth = require('../middleware/auth');

router.post('/', auth, saveImageController.saveImage);
router.get('/', auth, saveImageController.getSavedImagesByUserId);

module.exports = router;
