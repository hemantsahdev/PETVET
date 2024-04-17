const express=require("express");
const {
  loginController,
  userRoleController,
} = require("../../Controllers/common/common");
const router=express.Router();


router.post("/login",loginController)

router.post("/userRole",userRoleController);


module.exports=router;