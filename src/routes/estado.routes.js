const express = require('express');

const criandoEstadoController = require('../controllers/estado/criandoEstadoController')
const pegandoEstadoController = require('../controllers/estado/pegandoEstadoController');
const alterandoEstadoController = require('../controllers/estado/alterandoEstadoController');
const deletandoEstadoController = require('../controllers/estado/deletandoEsatadoController');

const EstadoRouter = express.Router()



EstadoRouter.post("/estado", criandoEstadoController)
EstadoRouter.get("/Estado", pegandoEstadoController)
EstadoRouter.put("/Estado/:id", alterandoEstadoController)
EstadoRouter.delete("/Estado/:id", deletandoEstadoController)







module.exports = EstadoRouter