const jwt = require('jsonwebtoken');
const { JWT_SECRET, COOKIE_SECURE, FRONTEND_URL } = require('../config/serverConfig');
const UnAuthorisedError = require('../utils/unauthorisedError');



async function isLoggedIn(req, res, next){
    console.log("Inside isLoggedIn", req.cookies)
    const token = req.cookies["authToken"];
    if(!token){
        return res.status(401).json({
            success: false,
            data: {},
            error: "Not authenticated",
            message: "No Auth Token provided"
        })
    }
    
    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log(decoded);
  
        if(!decoded){
            throw new UnAuthorisedError();
        }
    //if reached here, then user is authentecated allow them to access the api
        req.user = {
            email : decoded.email,
            id : decoded.id,
            role : decoded.role
        }
        next();
    }catch(error){
        if(error.name === "TokenExpiredError"){
            res.cookie("authToken", "", {
            httpOnly: true,
            sameSite: "lax",
            secure: COOKIE_SECURE,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            domain: FRONTEND_URL
            })
    
            return res.status(200).json({
            success: true,
            message: 'Log out successfully',
            data: {},
            error: {}
            })
        }
        return res.status(401).json({
            success: false,
            data: {},
            error: error,
            message: "Invalid Token provided"
        });
    }
}
/**
 * This function checks if the authenticated user is an admin or not?
 * Because we will call isAmin after isLoggedIn thats why we will receive user details
 */
function isAdmin(req, res, next){
    const loggedInUser = req.user;
    if(loggedInUser.role === "ADMIN"){
        next();
    }else{
        return res.status(401).json({
            success : false,
            data : {},
            message : "You are not authorised for this action",
            error : {
                statusCode : 401,
                reason : "Unauthorised user for this action"
            }
        })
    }

}
module.exports = {
    isLoggedIn,
    isAdmin
}
// client -> middleware -> controller