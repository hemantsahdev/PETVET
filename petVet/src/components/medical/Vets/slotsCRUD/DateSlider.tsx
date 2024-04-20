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
const staticSlotsArr = [
  {
    _id: "1",
    date: "2024-04-20T09:00:00Z",
  },
  {
    _id: "2",
    date: "2024-04-21T10:30:00Z",
  },
  {
    _id: "3",
    date: "2024-04-22T11:15:00Z",
  },
  {
    _id: "4",
    date: "2024-04-23T14:00:00Z",
  },
  {
    _id: "5",
    date: "2024-04-24T16:45:00Z",
  },
];

const DateSlider: React.FC<Props> = () => {
  const [allDatesArr, setAllDatesArr] = useState<string[]>([]);

  useEffect(() => {
    const dates = staticSlotsArr.map((day) => convertUtcToIst(day.date));
    console.log(allDatesArr);
    setAllDatesArr(dates);
  }, []);

  return (
    <>
      {allDatesArr.length > 0 && (
        <div className="w-5/6 bg-creamContrast h-24 flex flex-row items-center gap-4 overflow-x-auto overflow-y-hidden">
          {staticSlotsArr.map((day, index) => (
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
