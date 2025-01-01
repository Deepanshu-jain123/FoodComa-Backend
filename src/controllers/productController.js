// const { getProductById } = require('../repositories/productRepository');
const { createProduct, deleteProductById, getProductById } = require('../services/productService');
const AppError = require('../utils/appError');
async function addProduct(req, res){

    try{
        const product = await createProduct({
            productName: req.body.productName,
            description: req.body.description,
            imagePath : req.file?.path,
            price: req.body.price,
            category: req.body.category,// if category is undefinded , veg will be stored
            inStock : req.body.inStock // if inStock is undefined then true will be stored

        });
        console.log("Back to controller", product)
        return res.status(201).json({
            success : true,
            message : 'Successfully created the product',
            error : {},
            data : product
        });
    }catch(error){
        if(error instanceof AppError){
            return res.status(error.statusCode).json({
                success : false,
                message : error.message,
                data : {},
                error : error
            })
        }
        console.log(error);
        return res.status(500).json({
            success : true,
            message : 'Something went wrong ',
            data : {},
            error : error
        });
    }
}

async function getProduct(req, res){
    try{
        const response = await getProductById(req.params.id);
        return res.status(200).json({
            success : true,
            message : 'Successfully fetched the product',
            error : {},
            data : response
        })
    }catch(error){
        if(error instanceof AppError){
            return res.status(error.statusCode).json({
                success : false,
                message : error.message,
                data : {},
                error : error
            })
        }
        console.log(error);
        return res.status(500).json({
            success : true,
            message : 'Something went wrong ',
            data : {},
            error : error
        });
    }
}
async function deleteProduct(req, res){
    try{
        const response = await deleteProductById(req.params.id);
        return res.status(200).json({
            success : true,
            message : 'Successfully deleted the product',
            error : {},
            data : response
        })
    }catch(error){
        if(error instanceof AppError){
            return res.status(error.statusCode).json({
                success : false,
                message : error.message,
                data : {},
                error : error
            })
        }
        console.log(error);
        return res.status(500).json({
            success : false,
            message : 'Something went wrong ',
            data : {},
            error : error
        });
    }
}

module.exports = {
    addProduct,
    getProduct,
    deleteProduct
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
