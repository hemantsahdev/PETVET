import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Dayjs } from "dayjs";
import axios from "axios";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { BASE_URL } from "../../../../Config/Config";

interface SlotDuration {
  hours: number;
  minutes: number;
}

const AddSlots = () => {
  const [durationStart, setDurationStart] = useState<Dayjs | null>(null);
  const [durationEnd, setDurationEnd] = useState<Dayjs | null>(null);
  const [slotDuration, setSlotDuration] = useState<SlotDuration>({
    hours: 0,
    minutes: 0,
  });
  const [selectedDates, setSelectedDates] = useState<Dayjs[]>([]);

  const handleDateChange = (newDate: Dayjs) => {
    if (selectedDates.some((date) => date.isSame(newDate, "date"))) {
      toast.error("This date has already been selected", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    setSelectedDates((prevSelectedDates) => [...prevSelectedDates, newDate]);
  };

  const removeDate = (index: number) => {
    setSelectedDates((prevSelectedDates) =>
      prevSelectedDates.filter((_, i) => i !== index)
    );
  };

  const handleSetDurationStart = (newValue: Dayjs | null) => {
    setDurationStart(newValue);
  };

  const handleSetDurationEnd = (newValue: Dayjs | null) => {
    setDurationEnd(newValue);
  };

  const handleSetSlotDuration = (newValue: SlotDuration) => {
    setSlotDuration(newValue);
  };

  const handleAddSlots = async () => {
    try {
      const token = localStorage.getItem("Authorization");
      if (token) {
        const authToken = token.split(" ");
        const payload = {
          selectedDates,
          durationStart,
          durationEnd,
          slotDuration,
          vetJWT: authToken[1],
        };
        const url = `${BASE_URL}/veterinarian/addSlots`;
        const { data } = await axios.post(url, payload);
        toast.success(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <main className="h-screen w-full p-16 flex flex-col">
      <header className="h-1/6">
        <div className="text-7xl font-bold text-primaryBlue">
          <h2>Add Slots</h2>
        </div>
      </header>

      <section className="h-5/6 flex flex-row w-full gap-16">
        <div className="w-1/2 h-full flex flex-col justify-between items-center">
          <div className="flex flex-row items-start justify-center h-full w-full">
            <h3 className="text-2xl font-semibold text-primaryBlue">
              Select Dates:
            </h3>
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
          </div>

          {selectedDates.length > 0 && (
            <div className="flex flex-row items-start justify-center w-full">
              <h3 className="text-2xl font-bold text-primaryBlue w-1/3">
                All Selected Dates:
              </h3>
              <div className="overflow-y-auto h-44 w-2/3">
                <ul>
                  {selectedDates.map((date, index) => (
                    <li
                      className="flex flex-row justify-between items-center text-xl font-semibold my-1.5"
                      key={index}
                    >
                      {date.format("DD/MM/YY")}
                      <button
                        type="button"
                        className="rounded-xl flex flex-row items-center justify-center text-lg font-medium px-0.5 border border-red-500 bg-red-200 font-semibold"
                        onClick={() => removeDate(index)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col h-full justify-evenly items-start">
          <div className="flex flex-row justify-start items-center gap-32">
            <div className="flex flex-row items-center gap-4">
              <h2 className="text-2xl text-primaryBlue font-semibold">
                Start Time:
              </h2>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  value={durationStart}
                  onChange={handleSetDurationStart}
                />
              </LocalizationProvider>
            </div>

            <div className="flex flex-row items-center gap-4">
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

          <div className="flex flex-row items-center gap-4">
            <h2 className="text-2xl text-primaryBlue font-semibold">
              Break the given duration in slots of:
            </h2>
            <div className="flex flex-row">
              <div className="flex flex-row items-center justify-center gap-2">
                <select
                  value={slotDuration.hours}
                  onChange={(e) =>
                    handleSetSlotDuration({
                      ...slotDuration,
                      hours: parseInt(e.target.value),
                    })
                  }
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[...Array(24)].map((_, index) => (
                    <option key={index} value={index}>
                      {index} hours
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-row items-center justify-center gap-2">
                <select
                  value={slotDuration.minutes}
                  onChange={(e) =>
                    handleSetSlotDuration({
                      ...slotDuration,
                      minutes: parseInt(e.target.value),
                    })
                  }
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[...Array(60)].map((_, index) => (
                    <option key={index} value={index}>
                      {index} minutes
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="absolute bottom-16 right-32">
            <button
              type="submit"
              className="bg-creamContrast rounded-lg text-2xl font-bold p-2"
              onClick={handleAddSlots}
            >
              Add Slots
            </button>
            <ToastContainer transition={Bounce} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddSlots;
