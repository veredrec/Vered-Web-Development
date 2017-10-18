const express = require('express');
const router = express.Router();

const home = require('./');

router.get('/', (req, res) => {
  res.render('home', home);
});

module.exports = router;
