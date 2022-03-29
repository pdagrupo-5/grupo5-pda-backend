const express = require("express");
const port = 3800;
const app = express()

app.get("/home", (req, res) => {
    res.send("Pagina")
});

app.get("/Sobre", (req, res) => {
    res.send("Pagina dizendo mais sobre o produto")
});

app.listen(port, () => {
    console.log("ta funcionando")
})
