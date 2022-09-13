const express = require("express")
const alterandoVeiculoController = require('../controllers/veiculo/alterandoVeiculoController');
const criandoVeiculoController = require("../controllers/veiculo/criandoVeiculoController");
const pegandoVeiculoController = require("../controllers/veiculo/pegandoVeiculoController");
const deletandoVeiculoController = require("../controllers/veiculo/deletandoVeiculoController");







const veiculoRoute = express.Router()

veiculoRoute.put("/veiculo/:id", alterandoVeiculoController)
veiculoRoute.post("/veiculo", criandoVeiculoController)
veiculoRoute.get("/veiculo", pegandoVeiculoController)
veiculoRoute.delete("/veiculo/:id", deletandoVeiculoController)















module.exports = veiculoRoute