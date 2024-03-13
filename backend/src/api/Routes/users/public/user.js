const express=require("express");
const USERS = require("../../../Models/user/user");
const router =express.Router();

const jwt=require("jsonwebtoken")


router.post("/signup",async(req,res)=>{

    const {name,username,password,pincode,city,state}=req.body;

    const user=new USERS({
        name,username,password,pincode,city,state
    })

    
    try{
        const userSaved=await user.save();

        const payload ={username};

        const userToken=jwt.sign(payload,process.env.TOKEN_SECRET_USER)

    }
    catch(err){
        res.status(400).json({
            err,
            customizedMessage:"error while registering user"
        })
    }





})










module.exports=router;























const express=require('express');
const router=express.Router();


const USERS=require("../../Model/user");

const jwt=require("jsonwebtoken")

const dotenv=require("dotenv")
dotenv.config();

const bcrypt=require("bcrypt")


const {validateUser}=require("../../validate");

router.post("/signup",async(req,res)=>{

    const {username,password}=req.body;

    // validation
    const {error}=validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message)

    // already Exists
    const usernameExists=await USERS.findOne({username})
    if(usernameExists) res.status(400).json({message:"Username Already Exists"})
   
    // hash passwords
    const hashedPass=await bcrypt.hash(password,10);


    // create
    const user=new USERS({
        username,
        password:hashedPass,
        purchasedCourses:[]
    })

    try{
        const userSaved = await user.save();
        const payload={
            username
        }
        const userToken = jwt.sign(payload, process.env.TOKEN_SECRET_USER)
       
        res.json({
            id:userSaved._id,
            message:"User Created Successfully!",
            token:userToken
        })
    }
    catch(err){
        console.log(err);
        res.status(400).send("User not Created!")
    }


})
