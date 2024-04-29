import React, { useState } from 'react'
import Table from '../../../../../components/medical/Vets/slotsCRUD/Table';
import DateSlider from '../../../../../components/medical/Vets/slotsCRUD/DateSlider';

const BookedSlots = ({ bookedSlots }) => {
  const [selectedDate, setSelectedDate] = useState(bookedSlots.length > 0 ? bookedSlots[0].date : null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <main className="h-full w-full">
      {bookedSlots && bookedSlots.length > 0 ? (
        <>
          <div className="h-1/5 w-full">
            <DateSlider slotsArr={bookedSlots} onDateClick={handleDateClick} />
          </div>
          <Table slotsArr={bookedSlots} selectedDate={selectedDate} />
        </>
      ) : (
        <div className="h-full flex items-center justify-center">
          <p>No booked slots available.</p>
        </div>
      )}
    </main>
  );
};


export default BookedSlots