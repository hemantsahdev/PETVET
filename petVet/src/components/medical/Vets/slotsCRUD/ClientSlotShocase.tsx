import React from "react";

function formatTimeString(timeString) {
  // Convert the string to a Date object
  const date = new Date(timeString);

  // Get the hours, minutes, and AM/PM indicator
  const hours = date.getHours() % 12 || 12; // Convert 0 to 12
  const minutes = date.getMinutes();
  const ampm = date.getHours() < 12 ? "AM" : "PM";

  // Format the time
  const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;

  return formattedTime;
}
const ClientSlotShocase = ({ slot }) => {
  console.log(slot);
  return (
    < main className="h-16 w-48" > 
      {slot && (
        <main className="cursor-pointer zoom-in hover:bg-orange-300 hover:border-creamContrast h-16 w-48 bg-white rounded-lg flex flex-row items-center justify-center p-1 border border-blue-700 border-4">
          <div className="flex flex-row items-center justify-center text-lg font-semibold gap-1">
            <h2>{formatTimeString(slot.startTime)} -</h2>
            <h2>{formatTimeString(slot.endTime)} </h2>
          </div>
        </main>
      )}
    </main>
  );
};

export default ClientSlotShocase;
