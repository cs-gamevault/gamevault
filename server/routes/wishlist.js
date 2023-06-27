const express = require('express');
const router = express.Router();
const wishListController = require('./controllers/wishListController.js');

router.get('/getlist', wishListController.getList, (req, res) => {
  return res.status(200).json(res.locals.wishlist);
});

router.post('/addlist', wishListController.addList, (req, res) => {
  return res.status(200).json(res.locals.wishlist);
});

router.delete('/deletelist', wishListController.deleteList, (req, res) => {
  return res.status(200).json(res.locals.wishlist);
});

module.exports = router;
