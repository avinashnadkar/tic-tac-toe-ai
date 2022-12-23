const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3001
const path = require('path');

//express middlewares
// serve your css as static
app.use(express.static(__dirname + '/view'));


//load index page
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+'/view/index.html'));
})

//run server on port
app.listen(port,()=>{
    console.log(`App is running on ${port}`)
})