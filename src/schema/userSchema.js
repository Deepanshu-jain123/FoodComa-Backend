const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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
        match: /^[A-Za-z][A-Za-z0-9]*@gmail\.com$/,
    },
    password : {
        type: String,
        required: [true, "Password should be provided"],
        minlength: [6, "Password should be minimum 6 character long"]
    }
},{
    timestamps: true
});

userSchema.pre('save', async function (){
    // Here u can modify your user before it is saved in mongodb
    //console.log("Excuting pre save hook");
    //console.log(this);
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    //console.log(this)
    console.log("Exiting pre save hook and creating a user")
})
const User = mongoose.model("User", userSchema);
module.exports = User;
// all details of userSchema present in User object
//firstName is property
//details type
// firstName is important at level of mongoose not mongodb
// validation is type, required, 

// model is called collection
//express cookies