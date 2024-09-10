const express = require('express');
const app = express();

const arregloUsuarios = {
    usuarios: [
        "juan",
        "maria",
        "ana",
        "paula",
        "francisca"
    ]
}

app.use(express.static('public'));

app.use('/abracadabra/juego/:usuario', (req, res, next) => {
    const usuario = req.params.usuario;
    const usuarioExiste = arregloUsuarios.usuarios.find((usuarioTemporal) => {
        return usuarioTemporal == usuario
    });
    if(usuarioExiste){
        next();
    }else{
        res.sendFile(__dirname + '/public/template/who.html')
    }
});

app.get('/abracadabra/usuarios', (req, res) => {
    res.json(arregloUsuarios)
})

app.get('/abracadabra/conejo/:n', (req, res) => {
    const sombrero = req.params.n;
    const aleatorio =  Math.floor(Math.random() * (4 - 1 + 1) + 1)
    if(sombrero == aleatorio){
        res.sendFile(__dirname + '/public/template/conejo.html')
    } else{
        res.sendFile(__dirname + '/public/template/voldemort.html')
    }

})

app.listen(4000);