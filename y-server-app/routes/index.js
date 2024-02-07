const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const hashtagRoutes = require('./hashtagRoutes');
const trendRoutes = require('./trendRoutes');
const repostRoutes = require('./repostRoutes');
const mediaRoutes = require('./mediaRoutes');
const followerRelationRoutes = require('./followerRelationRoutes');
const conversationRoutes = require('./conversationRoutes');
const notificationRoutes = require('./notificationRoutes');
const messageRoutes = require('./messageRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/hashtags', hashtagRoutes);
router.use('/trends', trendRoutes);
router.use('/reposts', repostRoutes);
router.use('/media', mediaRoutes);
router.use('/follower-relations', followerRelationRoutes);
router.use('/conversations', conversationRoutes);
router.use('/notifications', notificationRoutes);
router.use('/messages', messageRoutes);

router.get('/', (req, res) => {
  res.send('API is running.');
});

module.exports = router;
