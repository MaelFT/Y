const FollowerRelation = require('../models/followerRelation');

const followerRelationController = {
  createFollowerRelation: async (req, res) => {
    try {
      const { follower, following } = req.body;

      const newFollowerRelation = new FollowerRelation({
        follower,
        following,
      });

      await newFollowerRelation.save();

      res.status(201).json({ status: 'success', message: 'Follower relation created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error creating follower relation' });
    }
  },

  // Add other CRUD operations as needed

};

module.exports = followerRelationController;
