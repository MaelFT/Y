const express = require('express');
const router = express.Router();
const auth = require("../auth");
const userController = require('../controllers/userController');

router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/auth-endpoint', auth, (req, res) => {
    res.json({ message: "You are authorized to access me" });
});
router.get('/free-endpoint', (req, res) => {
    res.json({ message: "You are free to access me anytime" });
});

module.exports = router;
