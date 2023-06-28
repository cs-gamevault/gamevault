const db = require('../models/database');

const gameController = {
  addGame: async (req, res, next) => {
    try {
      const { game } = req.body; //not sure
      // Trying to extract the game object
      // Query the database for any existing games with the same title
      const existingGame = await db.query('SELECT * FROM games WHERE name = $1', [game.name]);

      // Initialize a variable to hold the game's ID
      let game_id;
      // If no existing game with the same title was found
      if (existingGame.rows.length === 0) {
        const result = await db.query(
          // Insert the new game into the database
          'INSERT INTO games (id, name, genres, platforms, cover, summary) VALUES ($1, $2, $3, $4 , $5, $6) RETURNING id',
          [game.id, game.name, game.genres, game.platforms, game.cover, game.summary]
        );
        // Set game_id to the ID of the newly game
        game_id = result.rows[0].id;
      } else {
        // If a game with the same title was found, set game_id to its ID
        game_id = existingGame.rows[0].id;
      }

      res.locals.game_id = game_id;
      next();
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = gameController;
