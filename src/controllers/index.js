const express = require('express');
const router = express.Router();

const home = require('./');
const portfolio = require('./portfolio');
const skills = require('./skills');
const contact = require('./contact');

router.get('/', (req, res) => {
  res.render('home', home);
});

router.get('/portfolio', (req, res) => {
  res.render('portfolio', portfolio);
});

router.get('/skills', (req, res) => {
  res.render('skills', skills);
});

router.get('/contact', (req, res) => {
  res.render('contact', contact);
});

module.exports = router;
