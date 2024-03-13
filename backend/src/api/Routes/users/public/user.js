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