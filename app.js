const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3001
const path = require('path');
const socketio = require('socket.io');

//run server on port
const server = app.listen(port,()=>{
    console.log(`App is running on ${port}`)
})
const io = socketio(server);

//express middlewares
// serve your css as static
app.use(express.static(__dirname + '/view'));

io.on('connection', (socket) => {
    console.log('a user connected');
});


//load index page
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+'/view/index.html'));
})

