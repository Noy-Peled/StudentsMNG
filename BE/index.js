const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 8080;

// connnection to MERN DB
mongoose
  .connect("mongodb://127.0.0.1:27017/MERN")
  .then(() => console.log("connected to db"));

// middlewares
app.use(cors());
app.use(express.json());

//routers
const studentController = require("./controllers/studentController");
app.use("/api/students", studentController);

// listen to app in the port 8080
app.listen(port, () => {
  console.log(`app started lisiting in ${port}`);
});
