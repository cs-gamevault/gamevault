const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersController = require('../controllers/usersController');

router.post('/register', usersController.addUser, (req, res) => {
  res.status(200).send({ message: 'Registration successful.' });
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/', // TODO: make sure to redirect to correct endpoint
  failureRedirect: '/login'
}));

// router.post('/logout', authController.logout, (req, res) => {
//   res.status(200).send({ message: 'Logout successful.' });
// });

module.exports = router;
