//Configuracion
const request = require('request');
const express = require('express');
const app = express();
/* 
//Endpoints
app.get('/', (req, res,) => {
    res.send('Hello World');
});
 */
app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Hola Mundo' })
});
/* 
1.- Agrega un endpoint ‘/api/’ que responda a 
una petición de tipo GET con un código de estado 200 
y el siguiente json: 
            {‘mensaje’:‘hola mundo’}

 */
app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Hola Mundo' })
});
/*
2.- Agrega un endpoint ‘/api/suma’ que responda a una 
petición de tipo GET con la suma de dos números que 
reciba mediante las querys num1 y num2. El servidor
debe responder con un código de estado 200 y un json 
como el siguiente:
                {‘resultado’: 7}
                */

app.get('/api/suma', (req, res) => {
    const { num1, num2 } = req.query;
    const result = parseInt(num1) + parseInt(num2);
    //const num1 = parseInt(req.query.num1);
    //const num2 = parseInt(req.query.num2);
    res.status(200).json({ result });
});
/*
3.- Agrega un endpoint ‘/api/usuario/’ que responda a
una petición de tipo GET con el nombre que sea 
recibido a través de params. El servidor debe responder
con un código de estado 200 y un json como este:
{‘usuario’: ‘Edwin’}
*/
app.get('/api/usuario/:name', (req, res) => {
    const { name } = req.params;

    res.status(200).json({ name });
});
/*
4.- Agrega un endpoint ‘/api/swapi’ que responda a una
petición de tipo GET con el personaje solicitado de 
 https://swapi.co/
El cliente debe mandar el número de personaje mediante
params. La respuesta del servidor debe lucir algo así
{‘personaje’: {
 ‘name’: ‘Luke Skywalker’,
 ...,
}} */

app.get('/api/swapi/:charater', (req, res) => {
    const { character } = req.params;
    const SWAP_API = `https://swapi.dev/api/people/${character}`;
    request.get(SWAP_API, (err, ressul, body) => {
        if (ressul.statusCode === 200) {
            const json = JSON.parse(body);
            ressul.status(200).json({ character: json });
        }
    });
});

//Encender la API
app.listen(3000, () => console.log('Esta en vivo'));