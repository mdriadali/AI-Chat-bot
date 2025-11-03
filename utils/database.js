const mongoose = require("mongoose");

async function database() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
  console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}
module.exports = database;
