const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const cors = require('cors');



const { createServer } = require("http");
const { Server } = require("socket.io");

 const httpServer = createServer(app);
const io = new Server(httpServer,{ cors: { origin:  'http://localhost:5173' } });

const fileupload=require("express-fileupload")


dotenv.config({path:"backend/config/config.env"})

app.use((req, res, next) => {
  req.io = io;
  next();
});


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
const assignmentRoute = require('./routes/assignmentRoute');

app.use("/api/v1", user);
app.use("/api/v1", teacherRoutes);

app.use('/api/v1', chatRoutes);
app.use('/api/v1', messageRoutes);
app.use('/api/v1', assignmentRoute );

app.use(errorMiddleware);




module.exports = {app,httpServer,io} ;
