const criandoVeiculoController = async(req,res) => {
    console.log(req.body);
    const db = require('../../connection/db');
    const user = require('../../models/veiculo');
    //verifica se existe essa tabela no banco caso nao exista ele cria
    await db.sync()
    const {nome, ano,cor,placa,propietario} = req.body;
    //desestruturacão
    const newuser = await user.create({
        nome ,ano, cor, placa, propietario
    });
    console.log(newuser)
    return res.status(201).json({user: newuser});
}

module.exports = criandoVeiculoController;