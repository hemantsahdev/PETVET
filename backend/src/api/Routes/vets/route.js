const express=require("express");
const { registerController, getAllVeterinarians, getVetDetails, getVetDetailsById } = require("../../Controllers/vet/veterinarian");
const { addSlots, getAllAvailableSlots, updateSlots, deleteSlot, getAllSlotsDetails } = require("../../Controllers/vet/slotsCRUD");

const router=express.Router();

router.post("/register",registerController)
router.post("/addSlots",addSlots)
router.get("/getSlots",getAllAvailableSlots)
router.post("/getAllSlotDetails",getAllSlotsDetails)
router.get("/updateSlots",updateSlots)
router.get("/deleteSlots",deleteSlot)

router.get("/getAllVets",getAllVeterinarians)
router.post("/getVetDetails",getVetDetails)
router.post("/getVetDetailsById",getVetDetailsById)

module.exports=router;