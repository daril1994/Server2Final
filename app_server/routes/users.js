var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.json({titulo:"Usuarios"});
});
module.exports = router;
