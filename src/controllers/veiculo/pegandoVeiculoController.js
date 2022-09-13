const pegandoVeiculoController = async (req,res)=>{
    let veiculo = require('../../models/veiculo');
    const carro = await veiculo.findAll();
    return res.status(200).json({veiculo: carro})
}

module.exports = pegandoVeiculoController;