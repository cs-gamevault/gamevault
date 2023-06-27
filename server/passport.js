const passport = require('passport');
const db = require('./models/database');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

async function authenticateUser(username, password, done) {
  try {
    // retrieve user from database (using username)
    const data = await db.query('SELECT * FROM users WHERE username = $1;', [username]);
    const user = await data.rows[0];

    // username not found
    if (!user) {
      return done(null, false, { message: 'Invalid username or password' });
    }
    // username found, but password incorrect
    if (!(await bcrypt.compare(password, user.password))) {
      return done(null, false, { message: 'Invalid username or password' });
    }

    // username and password correct, return authenticated user
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}

passport.use(new LocalStrategy(authenticateUser));

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    // retrieve user from database (using id)
    const data = await db.query('SELECT * FROM users WHERE id = $1;', [id]);
    const user = data.rows[0];

    // return deserialized user
    return done(null, user); // TODO: should user.password be removed before returning?
  } catch (err) {
    return done(err);
  }
});
