const express = require('express');
const { displayProducts, displayProduct } = require('./getProducts')
const app = express();

app.get(`/api/products/:idNum`, displayProduct);
app.get("/api/products", displayProducts);


app.listen(2020, () => {});