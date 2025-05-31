// const { createUser } = require('../controllers/userController');
const User = require('../schema/userSchema');
const BadRequestError = require('../utils/badRequestError');
const InternalServerError = require('../utils/internalServerError');

// class UserRepository{
    // async findUser(parameters){
    async function findUser(parameters){
        try{
            const response = await User.findOne({...parameters});
            return response;
        }catch(error){
            console.log(error)
        }
    }

    // }

    // async createUser(userDetails){
    async function createUser(userDetails){
        try{
            const response = await User.create(userDetails);
            return response;
        }catch(error){
            if(error.name === 'ValidationError'){
                const errorMessageList = Object.keys(error.errors).map((property)=>{
                // console.log(property, error.errors[property].message);
                    return error.errors[property].message;
                })
                console.log(errorMessageList)
                throw new BadRequestError(errorMessageList);
            }
            throw new InternalServerError();
            // console.log(error.name);
            // console.log(error.errors);
            // console.log(Object.keys(error.errors))

            // console.log(error)
        }
    }

    // }
// }

// module.exports = UserRepository;
module.exports = {
    findUser,
    createUser
}
// connection with database and run the query
// if use class function then create object then use