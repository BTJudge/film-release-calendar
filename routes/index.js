const express = require('express');
const router = express.Router();
const imdb = require('../controllers/imdb');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (imdb.imdbData.length === 0) {
    imdb.getData();
  }
  res.render('index', {
    title: 'Film Release Google Calendar Helper',
    imdbData: imdb.imdbData,
    imdbLoading: imdb.loading
  });
});

module.exports = router;
