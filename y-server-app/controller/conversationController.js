const Conversation = require('../models/Conversation');

const conversationController = {
  createConversation: async (req, res) => {
    try {
      const { participants } = req.body;

      const newConversation = new Conversation({
        participants,
      });

      await newConversation.save();

      res.status(201).json({ status: 'success', message: 'Conversation created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error creating conversation' });
    }
  },

  // Add other CRUD operations as needed

};

module.exports = conversationController;
