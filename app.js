require("dotenv").config();
// This code sets up an Express server with a MongoDB connection and defines a simple homepage route and an error route. It also includes a function to connect to the database using Mongoose.

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
const port = 3000;
const goalRouter = require("./routes/goalRouter");

// middleware to parse JSON data from requests
app.use(express.json());
app.use(cors()) // middleware to enable CORS for all routes
// middleware to parse URL-encoded data from requests

// homepage route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to GOAL API!",
    success: true,
  });
});

app.use("/goals", goalRouter);

// error route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found!",
  });
});

const connectToDb = async () => {
  try {
    // Simulate database connection

    await mongoose.connect(process.env.MONGO_URI);
    dbName : "goal-tracker"

    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

connectToDb();