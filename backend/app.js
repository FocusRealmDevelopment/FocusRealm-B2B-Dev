const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const cors = require('cors');
const Server = require('socket.io');
const http = require('http');

const fileupload=require("express-fileupload")


dotenv.config({path:"backend/config/config.env"})

const server = http.createServer(app);
const io =(Server)(server);

app.use(express.json({
    limit: '50mb'
  }))
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload())

const corsOptions = {
    credentials: true,
     origin: 'http://localhost:5173',
};
 app.options("*", cors(corsOptions));
app.use(cors(corsOptions));

const user = require("./routes/userRoute");
const chatRoutes = require('./routes/chatRoute');
const messageRoutes = require('./routes/messageRoute');
const teacherRoutes = require('./routes/teacherRoute');

// Notification logic
io.on('connection', (socket) => {
    console.log('A user connected');

    // Example: Emit a welcome notification to the newly connected user
    socket.emit('notification', { message: 'Welcome to the chat application!' });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

app.use("/api/v1", user);
app.use("/api/v1", teacherRoutes);
app.use('/api/v1', (req, res, next) => {
    req.io = io;
    next();
}, chatRoutes);
app.use('/api/v1', (req, res, next) => {
    req.io = io;
    next();
}, messageRoutes);


app.use(errorMiddleware);

module.exports = { app, server, io };
