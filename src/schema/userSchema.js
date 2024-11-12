const mongoose = require('mongoose')


// it is server level not mongodb 
const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required:[true, "First Name is required"],
        minlength: [5, "First name must be atleast 5 character long"],
        lowercase:true,
        trim: true,// if the user gives extra spaces then it will automatically remove it
        maxlength: [20, "First name should be less than or equal to 20 characters"]
    },
    lastName : {
        type:String,
        required:[true, "First Name is required"],
        minlength: [5, "First name must be atleast 5 character long"],
        lowercase:true,
        trim: true,// if the user gives extra spaces then it will automatically remove it
        maxlength: [20, "First name should be less than or equal to 20 characters"]
    },

    mobileNumber :{
        type:String,
        trim: true,
        maxlength: [10, "Phone number should be of length 10"],
        minlength: [10, "Phone number should be of length 10"],
        unique: [true, "Phone number is already in use"],
        required: [true, "Phone number should be provide"]
    }, 
    email: {
        type: String,
        trim: true, 
        required: [true, "Email should be provided"],
        unique: [true, "Email is already in use"],
        match: [/([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g],
    },
    password : {
        type: String,
        required: [true, "Password should be provided"],
        minlength: [6, "Password should be minimum 6 character long"]
    }
},{
    timestamps: true
});

const User = mongoose.model("User", userSchema);
module.exports = User;
// all details of userSchema present in User object
//firstName is property
//details type
// firstName is important at level of mongoose not mongodb
// validation is type, required, 

// model is called collection