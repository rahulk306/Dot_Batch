
// importing express
const express = require('express');

// Server Instantiate
// here we initiated the singel instance of express and named it app.
// here app is an instance of the server
const app = express();

// used to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');

// specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

// jo bhi server hota hai wo kisi port pr run krta hai. 
// here we gave it port no 3000 in our system.
app.listen(3000, () => {
 console.log("server started at port number - 3000");
});

// route creation of get http request
app.get('/',(request,response) => {
 response.send("we are at home page");
})

// we can create our own 
app.post('/api/cars', (request, response) => {
    console.log(request.body);
    const{name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully");
})

const mongoose = require('mongoose');
// Mongoose.js, a popular ODM (Object Data Modeling) library for MongoDB and Node.js.
// in node.js data is treated as object and in mongoDb data is treated in the form of document so to establish the mapping between these two mongoose is used.
// mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true }).then(() =>{console.log("connection successfull")})
.catch((error) => { console.log("Received an error ->", error)});