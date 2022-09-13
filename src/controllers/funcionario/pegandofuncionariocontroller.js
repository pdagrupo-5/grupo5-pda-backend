const pegandofuncionarioController = async (req,res)=>{
  let funcionarios = require('../../models/funcionario');
  const funcionario = await funcionarios.findAll();
  return res.status(200).json({funcionario: funcionario})
}

module.exports = pegandofuncionarioController;