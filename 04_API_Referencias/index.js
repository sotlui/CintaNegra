require('dotenv').config();
require('./mongoClient/index');
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

const Products = require('./models/Products');
const Tickets = require('./models/Tickets');
const { json } = require('express');

//app.get('/', (req, res) => res.json({ message: "It's alive!" }));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

//Crud Products
app.use(require('./routes/ProductRoutes'));
//Crud Tickets
app.use(require('./routes/TicketRoutes'));
/* //Post
app
    .route('/api/products')
    .post((req, res) => {
    const { body } = req;
    const newProducts = new Products(body);
    newProducts.save()
        .then(resMongo => res.status(201).json(resMongo))
        .catch(err => res.status(400).json(err));
})

//Get
app.get('/api/products', (req, res) => {
    Products.find()
        .then(resMongo => res.status(200).json(resMongo))
        .catch(err => res.status(400).json(err));
});

//Get
app.get('/api/products/:id', (req, res) => {
    Products.findById(req.params.id)
        .then(resMongo => res.status(200).json(resMongo))
        .catch(err => res.status(400).json(err));
});

//Patch
app.get('/api/products/:id', (req, res) => {
    Products.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(resMongo => res.status(200).json(resMongo))
        .catch(err => res.status(400).json(err));
});

//Delete
app.get('/api/products/:id', (req, res) => {
    Products.findByIdAndDelete(req.params.id)
        .then(resMongo => res.status(204).json(resMongo))
        .catch(err => res.status(400).json(err));
});

//Tickes
//Post
app.post('/api/tickets', (req, res) => {
    const { body } = req;
    const newTickets = new Tickets(body);
    newTickets.save()
        .then(resMongo => res.status(201).json(resMongo))
        .catch(err => res.status(400).json(err));
});

//Get
app.get('/api/tickets', (req, res) => {
    Tickets.find()
        .then(resMongo => res.status(200).json(resMongo))
        .catch(err => res.status(400).json(err));
});

//Get
app.get('/api/tickets/:id', (req, res) => {
    Tickets.findById(req.params.id)
        .then(resMongo => res.status(200).json(resMongo))
        .catch(err => res.status(400).json(err));
});

//Patch
app.get('/api/tickets/:id', (req, res) => {
    Tickets.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(resMongo => res.status(200).json(resMongo))
        .catch(err => res.status(400).json(err));
});

//Delete
app.get('/api/tickets/:id', (req, res) => {
    Tickets.findByIdAndDelete(req.params.id)
        .then(resMongo => res.status(204).json(resMongo))
        .catch(err => res.status(400).json(err));
}); */

app.listen(PORT, () => console.log(`Listening on ${PORT}`));