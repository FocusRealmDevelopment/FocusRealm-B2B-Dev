const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const cors = require("cors");
const path = require("path"); // If you plan to serve static files
const errorMiddleware = require("./middleware/error");

// Load environment variables
dotenv.config({ path: "backend/config/config.env" });

// Initialize Express app
const app = express();

// Create HTTP server
const httpServer = createServer(app);

// Initialize Socket.IO
const io = new Server(httpServer, {
  cors: { origin: 'http://localhost:5173' }
});

// Middleware to attach io instance to req object
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Middleware setup
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());

// CORS setup
const corsOptions = {
  credentials: true,
  origin: 'http://localhost:5173',
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// Route imports
const Student = require("./routes/studentRoute");
const Admin = require("./routes/adminRoute");
const Teacher = require("./routes/teacherRoute");
const chatRoutes = require('./routes/chatRoutes');

app.use("/api/v1", Student);
app.use("/api/v1", Admin);
app.use("/api/v1", Teacher);
app.use("/api/v1", chatRoutes);

// Error handling middleware
app.use(errorMiddleware);

module.exports = { app, httpServer, io };
