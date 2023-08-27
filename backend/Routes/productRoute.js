const express = require('express');
const {
  getAllProducts,
  addProducts,
  updateProduct,
  DeleteProduct,
  getOneProduct,
} = require('../Controllers/ProductController');
const route = express.Router();

route.get('/get', getAllProducts);
route.post('/addProducts', addProducts);
route.post('/getProduct', getOneProduct);

route.put('/:id', updateProduct);
route.delete('/:id', DeleteProduct);

module.exports = route;
