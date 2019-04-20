const express = require('express');
const router = express.Router();
const imdb = require('../controllers/imdb');

/* GET home page. */
router.get('/all', function(req, res, next) {
  let imdbData = imdb.getData();
  res.send(imdbData);
});

module.exports = router;
