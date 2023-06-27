const db = require('../models/database');
const bcrypt = require('bcrypt');

const usersController = {};

usersController.createUser = async function (req, res, next) {
  const { username, password } = req.body;

  // hash password with bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // insert new user into database
    const text = `
      INSERT INTO users (username, password) 
      VALUES ($1, $2);
    `;
    const values = [username, hashedPassword];
    await db.query(text, values);

    return next();
  } catch (err) {
    return next({ log: `Error in usersController.createUser: ${err}` });
  }
};

module.exports = usersController;
