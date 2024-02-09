const Message = require('../models/Message');

const messageController = {
  createMessage: async (req, res) => {
    try {
      const { content, sender, conversation } = req.body;

      const newMessage = new Message({
        content,
        sender,
        conversation,
      });

      await newMessage.save();

      res.status(201).json({ status: 'success', message: 'Message created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error creating message' });
    }
  },

  // Add other CRUD operations as needed

};

module.exports = messageController;
