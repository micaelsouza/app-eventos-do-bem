var express = require('express');
var router = express.Router();
var db = require('../models/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/1');
});

router.get('/1', function(req, res, next) {
  db.Questions.findOne({
    level: '1'
  }, function(err, question) {
    if (err) return console.log(err);
    if (question == null) return res.json({
      question: question
    });
    res.render('index', {
      question: question,
      nextLevel: '/2',
      progressBar: 1,
      site: {
        title: 'Qual é a sua missão?',
        description: 'Descubra qual a sua missão e veja com qual celebridade você mais se parece.',
        image: null
      }
    });
  });
});

router.get('/2', function(req, res, next) {
  console.log(req.query.answer);
  db.Questions.findOne({
    level: '2',
    ref: req.query.answer
  }, function(err, question) {
    if (err) return console.log(err);
    if (question == null) return res.json({
      question: question
    });
    res.render('index', {
      question: question,
      nextLevel: '/3',
      progressBar: 2,
      isImage: true,
      p: req.query.answer,
      site: {
        title: 'Qual é a sua missão?',
        description: 'Descubra qual a sua missão e veja com qual celebridade você mais se parece.',
        image: null
      }
    });
  });
});

router.get('/3', function(req, res, next) {
  db.Questions.findOne({
    level: '3',
    ref: '0'
  }, function(err, question) {
    if (err) return console.log(err);
    if (question == null) return res.json({
      question: question
    });
    res.render('index', {
      question: question,
      nextLevel: '/4',
      progressBar: 3,
      p: req.query.p,
      site: {
        title: 'Qual é a sua missão?',
        description: 'Descubra qual a sua missão e veja com qual celebridade você mais se parece.',
        image: null
      }
    });
  });
});

router.get('/4', function(req, res, next) {
  db.Questions.findOne({
    level: '4',
    ref: '0'
  }, function(err, question) {
    if (err) return console.log(err);
    if (question == null) return res.json({
      question: question
    });
    res.render('index', {
      question: question,
      nextLevel: '/result',
      progressBar: 4,
      p: req.query.p,
      site: {
        title: 'Qual é a sua missão?',
        description: 'Descubra qual a sua missão e veja com qual celebridade você mais se parece.',
        image: null
      }
    });
  });
});

router.get('/result', function(req, res, next) {
  db.Results.findOne({
    result: req.query.p,
  }, function(err, result) {
    if (err) return console.log(err);
    if (result == null) return res.json({
      result: result
    });
    res.render('result', {
      result: result,
      site: {
        title: 'Minha missão é: ' + result.mission + '.',
        description: 'Eu tirei ' + result.personality.name + '.',
        image: result.personality.image
      }
    });
  });
});

module.exports = router;
