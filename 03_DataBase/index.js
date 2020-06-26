//Configuracion
const express = require('express');
const app = express();

const PORT = 3000;
//Endpoints
app.get('/', (req, res) => res.status(200).json({ messaje: " it's alive!" }));

//Encender el servidor
app.listen(PORT, () => console.log(`Listening on ${PORT}`));