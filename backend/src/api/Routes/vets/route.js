const express=require("express");
const { registerController } = require("../../Controllers/veterinarian");

const router=express.Router();

router.post("/register",registerController)



module.exports=router;