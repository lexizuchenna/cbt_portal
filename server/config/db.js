const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const db = mongoose.connection;

const connectDB = async (mongoURI) => {
  try {
    if (process.env.MODE === "DEVELOPMENT") {
         mongoose.connect(mongoURI, { useNewUrlParser: true });
        db.once("open", (_) => {
          console.log("Database connected:");
        });
        db.on("error", (err) => {
          console.error("connection error:", err);
        });
    //   const conn = await mongoose.connect(mongoURI);
    //   console.log(`MongoDB Connected in ${conn}`);
    } else {
      const conn = await mongoose.connect(mongoURI);
      console.log(`MongoDB Connected in ${conn}`);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
