const VETERINARIAN = require("../../Models/user/veterinarian");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {calculateSlots,isSameDate} = require("../../Helpers/Veterinarian");


// create
const addSlots = async (req, res) => {
  try {
    const { selectedDates, durationStart, durationEnd, slotDuration, vetJWT } =
      req.body;
    const decodedToken = jwt.verify(vetJWT, process.env.JWT_SECRET);
    const vetId = decodedToken._id;
    const slotDurationMillis =
      slotDuration.hours * 60 * 60 * 1000 + slotDuration.minutes * 60 * 1000;
    const slots = calculateSlots(
      durationStart,
      durationEnd,
      slotDurationMillis
    );

    const vet = await VETERINARIAN.findById(vetId);
    if (!vet) {
      return res.status(404).json({ message: "Veterinarian not found" });
    }
    // Update existing slots or add new slots
    selectedDates.forEach((selectedDate) => {
      const existingSlot = vet.availableSlots.find((slot) =>
      
        isSameDate(slot.date, selectedDate)
      
      );
      if (existingSlot) {
        console.log(`Slot for date ${selectedDate} already exists`);
        existingSlot.slots=slots;
      } else {
        console.log(`Adding slot for date ${selectedDate}`);
        vet.availableSlots.push({ date: selectedDate, slots });
      }
    });

    await vet.save();
    res.status(200).json({ message: "Slots added successfully" });
  } catch (error) {
    console.error("Error adding slots:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get
const getSlots = async (req, res) => {
  try {
    // Check if Authorization header exists in the request
    if (!req.headers["authorization"]) {
      return res.status(400).json({ message: "Authorization header missing" });
    }

    const authorizationHeader = req.headers["authorization"];

    // The comma (,) before token indicates that we're only interested in the second 
    // element of the array (the token part after "Bearer"), while the first element is ignored.
    const [, token] = authorizationHeader.split(" ");

    // Verify the JWT token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedToken._id) {
      throw new Error("Invalid token: _id not found");
    }

    const vetId = decodedToken._id;
    const vet = await VETERINARIAN.findById(vetId);

    if (!vet) {
      return res.status(404).json({ message: "Veterinarian not found" });
    }

    return res.status(200).json(vet.availableSlots);
  } catch (error) {
    console.error("Error retrieving slots:", error.message);
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: "Invalid token" });
    }
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: "Token expired" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};


// update
const updateSlots =async(req,res) => {
  const { date, startTime, endTime, vetJWT,idx } = req.body;

  try {
  // Validate and decode the JWT token
  const decodedToken = jwt.verify(vetJWT, process.env.JWT_SECRET);

  // Extract veterinarian ID from the decoded token
  const vetId = decodedToken._id;

  // Find the veterinarian by ID
  const vet = await VETERINARIAN.findById(vetId);

  // If veterinarian is not found, return an error response
  if (!vet) {
    return res.status(404).json({ message: "Veterinarian not found" });
  }
  // Update veterinarian's profile with available slots
  vet.availableSlots.find(day=>{
    if( day.date === date){
      day.slots[idx].startTime=startTime;
      day.slots[idx].endTime=endTime;
    }
   
  });
  // Save the updated veterinarian's profile
  await vet.save();
  // Return a success response
  res.status(200).json({ message: "Slots updated successfully" });
}
catch(error) {
  // Handle any errors and return an error response
  console.error("Error adding slots:", error);
  res.status(500).json({ message: "Internal server error" , status: error.status, error: error.message});
} 

}

// delete
const deleteSlot=async(req,res)=>{
  const {vetJWT,idx} = req.body;
  try {
  // Validate and decode the JWT token
  const decodedToken = jwt.verify(vetJWT, process.env.JWT_SECRET);
  
  // Extract veterinarian ID from the decoded token
  const vetId = decodedToken._id;
  
  // Find the veterinarian by ID
  const vet = await VETERINARIAN.findById(vetId);
  
  // If veterinarian is not found, return an error response
  if (!vet) {
    return res.status(404).json({ message: "Veterinarian not found" });
  }
  // Update veterinarian's profile with available slots
  vet.availableSlots.splice(idx,1);
  // Save the updated veterinarian's profile
  await vet.save();
  // Return a success response
  res.status(200).json({ message: "Slot deleted successfully" });

  } catch (error) {
    // Handle any errors and return an error response
    console.error("Error adding slots:", error);
    res.status(500).json({ message: "Internal server error" , status: error.status, error: error.message});
  
  }

}




module.exports = { addSlots, getSlots,updateSlots,deleteSlot };