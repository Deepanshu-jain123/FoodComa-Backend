const express = require('express');
const { login } = require('../controllers/authController');
// We have to initialise a router object to add routes in a new file
// router object are used for segregating your routes in different modules
const authRouter = express.Router(); // router object

authRouter.post('/login', login) ; // this is a route registration

module.exports = authRouter; // exporting the router