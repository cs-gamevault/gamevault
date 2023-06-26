const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// assign constants
const PORT = 3000;
const postgresURI = '';

// require routers
const userRouter = require('./routes/userRouter');

// parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// route handlers
app.use('/api', userRouter);

// unknown route handler
app.use('*', (req, res) => {
  return res.status(404).send('404 Not Found');
});

// global error handler
app.use((err, req, res, next) => {
  /* eslint-disable-line */
  const defaultError = {
    log: `Express caught an unknown middleware error: ${err}`,
    status: 500,
    message: 'Internal Server Error',
  };

  const { log, status, message } = Object.assign({}, defaultError, err);

  console.log(log);
  return res.status(status).send(message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

module.exports = app;
