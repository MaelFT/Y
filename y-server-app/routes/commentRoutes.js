const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/create-comment', commentController.createComment);
router.get('/get-comments', commentController.getComments);
router.put('/update-comment/:id', commentController.updateComment);
router.delete('/delete-comment/:id', commentController.deleteComment);

module.exports = router;
