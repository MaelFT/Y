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
  uploadImage: async (image) => {
    const data = new FormData();
    data.append('image', image);
  
    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: data
      });
      const imageUrl = await response.text();
      return imageUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw new Error('Error uploading image');
    }
  }

};

module.exports = mediaController;
