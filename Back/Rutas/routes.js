const express = require("express")
const router = express.Router();

const mysqlConnection = require("../BaseDatos/BaseDatos");


router.post("/registrar", (req, res) => {
  const {Nombre,Correo,Salario,GastosFijos,GastosExtra } = req.body;

  let usuario = [Nombre,Correo,Salario,GastosFijos,GastosExtra ];

  let nuevoUsuario = "INSERT INTO Usuario(Nombre,Correo,Salario,GastosFijos,GastosExtra) VALUES (?,?,?,?,?)"

  console.log(usuario)

  mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: "Usuario Registrado" })
    console.log(usuario)
  })
})

router.get("/consulta",(req,res)=>{
    const Correo = req.query.Correo;
  
    console.log(Correo)
    
    mysqlConnection.query("SELECT * FROM Usuario WHERE Correo = ?",[Correo],(err,rows)=>{
      console.log(rows)
      const Salario = rows.Salario;
      if(err){
        console.log(err)
      }else{
        res.json(rows)
      }
    });
  
  })


module.exports = router;