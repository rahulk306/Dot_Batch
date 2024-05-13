const express = require("express");
const router = express.Router();

const {login, signup} = require("../controller/Auth");
const {auth, isStudent, isAdmin} = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);

// testing protected routes for single middlewares
router.get("/test", auth, (req,res) => {
  res.json({
    success:true, 
    message: "Welcome to the Protected route for TESTS",
  });
});

// protected route
router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true, 
    message:'Welcome to the protected route for students',
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to the Proteced route for Admin',
  });
});

module.exports = router;