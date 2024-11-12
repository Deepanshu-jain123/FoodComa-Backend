const mongoose = require('mongoose');
const serverConfig = require('./serverConfig')
// the below function helps us to connect to a mongodb server
async function connectDB() {
    try{
        await mongoose.connect(serverConfig.DB_URL);
        console.log("Successfully connected to the mongodb server");
    }catch{
        console.log("NOT able to the connect to the mongodb server");
    }
}

module.exports = connectDB;