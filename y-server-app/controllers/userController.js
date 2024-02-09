const User = require('../models/User');

const userController = {
  createUser: async (req, res) => {
    try {
      const {
        username,
        email,
        password,
        full_name,
        bio,
        location,
        profile_image_url,
      } = req.body;

      const newUser = new User({
        username,
        email,
        password,
        full_name,
        bio,
        location,
        profile_image_url,
      });

      await newUser.save();

      res.status(201).json({ status: 'check', message: 'Utilisateur créé avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Erreur lors de la création de l\'utilisateur' });
    }
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.login(username, password);

      if (user) {
        req.session.authenticated = true;
        req.session.username = username;
        res.json({ message: 'Login successful' });
        console.log("\n\n", req.session)
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  checkAuth: (req, res, next) => {
    console.log(req.session)
    if (req.session.authenticated) {
      res.status(200).json({logged: true, username: req.session.username})
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  },

  logout: (req, res) => {
    req.session.destroy(() => {
      res.send('Logout successful!');
    });
  },
};

module.exports = userController;
