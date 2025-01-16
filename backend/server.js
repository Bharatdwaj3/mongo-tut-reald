const express =require ("express");
const mongoose = require("mongoose");
const User=require("./schema");
const cors=require('cors');
const dotenv =require("dotenv")


const connectDB = require('./connect');

dotenv.config();

const app=express();
const PORT =process.env.SERVER_PORT;

app.use(express.json());
app.use(cors());

connectDB();



app.post('/register',async(req,res)=>{
    const { name, username, email, password} = req.body;
    console.log("Received data:", req.body);
    
    if(!name || !email || !username || !password){
        return res.status(400).json({message: "All fields are required"});
    }
    try{
        const newUser=new User({
            name,email,username,password,
        });
        await newUser.save();
        res.status(201).json({message:"User registered successfully"});
    }catch(error){
        console.error("Error saving user",error);
        res.status(500).json({message:"Server error"});
    }

});

app.listen(PORT,()=>{
    console.log(`Server is running on the PORT ${PORT}`);
})