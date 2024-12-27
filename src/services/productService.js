const cloudinary = require('../config/cloudinaryConfig')
const ProductRespository = require('../repositories/productRepository');
const fs = require('fs/promises')
async function createProduct(productDetails){
    //1. We should check if an image is coming to 
    // create the product , then we should first upload it an cloudinary
    const imagePath = productDetails.imagePath;
    if(imagePath){
        try{
            const cloudinaryResponse = await cloudinary.uploader(imagePath);
            var productImage = cloudinaryResponse.secure_url;
            console.log(productImage);
            await fs.unlink(process.cwd() + "/" + imagePath)
        }catch(error){
            console.log(error);
            throw{reason: 'Not able to create product', statusCode : 500}
        }
    }
    // 2. Then the url from cloudinay and other product
    // details to add product in db

    const product = await ProductRespository.createProduct({
        ...productDetails,
        productImage : productImage
    });

    if(!product){
        throw{reason: 'Not able to create product', statusCode : 500}
    }
    
    return product
}

module.exports = {
    createProduct
}