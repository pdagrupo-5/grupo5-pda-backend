const express = require('express');
const app = express();
const port = 3000;
require('dotenv/config');

app.use(express.json());

app.post("/usuario", async (req,res)=>{
    console.log(req.body);
    const db = require('../connection/db');
    const user = require('../models/usuario');
    //verifica se existe essa tabela no banco caso nao exista ele cria
    await db.sync()
    const {nome , email , rg , datanasc  } = req.body
    //desestruturacão
    const newuser = await user.create({
        nome , email , rg , datanasc
    });
    console.log(newuser)
    return res.status(201).json({user: newuser})
});

app.get("/usuario", async (req,res)=>{
    let usuario = require('../models/usuario');
    const usuarios = await usuario.findAll();
    return res.status(200).json({usuarios: usuarios})
});

app.put("/usuario/:id", async (req,res)=>{
    let usuario = require('../models/usuario');
    const id = req.params.id;
    const { nome, email } = req.body;
    const pessoa = await usuario.findByPk(id); 
    await usuario.update({
      nome: nome || pessoa.nome,
      email: email || pessoa.email
    }, { where: { id: id }});
    const usuarioAtualizado = await usuario.findByPk(id);
    return res.json({usuario: usuarioAtualizado});
  });
  

app.listen(port, ()=>{
    console.log('Server is runner🚀');
})




