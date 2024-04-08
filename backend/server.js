const { app, server } = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

server.listen(process.env.PORT, () => {
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
