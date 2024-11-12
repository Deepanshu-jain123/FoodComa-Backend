
const dotenv = require('dotenv') // object
dotenv.config();

// HERE we are exporting all the env variables that the project uses
module.exports = {
    PORT: process.env.PORT,
    DB_URL : process.env.DB_URL
}

// resposibility to env manage environment variable