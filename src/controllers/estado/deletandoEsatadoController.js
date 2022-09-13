const deletandoEstadoController = async (req, res) => {
  let Estado = require("../../models/Estado")
  const id = req.params.id;
  const UF = await Estado.findByPk(id);
  await Estado.destroy({
      where: {
          id: id
      }
  });
  return res.json({ mensagem: "Estado deletado com sucesso!", Estado: UF });
}

module.exports = deletandoEstadoController;