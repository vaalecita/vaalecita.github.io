//este codigo es un servidor de Node.
const express = require ('express');
const app = express();
const path = require('path');
const router = express.Router();
//se importa la libreria Express y se crea una aplicacion de express llamada "app"
app.use(express.json());
app.use(express.urlencoded({extended: true}));

router.get("/", (req, res) =>{
        res.sendFile(path.join(_dirname + '/index.html'))
});
router.get("/contacto", (req, res) => {
        res.sendFile(path.join(_dirname + '/templates/contacto.html'))
});
router.get("/perfil", (req, res) => {
        res.sendFile(path.join(_dirname + '/templates/perfil.html'))
});

router.post("/", (req, res) => {
        res.send("el usuario "+ req.body.first_name + " ha sido registrado.");
})
app.use ("/", router);
app.listen(process.env.port || 8080);

console.log("Activo en el puerto 8080");