//file work server turn on
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const ServerConfig = require("./config/serverConfig");
const connectDB = require('./config/dbConfig');
const User = require('./schema/userSchema');
const userRouter = require('./routes/userRoute');
const cartRouter = require('./routes/cartRoute');
const authRouter = require('./routes/authRoute');
const orderRouter = require('./routes/orderRoutes');
const { isLoggedIn } = require('./validation/authValidator');
// const uploader = require('./middleware/multerMiddleware');
// const cloudinary = require('./config/cloudinaryConfig');
// const fs = require('fs/promises');
// const prouductRouter = require('./routes/productRoute');
const productRouter = require('./routes/productRoute');
// const PORT = process.env.PORT;

const app = express();  // Server object

app.use(cors({
    origin: 'http://localhost:5173', // allow to server to accept request from different origin
    credentials: true // allow session cookie from browser to pass through
}));
app.use(cookieParser());
// http request collect then json format can be read (means parse) bodyParseer 
// express not capable to read this format then use bodyParser
app.use(bodyParser.json()); // deselarizer = converter
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended : true}));
// express server is not perse the request body
// app.post('/ping', (req, res) => {
//     console.log(req.body)
//     console.log(req.cookies);
//     return res.json({message : "pong"});
// })
app.get('/ping', isLoggedIn, (req, res) => {
    //controller function
    console.log(req.body)
    console.log(req.cookies);
    return res.json({message : "pong"});
})
// if your req route starts with /users then handle it using user
app.use('/users', userRouter); // connects the router to the server
app.use('/carts', cartRouter);
app.use('/auth', authRouter);
app.use('/orders', orderRouter)
app.use('/products', productRouter);

// app.post('/photo',uploader.single('incomingFile'),async (req, res)=>{
// //     //req.file data about uploaded file
//     console.log(req.file)
//     const result = await cloudinary.uploader.upload(req.file.path)
//     console.log("result from cloudinary", result)
//     await fs.unlink(req.file.path);
//     delete from server file means in folder
//     return res.json({message: 'ok'})
// })
//uploader middleware is used because image is access in this middleware
//single is used because single file is upload
// for multiple file upload used array 
//app.post('/product')
app.listen(process.env.PORT, async ()=>{
    await connectDB();
    console.log(`Server started at port ${process.env.PORT} ....`);


    // const newSchema = await User.create({
    //     email: "xde@gmail.com",
    //     password: '12345678',
    //     mobileNumber: '1334567899',
    //     firstName: 'Jonathan',
    //     lastName: 'Majors'
    // })
    // console.log(process.env)
});
// CALL BACK IS EXECUTE WHEN SERVER IS START
// http port up
// localhost:3000 comunicate browser to the server
// different different api rest, soap, graphql, grpc
// aws , assure, google
//mongodb+srv://deepanshu:<db_password>@cluster0.nblh6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// object document mapper it used to convert object type into mongo query it is build in express backend
// helps us to write normal class and object based syntax to interact with our db. we 
// write class and object based syntax and it will automatically convert that 
// syntax to the db query internally
// MVC
//mongoose depend upon mongodb        
//mongodb+srv://deepanshuj991:<db_password>@cluster0.d7vrq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// yX5LBjA5kwvi4R_
// token is not accessed by javascript because of cookies
// AWS S3  service
// cloudinary is a SDK software development kit
// fs is used to delete file update file