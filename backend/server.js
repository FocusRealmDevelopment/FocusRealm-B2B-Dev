//httpServer,io  import these two also 
const  {app,httpServer,io} = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");



process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

dotenv.config({path:"backend/config/config.env"})
connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});




io.on("connection", (socket) => {
    console.log("new connection",socket.id)
    // // listen to a connection
  
    socket.on("joinRoom", (roomId,userId) => {
      // Handle joining the room here
      socket.join(roomId);
      console.log(`User ${socket.id} joined room ${roomId}`);
      
      // Emit an event to notify other users in the room
      io.to(roomId).emit("userJoined", { userId: socket.id });
    });
  
    socket.on("sendMessage", (message) => {
      // Handle sending messages here
      // Emit the message to the room using socket.io
      io.to(message.roomId).emit("message", { sender: socket.id, message: message.content });
    });
  
    socket.on("disconnect", () => {
      console.log(`User ${socket.id} disconnected`);
    });
  
  });


const server=httpServer.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});


process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});
