const pegandoEstadoController = async (req,res)=>{
  let Estado = require('../../models/Estado');
  const UF = await Estado.findAll();
  return res.status(200).json({Estado: UF})
}

module.exports = pegandoEstadoController;