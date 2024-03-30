const express=require("express");
const { loginController } = require("../../Controllers/common/common");
const router=express.Router();


router.post("/login",loginController)



module.exports=router;