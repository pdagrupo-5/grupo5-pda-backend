const express = require('express');
const alterandoUsuarioController = require('../controllers/usuarios/alterandoUsuarioController');
const criandoUsuarioController = require('../controllers/usuarios/criandoUsuarioController');
const deletandoUsuarioController = require('../controllers/usuarios/deletandoUsuarioController');
const pegandoUsuarioController = require('../controllers/usuarios/pegandoUsuarioController');

const usuarioRoute = express.Router();




usuarioRoute.post("/usuario", criandoUsuarioController);

usuarioRoute.get("/usuario", pegandoUsuarioController);

usuarioRoute.put("/usuario/:id", alterandoUsuarioController);

usuarioRoute.delete("/usuario/:id", deletandoUsuarioController);

module.exports = usuarioRoute




