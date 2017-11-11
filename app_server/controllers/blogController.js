
const blogModel = require('../models/blogModel')

// instancia de la clase blog model
bg =new  blogModel ();
// clase del modulo blog controller
class blogControler {
  AllPost (req, res, next){
    // extraer  todos los usuarios
      bg.getAllPost ((err,docs) => {
          if (err){
            res.send(err);
          }
          else
          {
            res.json({titulo:"Blog", doc:docs});
          }


      });

  }
 // new post
  newPost (req, res, next){
    res.json({titulo:"New Post"});
  }
// inserta los post
  insertarPost (req, res, next){
    res.json({titulo:"Insertar Post"});
}
}

module.exports = blogControler;



