const express = require('express');
const router = express.Router();

const Products = require('../models/Products');
//Post

router.post('/api/products', (req, res) => {
    const { body } = req;
    const newProducts = new Products(body);
    newProducts.save()
        .then(resMongo => res.status(201).json(resMongo))
        .catch(err => res.status(400).json(err));
})

//Get
router.get('/api/products', (req, res) => {
    Products.find()
        .then(resMongo => res.status(200).json(resMongo))
        .catch(err => res.status(400).json(err));
});

//Get
router.get('/api/products/:id', (req, res) => {
    Products.findById(req.params.id)
        .then(resMongo => res.status(200).json(resMongo))
        .catch(err => res.status(400).json(err));
});

//Patch
router.get('/api/products/:id', (req, res) => {
    Products.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(resMongo => res.status(200).json(resMongo))
        .catch(err => res.status(400).json(err));
});

//Delete
router.get('/api/products/:id', (req, res) => {
    Products.findByIdAndDelete(req.params.id)
        .then(resMongo => res.status(204).json(resMongo))
        .catch(err => res.status(400).json(err));
});

module.exports = router;