const express = require('express');
const { displayProducts } = require('./getProducts')
const app = express();

app.get("/api/products", displayProducts)


app.listen(2020, () => console.log("Working!"));