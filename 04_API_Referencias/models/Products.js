const mongoose = require('mongoose');
const express = require('express');
const app = express();

const schemaProducts = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        default: 25,
    },
});

//Generar un modelo a partir de schema--> Objecto que permite interactur con la coleccion
const Products = mongoose.model('Products', schemaProducts);


module.exports = Products;

