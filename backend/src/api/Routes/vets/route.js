const express=require("express");
const { registerController } = require("../../Controllers/vet/veterinarian");
const { addSlots, getSlots, updateSlots, deleteSlot } = require("../../Controllers/vet/slotsCRUD");

const router=express.Router();

router.post("/register",registerController)
router.post("/addSlots",addSlots)
router.get("/getSlots",getSlots)
router.get("/updateSlots",updateSlots)
router.get("/deleteSlots",deleteSlot)

module.exports=router;