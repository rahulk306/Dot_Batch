// this file is for stablishing the connection between the database and the application
// here we have built a function and we call the function whenever we have to establish the connection, usually we set up the connection only once. 

const mongoose = require("mongoose");

require("dotenv").config(); // jo bhi environemnt ke andr define hoga wo load ho jyega process object ke andr

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then( () => console.log("DB ka connection successful go gya hai"))
    .catch( (error) => {
         console.log("issue in DB connection");
         console.error(error.message);
         procecc.exit(1);
    });
}

module.exports = dbConnect;