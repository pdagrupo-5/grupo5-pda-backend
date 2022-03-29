const express = require("express");
const port = 3800;
const app = express()

app.get("/home", (req, res) => {
    res.send("Pagina")
});

app.listen(port, () => {
    console.log("ta funcionando")
})
