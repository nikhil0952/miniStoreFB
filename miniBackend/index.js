const express = require("express");
const cookieParser = require("cookie-parser")

// cors -> to connect with the frontend
const cors = require("cors");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;


app.use(cors({ origin: 'http://localhost:3000', credentials:true }));

app.use(express.json());

// to use cookie as middlewares
app.use(cookieParser());

// Routers 
const authRouter = require('./routers/auth.js');
app.use("/api/v1/auth",authRouter);


app.listen(PORT,()=>{
    console.log("Running Succesfully!!");
});




// connecting database
const dbconnect = require("./config/database.js");
dbconnect();