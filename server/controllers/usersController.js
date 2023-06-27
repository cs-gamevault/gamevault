const db = require('../models/database');
const bcrypt = require('bcrypt');

const usersController = {};

usersController.addUser = async function (req, res, next) {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const values = [username, hashedPassword];
  const queryString = `
    INSERT INTO users (username, password) 
    VALUES ($1, $2);
  `;

  try {
    await db.query(queryString, values);
    return next();
  } catch (err) {
    return next({ log: `Error in usersController.addUser: ${err}` });
  }
};

module.exports = usersController;
