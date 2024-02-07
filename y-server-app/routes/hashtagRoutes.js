const express = require('express');
const router = express.Router();
const hashtagController = require('../controllers/hashtagController');

router.post('/create-hashtag', hashtagController.createHashtag);
router.get('/get-hashtags', hashtagController.getHashtags);

module.exports = router;
