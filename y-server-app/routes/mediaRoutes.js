const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController');

router.post('/create-media', mediaController.createMedia);

// Add other CRUD routes as needed

module.exports = router;
