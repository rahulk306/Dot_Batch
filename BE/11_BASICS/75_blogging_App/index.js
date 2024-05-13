// const express = require("express");
// const app = express();

// app.listen(3000, () => {
//   console.log("App is running successfully");
// })

// app.get("/", (req, res) => {
//   res.send(`<h2> This is home page</h2>`)
// })

const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// fetch routes
const blog = require("./routes/blog");
const { connect } = require("mongoose");

app.use("/api/v1", blog);

// database se connection krna hai
const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT, () => {
  console.log(`App is started ap Port no ${PORT}`);
})

app.get("/", (req,res) => {
  res.send("this is home page prasad");
})