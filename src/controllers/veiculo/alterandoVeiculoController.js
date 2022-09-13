const alterandoVeiculoController = async (req,res)=>{
    let veiculo = require('../../models/veiculo');
    const idveiculo = req.params.id;
    const {nome, ano,cor,placa,propietario} = req.body;
    const carro = await veiculo.findByPk(id); 
    await  veiculo.update({
      nome: nome || carro.nome,
      ano: ano || carro.ano,
      cor: cor || carro.cor,
      placa: placa || carro.placa,
      propietario: propietario || carro.propietario
    }, { where: { idveiculo: id }});
    const veiculoAtualizado = await veiculo.findByPk(id);
    return res.json({ mensagem: "Usuario ATUALIZADO com sucesso!",veiculo: veiculoAtualizado});
}

module.exports = alterandoVeiculoController;