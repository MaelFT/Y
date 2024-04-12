const Media = require('../models/Media');

const mediaController = {
  createMedia: async (req, res) => {
    try {
      const { type, filePath, author } = req.body;

      const newMedia = new Media({
        type,
        filePath,
        author,
      });

      await newMedia.save();

      res.status(201).json({ status: 'success', message: 'Media created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error creating media' });
    }
  },

};

module.exports = mediaController;
