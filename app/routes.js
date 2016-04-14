var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

  var fs = require('fs');
  var files = fs.readdirSync('./app/views/user-flow');
  console.log(files);

  res.render('index');

});

module.exports = router;
