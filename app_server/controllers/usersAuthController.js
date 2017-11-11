

const userAuth = require('../models/usersAuthModel'),

uc = new userAuth ();

class usersAuthController {

  //  genera el render del home o '/'
  Home (req, res, next) {
    res.json({titulo:"Proyecto Arduino"});
  }
  // // genera el render del login
  Login (req, res, next) {
    res.json({titulo:"Login Arduino"});
  }

  LoginAuth (req, res, next) {
    res.json({titulo:"Autenticacion del Login"});
  }
    //  genera el render del restaurar contraseña
  restoPassword (req, res, next) {
    res.json({titulo:"restaurar Contraseña"});
  }
  //genera el render del nuevo usuario
  newUser (req, res, next) {
    res.json({titulo:"Nuevo Usuario"});
  }

 // para el inicio de sesion, busca un usuario en la base de datos
  oneUser (req, res, next){
      let user = {
          email: req.body.Email,
          password: req.body.Password
          }
      console.log (user);

      uc.getOneUser(user, (err, docs)=>{
          if(err){
            res.status(400);
            res.json({success:false,msg:"No se pudo extraer los datos"})
            }
          else{
            if (docs != null)
              {
                res.json(docs)
              }

          else {
            res.json({success:false,msg:"No se encontro al usuario"})
              }

              }
      console.log("busco " + user.email +  " y " + user.password)

              })

            }

  // para el nuevo usuario, lo guarda en la db
  createUser (req, res, next) {
    let user = {
      name: req.body.Name,
      userName: req.body.userName,
      email:   req.body.Email,
      password:  req.body.Password,
      edad:  req.body.Edad
      }

    uc.saveUser (user, (docs)=>{
      res.json(docs)
    })


  }
}

module.exports = usersAuthController;


