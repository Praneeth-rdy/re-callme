require('dotenv').config({path: './config.env'});

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');

const socket = require('socket.io');

io = socket(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

app.use(cors());


const PORT = process.env.PORT || 5050;
app.get('/', (request, response) => {
    response.send('Server is running.');
});

io.on('connection', (socket) => {
    socket.emit('me', socket.id);

    socket.on('disconnect', () => {
        socket.broadcast.emit('callended');
    });

    socket.on('calluser', ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit('calluser', { signal: signalData, from, name });
    });

    socket.on('answercall', (data) => {
        io.to(data.to).emit('callaccepted', data.signal);
    });
});

server.listen(PORT, () => console.log(`server listening on port ${PORT}`));
