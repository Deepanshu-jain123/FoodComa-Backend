//file work server turn on
const express = require('express');
const bodyParser = require('body-parser')

const ServerConfig = require("./config/serverConfig")
const connectDB = require('./config/dbConfig')
// const PORT = process.env.PORT;

const app = express();  // Server object
// http request collect then json format can be read (means parse) bodyParseer 
// express not capable to read this format then use bodyParser
app.use(bodyParser.json()) // deselarizer = converter
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended : true}));
// express server is not perse the request body
// app.post('/ping', (req, res) => {
//     console.log(req.body)
//     return res.json({message : "pong"});
// })

app.listen(ServerConfig.PORT, async()=>{
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT} ....`)
    // console.log(process.env)
})
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