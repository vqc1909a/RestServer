const express = require("express");
const cors = require('cors');
require('dotenv').config();



class Server {
  constructor(){
    this.app = express();
    this.port = process.env.PORT || 4000;
    this.usuariosPath = "/api/usuarios";

    //Middlewares
    this.middlewares()
   
    //Rutas
    //Rutas de mi aplicacion
    this.routes();

  }

  middlewares(){
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }
  routes(){
    this.app.use(this.usuariosPath, require("../routes/usersRoute"));


  }
  listen(){
    this.app.listen(this.port, (req, res) => {
      console.log(`Server run on port ${this.port}`)
    })
  }
}

module.exports = Server;