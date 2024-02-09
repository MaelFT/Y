const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create-user', userController.createUser);

router.post('/login', userController.login);

router.post('/logout', userController.logout);

router.get('/check-auth', userController.checkAuth);

module.exports = router;
