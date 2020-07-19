var express = require('express');
var router = express.Router();
// import {regist} from "../api/home"
var home = require("../api/home")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '首页' });
});
router.get('/layout', function (req, res, next) {
  res.render('index', { title: 'Express', layout: 'error' });
});
router.get('/hello', function (req, res, next) {
  //res.send('The time is ' + new Date().toString())
  console.log(111)
  next()
});
router.get('/hello', function (req, res, next) {
  res.send('TTTThe time is ' + new Date().toString())
});
router.get('/usr/:usrname/:usrid', function (req, res, next) {
  res.send('The usr is ' + req.params.usrname + '(' + req.params.usrid + ')')
});
router.get('/regist', function (req, res, next) {
  res.render('regist', {

  })
});
router.post('/regist', function (req, res, next) {
  res.send('TTTThe time is ' + new Date().toString())
});
router.get('/reg', function (req, res) {
  res.render('reg', {
    title: '注册'
  })
})
router.post('/reg', function (req, res) {
  home.regist(req, res)
});
router.get('/login', function (req, res, next) {
  res.send('TTTThe time is ' + new Date().toString())
});
router.post('/login', function (req, res, next) {
  res.send('TTTThe time is ' + new Date().toString())
});
router.get('/logout', function (req, res, next) {
  res.send('TTTThe time is ' + new Date().toString())
});

router.get('/list', function (req, res) {
  res.render('list', {
    title: 'List',
    items: [1991, 'byvoid', 'express', 'Node.js']
  });
});
//var util = require('util');
// router.helpers({
// inspect: function(obj) {
// return util.inspect(obj, true);
// }
// });
// router.dynamicHelpers({
// headers: function(req, res) {
// return req.headers;
// }
// });
router.get('/helper', function (req, res) {
  res.render('helper', {
    title: 'Helpers'
  });
});
module.exports = router;
