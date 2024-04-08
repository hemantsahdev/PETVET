// HELPER=================
const calculateSlots = (durationStart, durationEnd, slotDurationMillis) => {
  // Convert duration strings to Date objects
  const start = new Date(durationStart);
  const end = new Date(durationEnd);

  // Initialize an array to store the slots
  const slots = [];

  // Iterate over the time range and create slots
  while (start < end) {
    // Create a new slot object
    const slot = {
      startTime: new Date(start), // Start time of the slot
      endTime: new Date(start.getTime() + slotDurationMillis), // End time of the slot
    };

    // Add the slot to the array
    slots.push(slot);

    // Move to the next slot
    start.setTime(start.getTime() + slotDurationMillis);
  }

  return slots;
};

// Function to check if two dates have the same year, month, and day
function isSameDate(date1, date2) {
  const parsedDate1 = new Date(date1);
  const parsedDate2 = new Date(date2);

  return (
    parsedDate1.getFullYear() === parsedDate2.getFullYear() &&
    parsedDate1.getMonth() === parsedDate2.getMonth() &&
    parsedDate1.getDate() === parsedDate2.getDate()
  );
}
module.exports={calculateSlots,isSameDate}