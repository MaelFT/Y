const Comment = require('../models/comment');

const commentController = {
  createComment: async (req, res) => {
    try {
      const { content, author, post } = req.body;

      const newComment = new Comment({
        content,
        author,
        post,
      });

      await newComment.save();

      res.status(201).json({ status: 'success', message: 'Comment created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error creating comment' });
    }
  },

  getComments: async (req, res) => {
    try {
      const comments = await Comment.find();
      res.status(200).json({ status: 'success', data: comments });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error fetching comments' });
    }
  },

  updateComment: async (req, res) => {
    try {
      const commentId = req.params.id;
      const { content } = req.body;

      const updatedComment = await Comment.findByIdAndUpdate(
        commentId,
        { content },
        { new: true }
      );

      if (!updatedComment) {
        return res.status(404).json({ status: 'error', message: 'Comment not found' });
      }

      res.status(200).json({ status: 'success', data: updatedComment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error updating comment' });
    }
  },

  deleteComment: async (req, res) => {
    try {
      const commentId = req.params.id;

      const deletedComment = await Comment.findByIdAndDelete(commentId);

      if (!deletedComment) {
        return res.status(404).json({ status: 'error', message: 'Comment not found' });
      }

      res.status(200).json({ status: 'success', message: 'Comment deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error deleting comment' });
    }
  },
};

module.exports = commentController;
