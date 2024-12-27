const express = require('express');
const { addProduct } = require('../controllers/productController');
const uploader = require('../middleware/multerMiddleware');

const prouductRouter = express.Router();

prouductRouter.post('/',uploader.single('productImage'), addProduct)

module.exports = prouductRouter;