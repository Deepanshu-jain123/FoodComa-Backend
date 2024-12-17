const mongoose = require('mongoose');
const serverConfig = require('./serverConfig');
// the below function helps us to connect to a mongodb server
async function connectDB() {
    try{
        await mongoose.connect(serverConfig.DB_URL)
        console.log("Successfully connected to the mongodb server");
    }catch(err){
        console.log("NOT able to the connect to the mongodb server:", err);
    }
}

module.exports = connectDB;
// const mongoose = require('mongoose');
// const serverConfig = require('./serverConfig');

// // Function to connect to MongoDB
// const connectDB = async () => {
//   try {
//     await mongoose.connect(serverConfig.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log("Connected to MongoDB Atlas!");
//   } catch (err) {
//     console.error("Connection error:", err);
//   }
// };

// module.exports = connectDB;