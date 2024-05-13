// import mongoose
const mongoose = require("mongoose");

//route handler
const commentSchema = new mongoose.Schema({
  post:{ // kis post pr comment kr the hai
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", // reference of the ppost model
  },
  user:{ // kon comment kr rha hai
    type: String,
    required:true,
  },
  body:{ // kya comment kr rha hai
    type:String,
    required:true,
  }
});

module.exports = mongoose.model("Comment", commentSchema);  // Comment naam se commentSchema ko export kr rhe hai