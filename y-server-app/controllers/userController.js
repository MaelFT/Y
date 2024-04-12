const User = require('../models/User');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const userController = {
  register: async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        full_name: req.body.username,
        password: hashedPassword,
      });

      const savedUser = await newUser.save();

      res.status(201).send({
        status: 'success',
        message: "User Created Successfully",
        user: savedUser,
      });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).send({
        status: 'error',
        message: "Error creating user",
        error: error.message,
      });
    }
  },
  login: async (req, res) => {
    try {
      User.findOne({ email: req.body.email })
      .then((user)=>{
        bcrypt.compare(req.body.password, user.password)
        .then((passwordCheck) => {
              if(!passwordCheck) {
                return res.status(400).send({
                  message: "Passwords does not match",
                  error,
                })
              }
              const token = jwt.sign(
                {
                  userId: user._id,
                  userEmail: user.email,
                },
                process.env.JWT_SECRET,
                { expiresIn: "24h" }
              );

              res.status(200).send({
                message: "Login Successful",
                email: user.email,
                token,
              });
            })
          })
        .catch((error) => {
          res.status(400).send({
            message: "Passwords does not match",
            error,
          });
      })
      .catch((e) => {
        res.status(404).send({
          message: "Email not found",
          e,
        });
      });
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).send({
        status: 'error',
        message: 'Error logging in user',
        error: error.message,
      });
    }
  },
};

module.exports = userController;