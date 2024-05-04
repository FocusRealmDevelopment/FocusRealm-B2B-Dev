const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("DB connection successful"))
    .catch((error) => {
      console.log("Error in connecting db: ", error);
    });
};

module.exports = connectDatabase;
