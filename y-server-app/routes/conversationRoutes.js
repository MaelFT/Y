const express = require('express');
const router = express.Router();
const conversationController = require('../controllers/conversationController');

router.post('/create-conversation', conversationController.createConversation);

module.exports = router;
