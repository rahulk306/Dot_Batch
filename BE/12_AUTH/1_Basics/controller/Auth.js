const bcrypt = require("bcrypt");
const user = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// signup route handler

exports.signup = async (req, res) => {
  try{
      // get data
      const{name, email, password, role} = req.body;
      // check if user allready exist
      const existingUser = await user.findOne({email});

      if(existingUser){
        return res.status(400).json({
            success:false,
            message:"user allready exists",
        });
      }

      // secure password
      let hashedPassword;
      try{
          hashedPassword = await bcrypt.hash(password, 10); // 10 is number of rounds in hashing
      }
      catch(err){
        return res.status(500).json({
            success:false,
            message:"Error in hashing Password",
        });
      }

      // create entry for user
      const userdb = await user.create({
        name,email,password:hashedPassword,role
      })

      return res.status(200).json({
        success:true,
        message: "user created successfully",
      });

  }
  catch(error){
      console.log(error);
      return res.status(500).json({
        success:false,
        message:"user cannot be registered, please try againn later !!",
      });
  }

}


// login handler

exports.login = async (req, res) => {
  try{
      // data fetch 
      const {email, password} = req.body;
      // vadidation on email and password
      if(!email || !password){
        return res.status(400),json({
          success:false,
          message:'Please fill all the details carefully',
        })
      }

      // check for registered user
      let userdb = await user.findOne({email});
      // if not a registered user
      if(!userdb){
        return res.status(401).json({
          success:false,
          message:'user is not registered',
        })
      }

      const payload = {
        email : userdb.email,
        id : userdb._id,
        role : userdb.role,
      }

      // verify password & generate a JWT token
      if(await bcrypt.compare(password, userdb.password)){
        // password match
        let token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"2h"});

        userdb = userdb.toObject();
        userdb.token = token;
        userdb.password = undefined; // yha user ke object me se password undefined kr rhe na ki database me se

        const options = {
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          httpOnly:true, // client side change nhi hoga
        }

        res.cookie("token ka naam", token, options).status(200).json({
          success:true,
          token,
          userdb,
          message:'User Loggen In Successfully',
        });

      }
      else{
        // password do not match
        return res.status(403).json({
          success:false,
          message:'incorrect password',
        })
      }

  }
  catch(err) {
    console.log(err);
    return res.status(500).json({
      success:false,
      message:'login failure',
    });
  }
}