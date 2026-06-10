const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

const mongoose = require("mongoose");

const connectMongo = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI); // DEBUG

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Mongo error:", err.message);
  }
};

connectMongo(); // IMPORTANT