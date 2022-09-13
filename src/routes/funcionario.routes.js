const express = require('express');

const criandoFuncionarioController = require('../controllers/funcionario/criandoFuncionarioController');
const pegandofuncionarioController = require('../controllers/funcionario/pegandofuncionariocontroller');
const alterandoFuncionarioController = require('../controllers/funcionario/alterandoFuncionarioController');
const apagandoFuncionarioController = require('../controllers/funcionario/apagandoFuncionarioController');

const funcionarioRouter = express.Router()



funcionarioRouter.post("/funcionario", criandoFuncionarioController)
funcionarioRouter.get("/funcionario", pegandofuncionarioController)
funcionarioRouter.put("/funcinario/:id", alterandoFuncionarioController)
funcionarioRouter.delete("/funcionario/:id", apagandoFuncionarioController)







module.exports = funcionarioRouter