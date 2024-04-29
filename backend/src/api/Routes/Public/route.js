const express=require("express");
const {
  loginController,
  userRoleController,
  setAppointment,
} = require("../../Controllers/common/common");
const { getAllVeterinarians } = require("../../Controllers/vet/veterinarian");
const router=express.Router();


router.post("/login",loginController)

router.post("/userRole",userRoleController);

router.get("/getVets", getAllVeterinarians)

router.post("/setAppointment",setAppointment)


module.exports=router;