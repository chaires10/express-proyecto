const express = require('express')
const app = express();

// CONFIGURACIONES

app.use(express.json()) // uso de JSON en Body
app.use(express.urlencoded({ extended : true})) // envio de parametros url


// RUTAS (ENDPOINTS) y Metodos

// app.get('/home', (request,response) => {
//     response.send("Hola estas en Home")
// })

// parametro en url :nombre
// app.get('/usuarios/:nombre', () => {
//     console.log(request.params)
// })


// querys

// app.get('/mascota', (request,response) =>{
//     console.log(request.query);

// })


// listen siempre va al final

app.listen(3000, () => {
    console.log ("La aplicacion esta corriendo en localhost:3000");
})


