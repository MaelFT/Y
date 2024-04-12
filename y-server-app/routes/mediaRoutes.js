const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController');

router.post('/create-media', mediaController.createMedia);

module.exports = router;
