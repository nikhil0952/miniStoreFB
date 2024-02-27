const express = require("express");
const User = require("../models/registerModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.login = async (req, res) => {
    try {

        //destructuring data frim req body
        const { Email, Password } = req.body;

        // validations
        if (!Email || !Password) {
            return res.status(400).json({
                success: false,
                message: "Enter values !!"
            });
        }

        // getting user data
        const userData = await User.findOne({ Email })
        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "Not able to retrieve data!!"
            });
        }

        // checking password
        const isPasswordCorrect = await bcrypt.compare(Password, userData.Password);

        if (!isPasswordCorrect) {
            console.log("Incorrect password")
            return res.status(401).json({
                success: false,
                message: "Wrong Password!!"
            });
        }



        //creating jwt token and adding in cookie
        const jwttoken = jwt.sign(
            {
                _id: userData._id,
                Email: userData.Email,
            },
            process.env.JWT_KEY,
            {
                expiresIn: 100000
            }
        )
        console.log(jwttoken);
        //Adding jwt to cookie
    
        const options = {
            
            expires:new Date(Date.now()+25892000000)
        }
        return res
            .status(200)
            .cookie("jwtcookie", jwttoken, options)
            .json({
                success:true,
                data:userData,
                token:jwttoken,
                message:"successfull!!"
            })

    } catch (error) {
        return res.status(error.code||500).json({
            success: false,
            message: error
        })
    }
}