var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lawrence Luxury Properties' });
});


//get services
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Lawrence Luxury Properties', page: 'Our Services' });
});

module.exports = router;
