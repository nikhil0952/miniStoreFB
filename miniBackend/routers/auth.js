const express = require("express");
const router = express.Router();
const Authentication = require("../middleware/Authentication.js");

// importing controllers 
const {register} = require("../controllers/register.js")
const {login} = require("../controllers/login.js")


//using routers
router.post("/register",register);
router.post("/login",login);

router.get("/cart",Authentication,(req,res)=>{
    
    res.send(req.rootuser);
});

router.get("/logout",(req,res)=>{
    console.log("hello");
    res.clearCookie("jwtcookie");
    res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;