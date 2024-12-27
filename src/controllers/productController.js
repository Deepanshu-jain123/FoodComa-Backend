const { createProduct } = require('../services/productService')
async function addProduct(req, res){

    try{
        if(req.file.path){
        const product = await createProduct({
            productName: req.body.productName,
            description: req.body.description,
            imagePath : req.file.path,
            price: req.body.price,
            category: req.body.category,// if category is undefinded , veg will be stored
            inStock : req.body.inStock // if inStock is undefined then true will be stored

        });
    }
        return res.status(201).json({
            success : true,
            message : 'Successfully created the product',
            error : {},
            data : product
        });
    }catch(error){
        console.log(error);
        return res.status(error.statusCode).json({
            success : false,
            message : error.reason,
            data : {},
            error : error

        })
    }
}

module.exports = {
    addProduct
}


    // //req.file data about uploaded file
    // console.log(req.file)
    // const result = await cloudinary.uploader.upload(req.file.path)
    // console.log("result from cloudinary", result)
    // await fs.unlink(req.file.path);
    // // delete from server file means in folder
    // return res.json({message: 'ok'})



//     const { createProduct } = require('../services/productService');

// async function addProduct(req, res) {
//     try {
//         if (!req.file) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Image file is required',
//                 error: {},
//                 data: {}
//             });
//         }

//         const product = await createProduct({
//             productName: req.body.productName,
//             description: req.body.description,
//             imagePath: req.file.path,
//             price: req.body.price,
//             category: req.body.category || 'veg', // Default category
//             inStock: req.body.inStock !== undefined ? req.body.inStock : true // Default inStock
//         });

//         return res.status(201).json({
//             success: true,
//             message: 'Successfully created the product',
//             error: {},
//             data: product
//         });
//     }catch(error) {
//         console.error('Error in addProduct:', error);

//         return res.status(error.statusCode || 500).json({
//             success: false,
//             message: error.reason || 'An unexpected error occurred',
//             error,
//             data: {}
//         });
//     }
// }

// module.exports = {
//     addProduct
