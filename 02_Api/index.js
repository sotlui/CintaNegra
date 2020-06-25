//Configuracion
const express = require('express');
const app = express();

//Endpoints
app.get('/', (req, res,) => {
    res.send('Hello World');
});

//Encender la API
app.listen(3000, () => console.log('Esta en vivo'));