const alterandoEstadoController = async (req,res)=>{
  let Estado = require('../../models/Estado');
  const id = req.params.id;
  const {idestado, entrada , saida} = req.body;
  const UF = await Estado.findByPk(id); 
  await Estado.update({
    idestado: idestado || UF.idestado,
    entrada: entrada || UF.entrada,
    saida: saida || UF.saida
  }, { where: { id: id }});
  const EstadoAtualizado = await Estado.findByPk(id);
  return res.json({ mensagem: "Estado ATUALIZADO com sucesso!",Estado: EstadoAtualizado});
}

module.exports = alterandoEstadoController;