const express = require('express');
const router = express.Router();
const conversationController = require('../controllers/conversationController');

router.post('/create-conversation', conversationController.createConversation);

// Add other CRUD routes as needed

module.exports = router;
