const APPOINTMENT = require("../../Models/appointment/appointment");



const addAppointment=async(req,res)=>{
    const {petOwnerId,veterinarianId,appointmentDate,reason,status,payment,videoCall}=req.body;
  
    try{
  
        const newAppointment=new APPOINTMENT({
          petOwnerId,veterinarianId,appointmentDate,reason,status,payment,videoCall
        })
  
        await newAppointment.save();
        res.status(200).json({
          message:"Appointment successfull"
        })
  
    }
    catch(err){
      res.status(500).json({
        message:"error registering appointment",
        error:err.message
      })
    }
  
  }

  const getAllAppointements=async(req,res)=>{
    const {userId}=req.body;


    try{
        const appointments=await APPOINTMENT.find({
            $or:[{petOwnerId:userId},{veterinarianId:userId}]
        })
        if(appointments && appointments.length>0){
            res.statsu(200).json({
                appointments
            })
        }
        else{
            res.status(200).json({
                appointments:"No appointments found by given account"
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:"got error while fetching appointments",
            error:err.message
        })
    }

  }

  const updatePaymentStatus = async (req, res) => {
    const { petOwnerId, veterinarianId, appointmentDate, paymentStatus } = req.body;

    try {
        const appointment = await APPOINTMENT.findOneAndUpdate(
            { petOwnerId, veterinarianId, appointmentDate },
            { payment: paymentStatus },
            { new: true }
        );

        if (!appointment) {
            return res.status(404).json({
                message: "Appointment not found"
            });
        }

        switch (paymentStatus) {
            case "Successfull":
                appointment.status = "Confirmed";
                break;
            case "Partial":
                appointment.status = "Confirmed";
                break;
            case "Pending":
                appointment.status = "Pending";
                break;
            case "offline":
                    appointment.status = "Confirmed";
                    break;
            default:
                return res.status(400).json({
                    message: "Invalid payment status"
                });
        }

        await appointment.save();

        res.status(200).json({
            message: "Payment status updated successfully",
            appointment
        });
    } catch (err) {
        res.status(500).json({
            message: "Error updating the payment status",
            error: err.message
        });
    }
}


  module.exports={addAppointment,getAllAppointements,updatePaymentStatus}