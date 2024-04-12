const Notification = require('../models/Notification');

const notificationController = {
  createNotification: async (req, res) => {
    try {
      const { type, recipient, sender, post, comment } = req.body;

      const newNotification = new Notification({
        type,
        recipient,
        sender,
        post,
        comment,
      });

      await newNotification.save();

      res.status(201).json({ status: 'success', message: 'Notification created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error creating notification' });
    }
  },

};

module.exports = notificationController;
