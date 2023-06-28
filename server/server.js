const express = require('express');
const passport = require('passport');
const session = require('express-session');
const usersRouter = require('./routes/users');
const exploreRouter = require('./routes/explore');

const app = express();

// parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use express session middleware
app.use(
  session({
    secret: 'secret', // TODO: make a custom secret in env file
    resave: false,
    saveUninitialized: true
  })
);

// initialize passport with session support
require('./passport'); // passport configuration file
app.use(passport.initialize());
app.use(passport.session());

// route handlers
app.use('/api/users', usersRouter);
app.use('/api/explore', exploreRouter);

// unknown route handler
app.use('*', (req, res) => {
  return res.status(404).send('404 Not Found');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: `Express caught an unknown middleware error: ${err}`,
    status: 500,
    message: 'Internal Server Error',
  };

  const { log, status, message } = Object.assign({}, defaultErr, err);

  console.log(log);
  return res.status(status).send(message);
});

// start server
app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});

module.exports = app;
