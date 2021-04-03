const express = require("express");
const Router = express.Router();
const {
  usuariosGet, 
  usuariosPost, 
  usuariosPut, 
  usuariosPatch, 
  usuariosDelete
} = require('../controllers/usersController');

Router.get('/', usuariosGet);

Router.put('/:id', usuariosPut);

Router.post('/', usuariosPost);

Router.delete('/', usuariosDelete);

Router.patch('/', usuariosPatch);
module.exports = Router;