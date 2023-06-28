const db = require('../models/database');
const bcrypt = require('bcrypt');

const usersController = {};

usersController.createUser = async function (req, res, next) {
  const { username, password } = req.body;

  // check if username already exists
  const data = await db.query('SELECT * FROM users WHERE username = $1;', [username]);
  const user = await data.rows[0];
  if (user) {
    res.locals.success = false;
    return next();
  }

  // hash password with bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // insert new user into database
    const text = `
      INSERT INTO users (username, password) 
      VALUES ($1, $2);
    `;
    const values = [username, hashedPassword];
    const result = await db.query(text, values);
    
    res.locals.success = true;
    return next();
  } catch (err) {
    return next({ log: `Error in usersController.createUser: ${err}` });
  }
};

module.exports = usersController;
