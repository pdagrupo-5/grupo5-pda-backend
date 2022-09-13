const alterandoUsuarioController = async (req,res)=>{
    let usuario = require('../../models/usuario');
    const id = req.params.id;
    const {nome, datanasc,email,rg} = req.body;
    const pessoa = await usuario.findByPk(id); 
    await usuario.update({
      nome: nome || pessoa.nome,
      datanasc: datanasc || pessoa.datanasc,
      email: email || pessoa.email,
      rg: rg || pessoa.rg
    }, { where: { id: id }});
    const usuarioAtualizado = await usuario.findByPk(id);
    return res.json({ mensagem: "Usuario ATUALIZADO com sucesso!",usuario: usuarioAtualizado});
}

module.exports = alterandoUsuarioController;