const express = require('express');
const cartRouter = express.Router();
const { getCartByUser, modifyProductTocart, clearCartbyId } = require('../controllers/cartController.js');
const { isLoggedIn } = require('../validation/authValidator.js');


cartRouter.get('/',isLoggedIn, getCartByUser)

// cartRouter.get('/:id', getCartById);
// cartRouter.post('/add/:productId', isLoggedIn, modifyProductTocart);
// cartRouter.post('/remove/:productId', isLoggedIn, modifyProductTocart);

 cartRouter.post('/:operation/:productId', isLoggedIn, modifyProductTocart);

cartRouter.delete('/products', isLoggedIn, clearCartbyId)

cartRouter.get('/', isLoggedIn, getCartByUser);

module.exports = cartRouter;