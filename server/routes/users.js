const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersController = require('../controllers/usersController');

router.post('/register', usersController.createUser, (req, res) => {
  if (res.locals.success) {
    return res.status(201).send({ message: 'Registration successful' });
  }
  else {
    return res.status(409).send({ message: 'Registration failed' });
  }
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next({ log: `Error in login: ${err}` });
    }
    
    if (user) {
      return res.status(200).send({ message: 'Login successful' });
    }
    else {
      return res.status(401).send({ message: 'Login failed' });
    }
  })(req, res, next);
});

router.post('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
  return res.status(200).send({ message: 'Logout successful' });
});

module.exports = router;
