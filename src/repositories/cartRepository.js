const Cart = require('../schema/cartSchema');
const InternalServerError = require('../utils/internalServerError');
const NotFoundError = require('../utils/notFoundError');


async function createcart(userId){
    try {
        const newCart = await Cart.create({
            user : userId
        });
        return newCart;
    }catch(error){
        if(error.name === 'ValidationError'){
            const errorMessageList = Object.keys(error.errors).map((property)=>{
                // console.log(property, error.errors[property].message);
                return error.errors[property].message;
            })
            console.log(error)
            throw new BadRequestError(errorMessageList);
        }
    }
}

async function getCartByUserId(userId){
    try{
        const cart = await Cart.findOne({
            user : userId
        }).populate('items.product');
        return Cart;
    }catch(error){
        console.log(error);
        throw new InternalServerError();
    }
}

async function clearCart(userId){
    try{
        const cart = await cart.findOne({
            user : userId
        })
        if(!cart){
            throw new NotFoundError("Cart")
        }

        cart.items = [];

        await cart.save();

        return cart;
    }catch(error){
        throw new InternalServerError
    }
}

module.exports = {
    createcart,
    getCartByUserId,
    clearCart
}