const mongoose = require("mongoose");
require("dotenv").config();


exports.connect = () => {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  .then( () => {console.log("DB connection successfull")})
  .catch( (err) => {
    console.log("DB connection error");
    console.error(err);
    process.exit(1);
  })
}


