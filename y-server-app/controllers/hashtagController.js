const Hashtag = require('../models/Hashtag');

const hashtagController = {
  createHashtag: async (req, res) => {
    try {
      const { text } = req.body;

      const newHashtag = new Hashtag({
        text,
      });

      await newHashtag.save();

      res.status(201).json({ status: 'success', message: 'Hashtag created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error creating hashtag' });
    }
  },

  getHashtags: async (req, res) => {
    try {
      const hashtags = await Hashtag.find();
      res.status(200).json({ status: 'success', data: hashtags });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error fetching hashtags' });
    }
  },
};

module.exports = hashtagController;
