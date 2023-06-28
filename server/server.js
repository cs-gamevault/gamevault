const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// assign constants
const PORT = 3000;

// require routers
const usersRouter = require('./routes/users');
const exploreRouter = require('./routes/explore');

const wishListRouter = require('./routes/wishlist');

// parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// route handlers
app.use('/api/users', usersRouter);
app.use('/api/wishlist', wishListRouter);
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
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

module.exports = app;
