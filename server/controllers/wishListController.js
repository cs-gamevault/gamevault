const db = require('../models/database');

const wishListController = {
  getList: async (req, res, next) => {
    try {
      const { user_id } = req.query;
      const wishlist = await db.query(
        'SELECT games.* FROM games INNER JOIN wishlists ON games.id = wishlists.game_id WHERE wishlists.user_id = $1',
        [user_id]
      );
      res.locals.wishlist = wishlist.rows;
      next();
    } catch (error) {
      return next(error);
    }
  },
  //genre game image , game title , platform
  addList: async (req, res, next) => {
    try {
      const { user_id } = req.query;
      const game_id = res.locals.game_id;
      await db.query('INSERT INTO wishlists (user_id, game_id) VALUES ($1, $2)', [
        user_id,
        game_id,
      ]);
      const wishlist = await db.query(
        'SELECT games.* FROM games INNER JOIN wishlists ON games.id = wishlists.game_id WHERE wishlists.user_id = $1',
        [user_id]
      );
      res.locals.wishlist = wishlist.rows;
      next();
    } catch (error) {
      return next(error);
    }
  },
  deleteList: async (req, res, next) => {
    try {
      const { user_id } = req.query;
      const { game_id } = req.query;
      await db.query('DELETE FROM wishlists WHERE user_id = $1 AND game_id = $2', [
        user_id,
        game_id,
      ]);
      const wishlist = await db.query(
        'SELECT games.* FROM games INNER JOIN wishlists ON games.id = wishlists.game_id WHERE wishlists.user_id = $1',
        [user_id]
      );
      res.locals.wishlist = wishlist.rows;
      next();
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = wishListController;
