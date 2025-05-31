const { model } = require('mongoose');
const { registerUser } = require('../services/userService');
const AppError = require('../utils/appError');
// const UserService = require("../services/userService");
// const UserRepository = require("../repositories/userRespository");

async function createUser(req,res){
    console.log("Create user Controller called");
    console.log(req.body);
    // register the user

    // const userService = new UserService(new UserRepository());
    // console.log(userService)
    //const response = await userService.createUser(req.body);
    try{
        const response = await registerUser(req.body); //*  
        //*const response = await userService.registerUser(req.body);
        return res.status(201).json({
            Message: 'Successfully register the user',
            success: true,
            data: response,
            error: {}
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
        return res.status(error.statusCode).json({
            success: false,
            message: error.reason,
            data: {},
            error: error
        });
    };

};
    
module.exports = {
    createUser
}