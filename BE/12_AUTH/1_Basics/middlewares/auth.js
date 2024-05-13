// auth, isStudent, isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
  try{
      // extract jwt token
      // body se token nikal the hai yha -> aur bhi way hai jaise header 
      const token = req.body.token;

      if(!token){
        return res.status(401).json({
          success: false, 
          message: "Token missing",
        });
      }

      // verify the token
      try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decode);

        req.user = decode;
      }
      catch (error){
        return res.status(401).json({
          success:false,
          message:"token is invalid",
        });
      }

      next();
  }
  catch(error){
      return res.status(401).json({
        success:false,
        message:"something went wrong, while verifying the user",
      });
  }
}

exports.isStudent = (req, res, next) => {
  try{
      if(req.user.role !== "Student"){
        return res.status(401).json({
          success:false,
          message:"This is a protected route for students",
        });
      }
      next();
  }
  catch(error){
      return res.status(401).json({
        success: false,
        message: "user role is not matching",
      });
  }
};

exports.isAdmin = (req, res, next) => {
  try{
      if(req.user.role !== "Admin"){
        return res.status(401).json({
          success:false,
          message:"This is a protected route for Admin",
        });
      }
      next();
  }
  catch(error){
      return res.status(401).json({
        success: false,
        message: "user role is not matching",
      });
  }
};
