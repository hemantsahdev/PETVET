const VETERINARIAN = require("../../Models/user/veterinarian");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { calculateSlots, isSameDate } = require("../../Helpers/Veterinarian");

// create [ADDED SLOTS]
const addSlots = async (req, res) => {
  try {
    const { selectedDates, durationStart, durationEnd, slotDuration, vetJWT,pricePerSlot } = req.body;

    const decodedToken = jwt.verify(vetJWT, process.env.JWT_SECRET);
    const vetUserName = decodedToken.username;
    const slotDurationMillis = slotDuration.hours * 60 * 60 * 1000 + slotDuration.minutes * 60 * 1000;
    const slots = calculateSlots(durationStart, durationEnd, slotDurationMillis);

    console.log(slots)

    let vet = await VETERINARIAN.findOne({ username: vetUserName });
    if (!vet) {
      return res.status(404).json({ message: "Veterinarian not found" });
    }

    vet.pricePerSlot=pricePerSlot;


    // Update or add slots for each selected date
    selectedDates.forEach((selectedDate) => {
      const existingSlotInAddedSlots = vet.addedSlots.find((slot) => isSameDate(slot.date, selectedDate));
      const existingSlotInAvailableSlots = vet.availableSlots.find((slot) => isSameDate(slot.date, selectedDate));

      if (existingSlotInAddedSlots) {
        console.log(`Slot for date ${selectedDate} already exists in addedSlots`);
        existingSlotInAddedSlots.slots = slots;
      } else {
        console.log(`Adding slot for date ${selectedDate} in addedSlots`);
        vet.addedSlots.push({ date: selectedDate, slots });
      }

      if (existingSlotInAvailableSlots) {
        console.log(`Slot for date ${selectedDate} already exists in availableSlots`);
        existingSlotInAvailableSlots.slots.push(...slots.map(slot => ({ date: selectedDate, ...slot })));
      } else {
        console.log(`Adding slot for date ${selectedDate} in availableSlots`);
        vet.availableSlots.push({ date: selectedDate, slots: slots.map(slot => ({ date: selectedDate, ...slot })) });
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
const getAllAvailableSlots = async (req, res) => {
  try {
    const { jwtToken } = req.body;

    // Verify JWT token and extract veterinarian username
    const decodedToken = jwt.verify(jwtToken, process.env.JWT_SECRET);
    const vetUserName = decodedToken.username;

    // Find the veterinarian
    const vet = await VETERINARIAN.findOne({ username: vetUserName });

    if (!vet) {
      return res.status(404).json({ message: "Veterinarian not found" });
    }

    // Extract available slots
    const availableSlots = vet.availableSlots;

    // Send response with available slots
    res.status(200).json({ availableSlots });
  } catch (error) {
    console.error("Error fetching available slots:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllSlotsDetails = async (req, res) => {
  try {
    const { jwtToken } = req.body;

    // Verify JWT token and extract veterinarian username
    const decodedToken = jwt.verify(jwtToken, process.env.JWT_SECRET);
    const vetUserName = decodedToken.username;

    // Find the veterinarian
    const vet = await VETERINARIAN.findOne({ username: vetUserName });

    // Handle case when veterinarian is not found
    if (!vet) {
      return res.status(404).json({ message: "Veterinarian not found" });
    }

    // Extract all types of slots
    const availableSlots = vet.availableSlots;
    const addedSlots = vet.addedSlots;
    const bookedSlots = vet.bookedSlots;

    // Combine all types of slots into one object
    const allSlotDetails = {
      availableSlots,
      addedSlots,
      bookedSlots
    };

    // Send response with all slot details
    res.status(200).json({ allSlotDetails });
  } catch (error) {
    console.error("Error fetching all slots details:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};



// update
const updateSlots = async (req, res) => {
  const { date, startTime, endTime, vetJWT, idx } = req.body;

  try {
    // Validate and decode the JWT token
    const decodedToken = jwt.verify(vetJWT, process.env.JWT_SECRET);

    // Extract veterinarian ID from the decoded token
    const vetUsername = decodedToken.username;

    // Find the veterinarian by ID
    const vet = await VETERINARIAN.findById(vetUsername);

    // If veterinarian is not found, return an error response
    if (!vet) {
      return res.status(404).json({ message: "Veterinarian not found" });
    }
    // Update veterinarian's profile with available slots
    vet.availableSlots.find((day) => {
      if (day.date === date) {
        day.slots[idx].startTime = startTime;
        day.slots[idx].endTime = endTime;
      }
    });
    // Save the updated veterinarian's profile
    await vet.save();
    // Return a success response
    res.status(200).json({ message: "Slots updated successfully" });
  } catch (error) {
    // Handle any errors and return an error response
    console.error("Error adding slots:", error);
    res
      .status(500)
      .json({
        message: "Internal server error",
        status: error.status,
        error: error.message,
      });
  }
};

// delete
const deleteSlot = async (req, res) => {
  const { vetJWT, idx } = req.body;
  try {
    // Validate and decode the JWT token
    const decodedToken = jwt.verify(vetJWT, process.env.JWT_SECRET);

    // Extract veterinarian ID from the decoded token
    const vetUsername = decodedToken.username;

    // Find the veterinarian by ID
    const vet = await VETERINARIAN.findById(vetUsername);

    // If veterinarian is not found, return an error response
    if (!vet) {
      return res.status(404).json({ message: "Veterinarian not found" });
    }
    // Update veterinarian's profile with available slots
    vet.availableSlots.splice(idx, 1);
    // Save the updated veterinarian's profile
    await vet.save();
    // Return a success response
    res.status(200).json({ message: "Slot deleted successfully" });
  } catch (error) {
    // Handle any errors and return an error response
    console.error("Error adding slots:", error);
    res
      .status(500)
      .json({
        message: "Internal server error",
        status: error.status,
        error: error.message,
      });
  }
};

module.exports = { addSlots, getAllAvailableSlots, updateSlots, deleteSlot,getAllSlotsDetails };
