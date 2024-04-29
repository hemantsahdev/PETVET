import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Dayjs } from "dayjs";
import axios from "axios";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { BASE_URL } from "../../../../../Config/Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { toast, Bounce, ToastContainer } from "react-toastify";

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

  const [pricePerSlot, setPricePerSlot] = useState("");

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
        console.log(authToken);
        const payload = {
          selectedDates,
          durationStart,
          durationEnd,
          slotDuration,
          pricePerSlot,
          vetJWT: authToken[1],
        };

        console.log(payload);

        const url = `${BASE_URL}/veterinarian/addSlots`;
        const { data } = await axios.post(url, payload);
        toast.success(data.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        // Clearing state variables after success
        setDurationStart(null);
        setDurationEnd(null);
        setSlotDuration({ hours: 0, minutes: 0 });
        setSelectedDates([]);
        setPricePerSlot("");

        console.log(data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      console.log(error?.response?.data?.message);
    }
  };

  return (
    <main className=" w-full h-full px-20 flex flex-col border border-black">
      <section className="flex flex-row w-full h-full gap-16">
        {/* left containg date and time  */}
        <div className="w-1/2 h-full  flex flex-col justify-center items-center ">
          <div className="flex flex-row items-start justify-start h-1/2 w-full">
            <h3 className="text-4xl font-bold text-primaryBlue">
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

          {/* timings options */}
          <div className="h-1/2 flex flex-col justify-center items-center gap-12">
            <div className="flex flex-row items-center gap-4">
              <h2 className="text-2xl text-primaryBlue font-bold">
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
              <h2 className="text-2xl text-primaryBlue font-bold">End Time:</h2>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  value={durationEnd}
                  onChange={handleSetDurationEnd}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>

        {/* right containing list and  slot division */}
        <div className="w-1/2 flex flex-col h-full justify-evenly items-start ">
          {/* slots divison */}

          <div className="w-full h-1/6 flex flex-row items-center justify-center gap-4">
            <div className="w-1/2 h-full flex flex-row justify-start items-center">
              <h1 className="text-2xl text-primaryBlue font-semibold">
                Price Per Slot:
              </h1>
            </div>
            <div className="flex flex-row w-1/2 h-full flex flex-row justify-center items-center">
              <input
                type="number"
                placeholder="Rs."
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={pricePerSlot}
                onChange={(e) => setPricePerSlot(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full h-1/6 flex flex-row items-center justify-center gap-4">
            {/* heading for input fields */}
            <div className="w-1/2 h-full flex flex-row justify-center items-center">
              <h2 className="text-2xl text-primaryBlue font-semibold">
                Break the given duration in slots of:
              </h2>
            </div>

            {/* input fields */}
            <div className="flex flex-row w-1/2 h-full flex flex-row justify-center items-center">
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

          <div className="w-full h-1/2 flex flex-row items-start justify-center ">
            {selectedDates.length > 0 && (
              <div className="flex flex-row items-start justify-center w-full h-full border border-4 border-black rounded-2xl px-4 pt-4 shadow ">
                <div className="w-1/2 flex flex-row items-start justify-start h-full ">
                  <h3 className="text-2xl font-bold text-primaryBlue">
                    All Selected Dates:
                  </h3>
                </div>

                <div className="overflow-y-auto h-full w-1/2">
                  <ul>
                    {selectedDates.map((date, index) => (
                      <li
                        className="flex flex-row justify-center gap-32 items-center text-xl font-semibold my-1.5"
                        key={index}
                      >
                        {date.format("DD/MM/YY")}
                        <button
                          type="button"
                          className=" flex flex-row items-center justify-center  "
                          onClick={() => removeDate(index)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="w-full h-1/6 flex flex-row justify-center items-center ">
            <button
              type="submit"
              className="w-40 h-16 bg-white rounded-lg text-2xl font-bold  border border-primaryBlue border-4 hover:bg-primaryBlue hover:text-creamContrast "
              onClick={handleAddSlots}
            >
              Add Slots
            </button>
          </div>
        </div>
      </section>
      {/* <ToastContainer
        transition={Bounce}
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> */}
    </main>
  );
};

export default AddSlots;
