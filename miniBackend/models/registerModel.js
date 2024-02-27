const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    Name: {
        type:String,
        required: true,
        trim: true,
    },
    Mobile:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Gender:{
        type:String
    },
    Password:{
        type:String
    },
    Usertype:{
        type:String
    }
},
{
    timestamps:true
})

const User = mongoose.model("registerUser",registerSchema);
module.exports = User; 
