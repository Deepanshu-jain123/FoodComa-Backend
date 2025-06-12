const express = require('express');
const { addProduct, deleteProduct, getProduct, getProducts } = require('../controllers/productController');
const uploader = require('../middleware/multerMiddleware');
const { isLoggedIn, isAdmin } = require('../validation/authValidator');
// const { uploader } = require('../config/cloudinaryConfig');

const productRouter = express.Router();

productRouter.post(
    '/',
    isLoggedIn,
    isAdmin,
    uploader.single('productImage'),
    addProduct
);
productRouter.get('/:id', getProduct)

productRouter.get('/', getProducts)

productRouter.delete('/:id',deleteProduct)
//GET /products/:id
//delete /products/:id
module.exports = productRouter;