const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3001
const path = require('path');



app.listen(port,()=>{
    console.log(`App is running on ${port}`)
})