const express = require("express");
const User = require("../models/registerModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



exports.register = async (req, res) => {
    try {
        //destructuring data
       
        const { Name, Mobile, Email, Gender, Password ,Usertype} = req.body


        //Validations
        if ([Name, Mobile, Email, Gender, Password,Usertype].some((f) => f?.trim() === "")) {
            return res.status(500).json({
                success: false,
                message: "Please enter all the fields properly!!!"
            });
        }


        // checking user exists or not
        const existedUser = await User.findOne({ Email });

        if (existedUser) {
            return res.status(400).json({
                success: false,
                message: "User Existed !!"
            });
        }


        // Hashing the password
        let hashPassword;
        try {
            hashPassword = await bcrypt.hash(Password, 10);

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error in hashing password!"
            });
        }




        // adding data to database

        const user = await User.create({
            Name,
            Mobile,
            Email,
            Gender,
            Password: hashPassword,
            Usertype
        })

        const userData = await User.findById(user._id).select(
            "-Password"
        )

        if (!userData) {
            return res.status(500).json({
                success: false,
                message: "Error in adding data to database"
            });
        }


        return res.status(200).json({
            success: true,
            data: userData,
            message: "Successfully created!!"
        });

    } catch (error) {
        console.log("error in adding data!!");

        return res.status(500).json({
            success: false,
            message: error

        });
    }
}


