const mongoose = require("mongoose");
const USERS = require("../user/user");


// Define Appointment Schema
const appointmentSchema = new mongoose.Schema(
  {
    petOwnerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: USERS,
      required: true,
    },
    veterinarianId: {
      type: mongoose.Schema.Types.ObjectId,  //yahan pe hum ek id pass krenege jo bhi vet bna rha hoga.
      //  fr jb usse hum populate krenge tb vo apne aap uska voh vala document from veterinarian se le aaega
      ref: "VETERINARIAN",
      required: true,
    },
    appointmentDate: {
      type: Date,
      required: true,
    },
    videoCall:{
      type:Boolean,
      required:true,
      default: false,
    },
    reason: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled","Completed"],
      default: "Pending",
    },
    payment:{
      type:String,
      enum:["Successfull","Partial","Pending","offline"],
      default:"Pending"
    }
  },
  { timestamps: true }
);

// Create Appointment model
const APPOINTMENT = mongoose.model("APPOINTMENT", appointmentSchema);

module.exports = APPOINTMENT;
