const deletandoVeiculoController = async (req, res) => {
    let veiculo = require("../../models/veiculo")
    const id = req.params.id;
    const carro = await veiculo.findByPk(id);
    await veiculo.destroy({
        where: {
            idveiculo: id
        }
    });
    return res.json({ mensagem: "Usuario deletado com sucesso!", veiculo: carro });
}

module.exports = deletandoVeiculoController;