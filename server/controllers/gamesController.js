const db = require('../models/database');

const gameController = {
  addGame: async (req, res, next) => {
    try {
      const { game } = req.body; //not sure
      // Trying to extract the game object
      // Query the database for any existing games with the same title
      const existingGame = await db.query(
        'SELECT * FROM games WHERE title = $1',
        [game.title]
      );

      // Initialize a variable to hold the game's ID
      let game_id;
      // If no existing game with the same title was found
      if (existingGame.rows.length === 0) {
        const result = await db.query(
          // Insert the new game into the database
          'INSERT INTO games (title, genre, platforms, image) VALUES ($1, $2, $3, $4) RETURNING _id',
          [game.title, game.genre, game.platforms, game.image]
        );
        // Set game_id to the ID of the newly game
        game_id = result.rows[0]._id;
      } else {
        // If a game with the same title was found, set game_id to its ID
        game_id = existingGame.rows[0]._id;
      }

      res.locals.game_id = game_id;
      next();
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = gameController;
