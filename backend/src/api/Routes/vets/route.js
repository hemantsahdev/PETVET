const express=require("express");
const { registerController ,addSlots, getSlots} = require("../../Controllers/veterinarian");

const router=express.Router();

router.post("/register",registerController)

router.post("/addSlots",addSlots)

router.get("/getSlots",getSlots)

module.exports=router;