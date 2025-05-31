const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName : {
        type : String,
        required : [true, "Product Name is required"],
        minLength : [5, "Product Name must be atleast 5 charcters"],
        trim : true
    },
    description : {
        type: String,
        minlength : [5, "Product description must be atleast 5 characters"]
    },
    productImage : {
        type : String
    },
    quantity : {
        type : Number,
        required : true,
        default : 10
    },
    price : {
        type: Number,
        required : [true, "Product price is required"]
    },
    category: {
        type : String,
        enum : ['veg', 'non-veg', 'drinks', 'sides'],
        default : 'veg'
    },
    inStock: {
        type : Boolean,
        required : [true, "In Stock status is required"]
    }
},{
    timestamps: true
})

const Product = mongoose.model("Product",productSchema )
module.exports = Product;