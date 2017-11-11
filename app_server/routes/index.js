var express = require('express');
var router = express.Router();
const Temperaturas = require('../models/temperaturas')
const Users = require('../models/users')
const UsersAuth = require('../controllers/auth')
const Blog = require('../models/blog')
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proyecto Arduino Server 2', user:'null'});
});

router.get('/temperaturas', function(req, res, next) {
  Temperaturas.find((err,temperaturas)=>{
    if(err){

        res.status(400);
        res.json({success:false,msg:"No se pudo extraer los datos"})
    }
    else{
        res.json(temperaturas)
    }
});
});




router.get('/:userId',(req,res,next)=>{

      let userId = req.params.userId;
      Users.getUserById(userId,(err,users)=>{
          if(err){
              res.status(400);
              res.json({success:false,msg:"No se pudo extraer los datos"})
          }
          else{
              res.json(users)
          }
      });

  })



module.exports = router;
