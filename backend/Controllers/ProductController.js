const Product = require('../Modals/productModal');
const asynchandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const getAllProducts = asynchandler(async (req, res) => {
  const allProducts = await Product.find();
  res.status(201).json(allProducts);
//   res.send(allProducts);
});
const getOneProduct = asynchandler(async (req, res) => {
  const OneProduct = await Product.findById(req.body.id);
  res.json(OneProduct);
});

const addProducts = asynchandler(async (req, res) => {
  const { ProductName, Price, Brand, Category, Stock, link } = req.body;

  if (!ProductName || !Price || !Category || !Stock) {
    res.status(401);
    throw new Error('please add basic details');
  }

  const product = await Product.create({
    ProductName,
    Price,
    Brand,
    Category,
    Stock,
    link,
  });
  res.status(200).json(product);
  res.send('product created');
});

const updateProduct = asynchandler(async (req, res) => {
  const { ProductName, Price, Brand, Category, Stock, link } = req.body;

  if (!ProductName || !Price || !Category || !Stock) {
    res.status(401);
    throw new Error('please add basic details');
  } else {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.json(product);
  }
});

const DeleteProduct = asynchandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  res.send('Deleted');
});

module.exports = {
  getAllProducts,
  addProducts,
  updateProduct,
  DeleteProduct,
  getOneProduct,
};
