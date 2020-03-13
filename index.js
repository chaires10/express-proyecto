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


// querys (al usar querys y ponerlo en el explorador se pone = http://localhost:3000/api/suma?num1=5&num2=4 -> "despues de tu url se inicia con ? y los valores que agregaras a las variables sera con = y para pasar a otra variable se se para con &")

// app.get('/mascota', (request,response) =>{
//     console.log(request.query);

// })

// EJEMPLO POST

app.post('/api/crearUsuario', (request, response) => {
    let name = req.body.name;
})



// listen siempre va al final

app.listen(3000, () => {
    console.log ("La aplicacion esta corriendo en localhost:3000");
})


