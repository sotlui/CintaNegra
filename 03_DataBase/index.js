//Configuracion
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

//Conectar a nuestra base de datos
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch(() => console.log('Error connecting'));

//Crear nuestros modelos schemas con los que van utilizados con nuestras colecciones.
//ODM Object Document Mapping

/* Un aeropuerto busca controlar los vuelos que llegan al lugar, desea conocer los vuelos que existen, a qué aerolínea pertenecen, las características del avión y el lugar de procedencia. Ayuda al aeropuerto a solucionar su problema.
 */
//Generar schema--> definicion de las reglas de una coleccion
const schema = new mongoose.Schema({
    ariline: {
        type: String,
        required: true,
    },
    aircraft_name: {
        type: String,
        required: true,
    },
    aircraft_model: Number,
    fligth_from: {
        type: String,
        required: true,
    },
});
//Generar un modelo a partir de schema--> Objecto que permite interactur con la coleccion

const Flights = mongoose.model('Flights', schema);


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