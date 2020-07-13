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

//Mirewalies
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));


//Endpoints
app.get('/', (req, res) => res.status(200).json({ messaje: " it's alive!" }));

//CRUD
//Create
app.post('/api/flights', (req, res) => {
    //1: Recibir el vuelo que se quiere crear en la bd  
    const { body } = req;
    console.log(body);  
    //2: Pedirle a la bd que guarde el nuevo animal
    const newFlight = new Flights(body);
    newFlight.save()
        .then((resMongo) => res.status(201).json(resMongo))
        .catch((err) => res.status(400).json(err));
});

app.get('/api/flights', (req, res) => {
    Flights.find()
        .then((resMongo) => res.status(200).json(resMongo))
        .catch((err) => res.status(400).json(err));
});

app.get('/api/flights/:id', (req, res) => {
    Flights.findById(req.params.id)
        .then((resMongo) => res.status(200).json(resMongo))
        .catch((err) => res.status(400).json(err));
});
//Update
app.patch('/api/flights/:id', (req, res) => {
    Flights.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((resMongo) => res.status(200).json(resMongo))
        .catch((err) => res.status(400).json(err));
});
//Delete
app.delete('/api/flights/:id', (req, res) => {
    Flights.findByIdAndDelete(req.params.id)
        .then((resMongo) => res.status(204).json(resMongo))
        .catch((err) => res.status(400).json(err));
});
//Encender el servidor
app.listen(PORT, () => console.log(`Listening on ${PORT}`));