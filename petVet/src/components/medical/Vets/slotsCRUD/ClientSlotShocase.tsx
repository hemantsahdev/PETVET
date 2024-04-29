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
const ClientSlotShocase = ({ slot, onSelect, isSelected }) => {
  const handleClick = () => {
    onSelect(slot);
  };

  return (
    <main
      className={`h-16 w-48 cursor-pointer zoom-in p-1 hover:bg-orange-300 hover:border-creamContrast ${
        isSelected ? 'bg-orange-300 border-creamContrast' : 'bg-white'
      } rounded-lg flex flex-row items-center justify-center border border-blue-700 border-4`}
      onClick={handleClick}
    >
      <div className="flex flex-row items-center justify-center text-lg font-semibold gap-1">
        <h2>{formatTimeString(slot.startTime)} -</h2>
        <h2>{formatTimeString(slot.endTime)}</h2>
      </div>
    </main>
  );
};


export default ClientSlotShocase;



