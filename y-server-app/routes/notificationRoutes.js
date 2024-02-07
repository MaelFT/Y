const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

router.post('/create-notification', notificationController.createNotification);

// Add other CRUD routes as needed

module.exports = router;
