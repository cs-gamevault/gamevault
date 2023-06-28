const express = require('express');
const router = express.Router();
const exploreController = require('../controllers/exploreController');

router.get('/', exploreController.getGames, (req, res) => {
  res.status(200).json(res.locals.data);
});

module.exports = router;
