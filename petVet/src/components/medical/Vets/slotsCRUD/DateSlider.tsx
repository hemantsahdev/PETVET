import React, { useEffect, useState } from "react";
import { convertUtcToIst } from "../../../../Helpers/Helper";

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

const DateSlider: React.FC<Props> = ({ allSlotsArr }) => {
  const [allDatesArr, setAllDatesArr] = useState<string[]>([]);

  useEffect(() => {
    const dates = allSlotsArr.map((day) => convertUtcToIst(day.date));
    console.log(allDatesArr)
    setAllDatesArr(dates);
  }, [allSlotsArr]);

  return (
    <>
      {allDatesArr.length > 0 && (
        <div className="w-5/6 bg-creamContrast h-24 flex flex-row items-center gap-4 overflow-x-auto overflow-y-hidden">
          {allSlotsArr.map((day, index) => (
            <div
              key={day._id}
              className="w-24 bg-primaryBlue cursor-pointer h-20 flex flex-row items-center justify-center rounded-xl gap-1 px-2"
            >
              <h2 className="text-2xl font-semibold text-creamContrast ">
                {new Date(day.date).getDate()}
              </h2>
              <h3 className="text-lg font-medium text-creamContrast ">
                {new Date(day.date).toLocaleString("default", {
                  month: "short",
                })}
              </h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DateSlider;
