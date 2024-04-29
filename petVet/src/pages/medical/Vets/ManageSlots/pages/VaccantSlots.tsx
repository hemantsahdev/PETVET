import React, { useState } from 'react'
import Table from '../../../../../components/medical/Vets/slotsCRUD/Table';
import DateSlider from '../../../../../components/medical/Vets/slotsCRUD/DateSlider';

const VaccantSlots = ({availableSlots}) => {

  console.log(availableSlots);
  const [selectedDate, setSelectedDate] = useState(availableSlots[0].date);
  
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <main className="h-full w-full">
      {availableSlots && availableSlots.length > 0 && (
        <>
        <div className="h-1/5 w-full">
          <DateSlider slotsArr={availableSlots} onDateClick={handleDateClick} />
        </div>
        <Table slotsArr={availableSlots} selectedDate={selectedDate} />
      </>
      )}
    </main>
  );
}

export default VaccantSlots