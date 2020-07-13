const express = require('express');
const router = express.Router();

const Products = require('../models/Tickets');
const Tickets = require('../models/Tickets');

//Post
router.post('/api/tickets', (req, res) => {
    const { body } = req;
    //if(body.Products || body.Products)
    const newTickets = new Tickets(body);
    newTickets.save()
        .then(resMongo => res.status(201).json(resMongo))
        .catch(err => res.status(400).json(err));
});

//Get
router.get('/api/tickets', (req, res) => {
    Tickets.find()
        .then(resMongo => res.status(200).json(resMongo))
        .catch(err => res.status(400).json(err));
});

//Get
router.get('/api/tickets/:id', (req, res) => {
    Tickets.findById(req.params.id)
        .then(resMongo => res.status(200).json(resMongo))
        .catch(err => res.status(400).json(err));
});

//Patch
router.patch('/api/tickets/:id', (req, res) => {
    Tickets.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(resMongo => res.status(200).json(resMongo))
        .catch(err => res.status(400).json(err));
});

//Delete
router.delete('/api/tickets/:id', (req, res) => {
    Tickets.findByIdAndDelete(req.params.id)
        .then(resMongo => res.status(204).json(resMongo))
        .catch(err => res.status(400).json(err));
});


router.patch('/api/tickets/:id/checkout', (req, res) => {
    const { id } = req.params;
    Tickets.findById(id)
        .populate('products')
        .then((ticket) => {
            const prices = ticket.Products.map((product) => product.prices);
            const subtotal = ticket.Products.map((total, price) => total + price, 0);
            const taxes = subtotal * 0.12;
            const total = subtotal + taxes;
            return Tickets.findByIdAndUpdate(id,{subtotal,taxes,total},{new:true});
        })
        .then(ticketCheckout => res.status(200).json(ticketCheckout))
        .catch(err => res.status(400).json(err));
});


module.exports = router;