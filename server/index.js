const express = require('express');
const app = express();
const products = require('../products.json')

app.get("/api/products", (req, res) => res.status(200).json(products))

app.listen(2020, () => console.log("Working!"));