const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const auth = require('../middleware/auth');

router.post('/', auth, imageController.createImage);
router.get('/:id', imageController.getImageById);
router.put('/:id', auth, imageController.updateImage);
router.delete('/:id', auth, imageController.deleteImage);

module.exports = router;
