
// const express = require("express"); // importing express
// const app = express(); // instance creation

// app.listen(3000, () => {
//  console.log("app is running successfully ");
//  // this is a bad practice but here we are only checking further we will not do so.
// })

const express = require("express");
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import routes for Todo API
const todoRoutes = require("./routes/todos");

// mount the todo API routes version ke leye likhe hai bs kuch need nhi hai 
app.use("/api/v1", todoRoutes);

// start server
app.listen(PORT, () => {
  console.log(`server started successfully at ${PORT}`);
})

// connect to the database
const dbConnect = require("./config/database");
dbConnect();

// default Route
app.get("/", (req,res) => {
  res.send(`<h2> This is HOMEPAGE baby</h1>`);
})
