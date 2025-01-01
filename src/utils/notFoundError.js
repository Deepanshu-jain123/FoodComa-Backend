const AppError = require("./appError");

class NotFoundError extends AppError{
    constructor(resource){
        // properties: []

        // let notFoundProperties = "";
        // properties.forEach(property => notFoundProperties += `${property}`);

        super(`Not able to find ${resource}`, 404)
    }
}

module.exports = NotFoundError;
// this error is show properties is not found