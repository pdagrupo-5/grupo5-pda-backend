const criandoEstadoController = async(req,res) => {
  console.log(req.body);
  const db = require('../../connection/db');
  const user = require('../../models/Estado');
  //verifica se existe essa tabela no banco caso nao exista ele cria
  await db.sync()
  const {idestado,entrada,saida} = req.body
  //desestruturacão
  const newuser = await user.create({
      idestado , entrada, saida
  });
  console.log(newuser)
  return res.status(201).json({user: newuser});
}

module.exports = criandoEstadoController;