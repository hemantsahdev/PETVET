import React, { useState } from "react";
import Table from "../../../../../components/medical/Vets/slotsCRUD/Table";
import DateSlider from "../../../../../components/medical/Vets/slotsCRUD/DateSlider";

interface Slot {
  start_time: string;
  end_time: string;
  _id: string;
}

interface Day {
  _id: string;
  date: string;
  slots: Slot[];
}

interface Props {
  allSlotsArr: Day[];
}

const AllSlots: React.FC<Props> = ({ allSlotsArr }) => {
  console.log(allSlotsArr);
  const [selectedDate, setSelectedDate] = useState(allSlotsArr[0].date);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
  return (
    <main className="h-full w-full flex flex-col items-center justify-evenly">
      {/* <div className="flex flex-row border border-4 border-primaryBlue w-48 h-16  px-2 pt-1 items-center gap-1 absolute left-52 top-10 ">
        <h4 className="text-lg font-bold text-black ">10:00 am</h4>
        <span className="text-lg font-bold text-black ">-</span>
        <h4 className="text-lg font-bold text-black ">06:00pm </h4>
      </div> */}
      {allSlotsArr && allSlotsArr.length > 0 && (
        <>
        <div className="h-1/5 w-full">
          <DateSlider slotsArr={allSlotsArr} onDateClick={handleDateClick} />
        </div>
        <Table slotsArr={allSlotsArr} selectedDate={selectedDate} />
      </>
      )}
    </main>
  );
};

export default AllSlots;
