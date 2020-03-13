const express = require('express')
const app = express();
const request = require('request');

app.use(express.json())
app.use(express.urlencoded({ extended : true}))

// 1.- Agrega un endpoint '/api/' que responda a 
// una petición de tipo GET con un código de estado 200 
// y el siguiente json: 
//             {'mensaje':'hola mundo'}

app.get('/api/', (request, response) => {
    response.status(200).send({'mensaje': 'Hola Mundo'})
})


// 2.- Agrega un endpoint '/api/suma' que responda a una 
// petición de tipo GET con la suma de dos números que 
// reciba mediante las querys num1 y num2. El servidor
// debe responder con un código de estado 200 y un json 

// como el siguiente:
//                 {'resultado': 7}


app.get('/api/suma', (request, response) => {
   let {num1 , num2} = request.query;
   let resultado = (parseInt(num1) + parseInt(num2));
   response.send({'resultado': resultado})   
})


// 3.- Agrega un endpoint '/api/usuario/' que responda a
// una petición de tipo GET con el nombre que sea 
// recibido a través de params. El servidor debe responder
// con un código de estado 200 y un json como este:
//               {'usuario': 'Edwin'}


app.get('/api/usuario/:nombre', (request,response) => {
    console.log(request.params);
    response.send('usuario ' + request.params.nombre)
})

// 4.- Agrega un endpoint '/api/swapi' que responda a una
// petición de tipo GET con el personaje solicitado de 
//                 https://swapi.co/
// El cliente debe mandar el número de personaje mediante
// params. La respuesta del servidor debe lucir algo así
//             {'personaje': {
//                 'name': 'Luke Skywalker',
//                 ...,
//             }}


app.get('/api/swapi/:id', (req, response) => {
    let {people} = req.params.id;
    let uno;
    request.get(`https://swapi.co/api/people/${people}/` , (err, res, body) => {
    uno = JSON.parse(body);  
    response.send({'personaje': uno}) 
    })    
})








app.listen(3000, () => {
    console.log("Corriendo en localhost:3000")
})