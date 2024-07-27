const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server);
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Server is running');
});


// Socket.io connection
io.on('connection', (socket) => {


    // user connection and disconnection messages
    console.log('User connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

app.listen(port, () => console.log(`Server is running on  http://localhost:${port}/`));
