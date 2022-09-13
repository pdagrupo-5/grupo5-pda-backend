const deletandoUsuarioController = async (req, res) => {
    let usuario = require("../../models/usuario")
    const id = req.params.id;
    const pessoa = await usuario.findByPk(id);
    await usuario.destroy({
        where: {
            id: id
        }
    });
    return res.json({ mensagem: "Usuario deletado com sucesso!", usuario: pessoa });
}

module.exports = deletandoUsuarioController;