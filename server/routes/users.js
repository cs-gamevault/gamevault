const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.post('/register', usersController.addUser, (req, res) => {
  res.status(200).send({ message: 'Registration successful.' });
});

// router.post('/login', authController.login, (req, res) => {
//   res.status(200).send({ message: 'Login successful.' });
// });

// router.post('/logout', authController.logout, (req, res) => {
//   res.status(200).send({ message: 'Logout successful.' });
// });

module.exports = router;
