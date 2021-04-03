
const {request, response} = require('express');

const usuariosGet = (req = request, res = response) => {
  // localhost:4000/api/usuarios?q=hola&nombre=fernando&apikey=123&page=1&limit=10
  // const {q, nombre = "No name", apikey, page=1, limit} = req.query;
  const query = req.query;
  return res.json({
    msg: 'get API - usersController',
    query 
  }) 
}
const usuariosPost = (req, res) => {
  const body = req.body;
  return res.json({
    msg: "post API - usersController",
    body
  })
}
const usuariosPut = (req, res) => {
  const id = req.params.id;
  return res.json({
    msg: "put API - usersController",
    id
  })
}
const usuariosPatch = (req, res) => {
  return res.json({
    msg: "patch API - usersController"
  })
}
const usuariosDelete = (req, res) => {
  return res.json({
    msg: "delete API - usersController"
  })
}


module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete
}