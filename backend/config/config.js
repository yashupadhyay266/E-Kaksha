const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const url = `mongodb+srv://rajsanghavi:${process.env.MONGO_DB_PASSWORD}@fullstacksimplified.szczh.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;
    //const url = process.env.MONGO_URL
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Database Successfully Connected");
      });
  } catch (error) {
    console.log("Error connecting to Database");
    process.exit(1);
  }
};

module.exports = connectDB;
