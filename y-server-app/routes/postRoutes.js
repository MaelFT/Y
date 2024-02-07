const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/create-post', postController.createPost);
router.get('/get-posts', postController.getPosts);
router.put('/update-post/:id', postController.updatePost);
router.delete('/delete-post/:id', postController.deletePost);

module.exports = router;
