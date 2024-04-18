const express=require("express");
const { registerController } = require("../../Controllers/petParent/petParentsController");
const router=express.Router();


router.post("/register",registerController )



module.exports=router;