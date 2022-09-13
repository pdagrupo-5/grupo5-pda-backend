const criandoUsuarioController = async(req,res) => {
    console.log(req.body);
    const db = require('../../connection/db');
    const user = require('../../models/usuario');
    //verifica se existe essa tabela no banco caso nao exista ele cria
    await db.sync()
    const {nome, datanasc,email,rg } = req.body
    //desestruturacão
    const newuser = await user.create({
        nome , datanasc, email, rg 
    });
    console.log(newuser)
    return res.status(201).json({user: newuser});
}

module.exports = criandoUsuarioController;