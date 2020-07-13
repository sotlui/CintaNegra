const mongoose = require('mongoose');
const express = require('express');
const { schema } = require('./Products');
const app = express();

const schemaTickets = new mongoose.Schema({
    subtotal: { type: Number, default: 0, },
    IVA: { type: Number, default: 0, },
    subtotal: { type: Number, default: 0, },
    products: [{ type: mongoose.Types.ObjectId, ref: "Products", require:true, }],
});

const Tickets = mongoose.model('Tickets', schemaTickets);


module.exports = Tickets;
