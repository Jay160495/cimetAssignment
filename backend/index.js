const express=require('express');
const cors = require("cors");
const path=require('path');
const app=express();
const port=8000;
require('dotenv').config();
var corsOptions = {
    origin: "*",
  };
app.use(express.urlencoded());
app.use(cors(corsOptions));
app.use('/',require('./backendRoute'));
app.listen(port,function(err){
    if(err){
        console.log("error in running the server on port");
    }
        console.log("Server successfully running on port",port);
})