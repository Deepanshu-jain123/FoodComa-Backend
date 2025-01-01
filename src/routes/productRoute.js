const express = require('express');
const { addProduct, deleteProduct, getProduct } = require('../controllers/productController');
const uploader = require('../middleware/multerMiddleware');

const prouductRouter = express.Router();

prouductRouter.post('/',uploader.single('productImage'), addProduct)
prouductRouter.get('/:id', getProduct)
prouductRouter.delete('/:id',deleteProduct)
//GET /products/:id
//delete /products/:id
module.exports = prouductRouter;