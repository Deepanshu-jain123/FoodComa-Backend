
const dotenv = require('dotenv') // object
dotenv.config();

// HERE we are exporting all the env variables that the project uses
module.exports = {
    PORT: process.env.PORT,
    DB_URL : process.env.DB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRY: process.env.JWT_EXPIRY
}

// resposibility to env manage environment variable