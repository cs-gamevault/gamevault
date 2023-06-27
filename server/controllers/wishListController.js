const db = require('../models/database');

const wishListController = {
  getList: async (res, req, next) => {
    try {
      const { user_id } = req.query;
      const wishlist = await db.query();
    } catch (error) {
      return next(error);
    }
  },
  addList: async (res, req, next) => {
    try {
    } catch (error) {}
  },
  deleteList: async (res, req, next) => {
    try {
    } catch (error) {}
  },
};

module.exports = wishListController;
