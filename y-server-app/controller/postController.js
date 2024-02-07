const Post = require('../models/post');

const postController = {
  createPost: async (req, res) => {
    try {
      const { content, author, media } = req.body;

      const newPost = new Post({
        content,
        author,
        media,
      });

      await newPost.save();

      res.status(201).json({ status: 'success', message: 'Post created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error creating post' });
    }
  },

  getPosts: async (req, res) => {
    try {
      const posts = await Post.find();
      res.status(200).json({ status: 'success', data: posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error fetching posts' });
    }
  },

  updatePost: async (req, res) => {
    try {
      const postId = req.params.id;
      const { content, media } = req.body;

      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { content, media },
        { new: true }
      );

      if (!updatedPost) {
        return res.status(404).json({ status: 'error', message: 'Post not found' });
      }

      res.status(200).json({ status: 'success', data: updatedPost });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error updating post' });
    }
  },

  deletePost: async (req, res) => {
    try {
      const postId = req.params.id;

      const deletedPost = await Post.findByIdAndDelete(postId);

      if (!deletedPost) {
        return res.status(404).json({ status: 'error', message: 'Post not found' });
      }

      res.status(200).json({ status: 'success', message: 'Post deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error deleting post' });
    }
  },

};

module.exports = postController;
