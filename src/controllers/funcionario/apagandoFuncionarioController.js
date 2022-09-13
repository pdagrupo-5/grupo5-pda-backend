const funcionario = require("../../models/funcionario");

const apagandoFuncionarioController = async (req, res) => {
  let funcionarios = require("../../models/funcionario")
  const id = req.params.id;
  const pessoa = await funcionario.findByPk(id);
  await funcionario.destroy({
      where: {
          id: id
      }
  });
  return res.json({ mensagem: "Usuario deletado com sucesso!", funcionario: pessoa });
}

module.exports = apagandoFuncionarioController;