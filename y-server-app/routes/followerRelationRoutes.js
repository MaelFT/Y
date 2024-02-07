const express = require('express');
const router = express.Router();
const followerRelationController = require('../controllers/followerRelationController');

router.post('/create-follower-relation', followerRelationController.createFollowerRelation);

// Add other CRUD routes as needed

module.exports = router;
