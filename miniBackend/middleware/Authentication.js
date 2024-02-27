const User = require('../models/registerModel.js');
const jwt = require("jsonwebtoken");

const Authentication = async(req,res,next)=>{

    try{

        const token =  req.cookies.jwtcookie;
        
        const check = await jwt.verify(token,process.env.JWT_KEY);
       
        const rootuser = await User.findOne({_id : check._id})
        if(!rootuser){
            return res.status(500).json({
                success:false,
                message:"error in fethcing data from cookie...!"
            })
        }

        req.token = token;
        req.rootuser = rootuser;

        next();

    }catch(error){

        console.log(error);
        return res.status(500).json({
            success:false,
            message:"error in fethcing data from cookie...!"
        })
    }


    next();
}

module.exports = Authentication;