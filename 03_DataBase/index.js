//Configuracion
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

//Endpoints
app.get('/', (req, res) => res.status(200).json({ messaje: " it's alive!" }));

//CRUD
//Create
app.post('/api/animales', (req, res) => {
    //1: Recibir el animal que se quiere crear en la bd
    //2: Pedirle a la bd que guarde el nuevo animal
    //3: Con la respuesta recibimos de la bd, le respondemos al cliente
    const animal = { id: 'A1', nombre: 'Firulais', edad: 4 };
    res.status(201).json({ animal })
});
//Read
//Update
//Delete

//Encender el servidor
app.listen(PORT, () => console.log(`Listening on ${PORT}`));