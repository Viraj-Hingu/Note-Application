const Mongoose = require("mongoose");
const ConnectToDb = async () => {
  try {
    await Mongoose.connect(process.env.MONGO_URI);
    console.log("Connected To Database");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};
module.exports = ConnectToDb;
