const express = require('express');
const router = express.Router();
const wishListController = require('../controllers/wishListController');
const gameController = require('../controllers/gamesController.js');

router.get('/', wishListController.getList, (req, res) => {
  return res.status(200).json(res.locals.wishlist);
});

router.post('/games', gameController.addGame, (req, res) => {
  return res.status(200).json({ game_id: res.locals.game_id });
});

router.post('/', gameController.addGame, wishListController.addList, (req, res) => {
  return res.status(200).json(res.locals.wishlist);
});

router.delete('/', wishListController.deleteList, (req, res) => {
  return res.status(200).json(res.locals.wishlist);
});

module.exports = router;
