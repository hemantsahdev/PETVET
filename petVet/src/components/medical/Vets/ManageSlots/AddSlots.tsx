import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";

import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const AddSlots = () => {
  const [durationStart, setDurationStart] = useState<Dayjs | null>(null);
  const [durationEnd, setDurationEnd] = useState<Dayjs | null>(null);

  const [selectedDates, setSelectedDates] = useState<Dayjs[]>([]);

  const handleDateChange = (newDate: Dayjs) => {
    setSelectedDates((prevSelectedDates) => [...prevSelectedDates, newDate]);
  };

  //   (_, i) ==> this tylpe of syntax is used when we have to write some value due correct sytax reasons ,
  // but that value has no role to play so we use "_" instead
  const removeDate = (index: number) => {
    setSelectedDates((prevSelectedDates) =>
      prevSelectedDates.filter((_, i) => i !== index)
    );
  };

  const handleSetDurationStart = (newValue: Dayjs | null) => {
    console.log(newValue);
    setDurationStart(newValue);
  };

  const handleSetDurationEnd = (newValue: Dayjs | null) => {
    console.log(newValue);
    setDurationEnd(newValue);
  };

  return (
    <main className="border border-green-500 h-full w-full p-16 flex flex-col ">
      <header className="h-1/4 ">
        <div className="text-7xl font-bold text-primaryBlue ">
          <h2>Add Slots</h2>
        </div>
      </header>

      {/* BODY */}
      <section className=" h-3/4">
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              value={
                selectedDates.length > 0
                  ? selectedDates[selectedDates.length - 1]
                  : null
              }
              onChange={(newDate) => handleDateChange(newDate as Dayjs)}
            />
          </LocalizationProvider>
          <div>
            <h3>All Selected Dates:</h3>
            <ul>
              {selectedDates.map((date, index) => (
                <li key={index}>
                  {date.format("DD/MM/YY")}
                  <button onClick={() => removeDate(index)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col h-full justify-evenly items-start">
          <div className="flex flex-row justify-start items-center gap-32">
            <div className="flex flex-row items-center  gap-4">
              <h2 className="text-2xl text-primaryBlue font-semibold">
                Start Time:
              </h2>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  value={durationStart}
                  onChange={handleSetDurationStart}
                  ampm={false}
                />
              </LocalizationProvider>
            </div>

            <div className="flex flex-row items-center gap-4  ">
              <h2 className="text-2xl text-primaryBlue font-semibold">
                End Time:
              </h2>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  value={durationEnd}
                  onChange={handleSetDurationEnd}
                />
              </LocalizationProvider>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4 ">
            <h2 className="text-2xl text-primaryBlue font-semibold">
              {" "}
              Break the given duration in slots of:
            </h2>
            <div className="flex flex -row items-center justify-center gap-2">
              <div className="">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker ampm={false} views={["hours"]} />
                </LocalizationProvider>
              </div>

              <h3>hours</h3>
            </div>

            <div className="flex flex -row items-center justify-center gap-2">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker ampm={false} views={["minutes"]} />
              </LocalizationProvider>
              <h3>Minutes</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddSlots;
