const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 9084;

app.get('/', (req, res) => {
    res.send('Server is running!');
});

io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle chat messages
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    // Handle disconnect
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// Example logout route
app.get('/logout', (req, res) => {
    // Perform logout actions, clear sessions, etc.
    // Redirect the user to the login page or any other desired destination
    res.redirect('/index.html'); // Change the URL as needed
});
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Perform authentication (replace with a more secure mechanism)
    if (authenticateUser(username, password)) {
        res.json({ success: true, username });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

// ... (existing code)

function authenticateUser(username, password) {
    // Simple authentication logic (replace with more secure authentication)
    const validUsers = ['Upendra_D', 'Ramesh_R', 'Vismaya_R', 'Vinod_K', 'Deepika_N', 'Upendra_Y'];
    return validUsers.includes(username) && password === 'DSU';
}