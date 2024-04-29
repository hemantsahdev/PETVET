import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { convertUtcToIst } from "../../../../Helpers/Helper";


function formatTimeString(timeString) {
  // Convert the string to a Date object
  const date = new Date(timeString);

  // Get the hours, minutes, and AM/PM indicator
  const hours = date.getHours() % 12 || 12; // Convert 0 to 12
  const minutes = date.getMinutes();
  const ampm = date.getHours() < 12 ? "AM" : "PM";

  // Format the time
  const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

  return formattedTime;
}
function formatDateString(dateString) {
  // Convert the string to a Date object
  const date = new Date(dateString);

  // Extract day, month, and year
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed, so add 1
  const year = date.getFullYear();

  // Format the date
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}
const Table = ({ slotsArr, selectedDate }) => {
  console.log(selectedDate);

  const [slotsDetails, setSlotsDetails] = useState([]);

  useEffect(() => {
    if (slotsArr && selectedDate) {
      const filteredSlots = slotsArr.filter((slot) => slot.date === selectedDate);

      if (filteredSlots.length > 0) {
        const slots = filteredSlots[0].slots.map((slot) => ({
          startTime: formatTimeString(slot.startTime),
          endTime: formatTimeString(slot.endTime),
          createdAt: formatDateString(filteredSlots[0].date),
        }));
        console.log(slots)
        setSlotsDetails(slots);
      } else {
        setSlotsDetails([]);
      }
    }
  }, [slotsArr, selectedDate]);

  return (
    <main className="h-full w-full mt-10">
      <table className="table-auto w-full border-collapse ">
        <thead>
          <tr className="bg-creamContrast font-bold text-xl">
            <th className="px-4 py-2">Sr No.</th>
            <th className="px-4 py-2">Start Time</th>
            <th className="px-4 py-2">End Time</th>
            <th className="px-4 py-2">Created On</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {
           slotsDetails.map((slot,idx)=>(

            <tr key={idx} className="bg-gray-100 text-center font-semibold ">
              <td className="border px-4 py-2">{idx + 1}</td>
              <td className="border px-4 py-2">{slot.startTime}</td>
              <td className="border px-4 py-2">{slot.endTime}</td>
              <td className="border px-4 py-2">{slot.createdAt}</td>
              <td className="border px-4 py-2">
                <button
                  title="edit"
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
                >
                  <FaEdit />
                </button>
                <button
                  title="edit"
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl ml-2"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
           ))
          }
        </tbody>
      </table>
    </main>
  );
};

export default Table;
