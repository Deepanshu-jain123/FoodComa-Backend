// const { createUser } = require('../controllers/userController');
const User = require('../schema/userSchema');

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
            console.log(error)
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