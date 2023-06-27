const express = require('express');
const router = express.Router();
const wishListController = require('./controllers/wishListController.js');

router.get('/wishlists', wishListController.getList, (req, res) => {
  return res.status(200).json(res.locals.wishlist);
});

router.post('/wishlists', wishListController.addList, (req, res) => {
  return res.status(200).json({ message: 'Game added to wishlist' });
});

router.delete('/wishlists', wishListController.deleteList, (req, res) => {
  return res.status(200).json({ message: 'Game deleted from waitlist' });
});

module.exports = router;
