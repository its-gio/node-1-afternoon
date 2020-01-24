const express = require('express');
const { displayProducts, displayProduct } = require('./getProducts')
const app = express();

app.get("/api/products", displayProducts)
app.get(`/api/products/:idNum`, displayProduct)


app.listen(2020, () => console.log("Working!"));