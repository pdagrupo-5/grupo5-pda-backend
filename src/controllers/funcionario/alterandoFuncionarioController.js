const alterandoFuncionarioController = async (req,res)=>{
    let funcionario = require('../../models/funcionario');
    const id = req.params.id;
    const {nome, datanasc,email,rg} = req.body;
    const pessoa = await funcionario.findByPk(id); 
    await funcionario.update({
      nome: nome || pessoa.nome,
      datanasc: datanasc || pessoa.datanasc,
      email: email || pessoa.email,
      rg: rg || pessoa.rg
    }, { where: { id: id }});
    const funcionarioAtualizado = await usuario.findByPk(id);
    return res.json({ mensagem: "Usuario ATUALIZADO com sucesso!",funcionario: funcionarioAtualizado});
}

module.exports = alterandoFuncionarioController;