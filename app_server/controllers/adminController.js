const userAModel = require('../models/usersModel'),

uAc = new userAModel ();

class adminController {
  // esta muestra todos los usuarios

  AllUsers (req, res, next){
      uAc.getAllUser ((err, users)=>{
        if (err){
          json(err);
        }
        else
        {
          res.json({success:false,msg:"No se pudo extraer los datos"})
        }

      })
  }
}





module.exports= adminController ;
