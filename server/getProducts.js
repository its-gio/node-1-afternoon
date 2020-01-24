const products = require('../products.json')

function displayProducts(req, res) {
  res.status(200).json(products)
}

module.exports = {
  displayProducts
}
