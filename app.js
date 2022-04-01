const express = require("express");
const port = 3800;
const app = express()

app.get("/Home", (req, res) => {
    res.send("Pagina")
});

app.get("/Sobre", (req, res) => {
    res.send("Pagina dizendo mais sobre o produto")
});

app.get("/Termos", (req, res) => {
    res.send("Termos:")
});

app.listen(port, () => {
    console.log("ta funcionando")
});

app.get( '/Cadastro', (req, res) => {
res.send( ' Cadastro' )
});
