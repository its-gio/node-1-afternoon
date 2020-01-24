const products = require('../products.json')

const displayProducts = (req, res) => res.status(200).json(products);
const displayProduct = (req, res) => {
  let result = products.filter(item => item.id === +req.params.idNum);

  if (result.length) {
    res.status(200).json(result)
  } else {
    res.status(404).send(`<h1>Item #${req.params.idNum} does not exist!</h1>`)
  }
}

module.exports = {
  displayProducts,
  displayProduct
}
