const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/create-message', messageController.createMessage);

module.exports = router;
