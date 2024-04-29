import React, { useEffect, useRef, useState } from "react";
import DateSlider from "../../../../components/medical/Vets/slotsCRUD/DateSlider";
import AddSlots from "./pages/AddSlots";
import AllSlots from "./pages/AllSlots";
import axios from "axios";
import { BASE_URL } from "../../../../Config/Config";
import BookedSlots from "./pages/BookedSlots";
import VaccantSlots from "./pages/VaccantSlots";

const ManageSlots = () => {
  const [toggleSlots, setToggleSlots] = useState([1, 0, 0,0]);

  const [addedSlots, setAddedSlots] = useState(null)
  const [availableSlots, setAvailableSlots] = useState(null)
  const [bookedSlots, setBookedSLots] = useState(null)
  

  const allSlotsArr = useRef([]);

  const handleToggle = (index: number) => {
    const newToggleSlotsArr = [...toggleSlots];

    newToggleSlotsArr.fill(0);

    newToggleSlotsArr[index] = 1;

    setToggleSlots(newToggleSlotsArr);
    console.log(toggleSlots);
  };

  const getVetSlots = async () => {
    try {
      const token = localStorage.getItem("Authorization");
      if (!token) {
        throw new Error("Authorization token not found");
      }
      
      const authToken = token.split(" ");
      const {data} = await axios.post(`${BASE_URL}/veterinarian/getAllSlotDetails`, {
        jwtToken: authToken[1],
      });
      
      console.log(data.allSlotDetails);
      setAddedSlots(data.allSlotDetails.addedSlots);
      setAvailableSlots(data.allSlotDetails.availableSlots);
      setBookedSLots(data.allSlotDetails.bookedSlots);

    } catch (error) {
      console.error("Error fetching vet slots:", error.message || error);
      // Handle potential errors here, e.g., display a toast notification
      toast.error("An error occurred while fetching vet slots", {
        // Toast notification configuration...
      });
    }
  };
  
  useEffect(() => {
    getVetSlots();
  }, []);
  


  return (
    <main className="w-full h-full flex flex-col gap-20">
      {/* navbar to toggle */}
      <div className="flex flex-row justify-center w-full h-12 ">
        <div className="bg-creamContrast flex flex-row justify-center w-1/2 rounded-br-xl rounded-bl-xl">
          
          <div
            className={`w-1/3 h-full flex flex-row justify-center items-center ${
              toggleSlots[0] === 1 ? "bg-primaryBlue" : "bg-creamContrast"
            } rounded-br-xl rounded-bl-xl`}
          >
            <button
              className={`font-bold text-lg h-full w-full ${
                toggleSlots[0] === 1 ? "text-creamContrast" : "text-primaryBlue"
              } `}
              value={toggleSlots[0]}
              onClick={() => handleToggle(0)}
            >
              All Added Slots
            </button>
          </div>
         
          <div
            className={`w-1/3 h-full flex flex-row justify-center items-center ${
              toggleSlots[1] === 1 ? "bg-primaryBlue" : "bg-creamContrast"
            } rounded-br-xl rounded-bl-xl`}
          >
            <button
              className={`font-bold text-lg h-full w-full ${
                toggleSlots[1] === 1 ? "text-creamContrast" : "text-primaryBlue"
              } `}
              value={toggleSlots[1]}
              onClick={() => handleToggle(1)}
            >
              Add Slots
            </button>
          </div>
          
          <div
            className={`w-1/3 h-full flex flex-row justify-center items-center ${
              toggleSlots[2] === 1 ? "bg-primaryBlue" : "bg-creamContrast"
            } rounded-br-xl rounded-bl-xl`}
          >
            <button
              className={`font-bold text-lg h-full w-full ${
                toggleSlots[2] === 1 ? "text-creamContrast" : "text-primaryBlue"
              } `}
              value={toggleSlots[2]}
              onClick={() => handleToggle(2)}
            >
              Booked Slots
            </button>
          </div>

          <div
            className={`w-1/3 h-full flex flex-row justify-center items-center ${
              toggleSlots[3] === 1 ? "bg-primaryBlue" : "bg-creamContrast"
            } rounded-br-xl rounded-bl-xl`}
          >
            <button
              className={`font-bold text-lg h-full w-full ${
                toggleSlots[3] === 1 ? "text-creamContrast" : "text-primaryBlue"
              } `}
              value={toggleSlots[3]}
              onClick={() => handleToggle(3)}
            >
              Available Slots
            </button>
          </div>

        </div>
      </div>

      {/* <div className="h-32 w-full  mt-12 flex flex-row items-center justify-center gap-10 ">
        <div className="w-full h-full flex flex-row items-center justify-center gap-2 bg-creamContrast px-24">
          <h1 className="text-2xl font-bold text-primaryBlue w-1/6">
            Date Picker:
          </h1>
          <DateSlider allSlotsArr={allSlotsArr.current} />
        </div>
      </div> */}
      <section className="h-4/5 w-full">
        {toggleSlots[0] === 1 && addedSlots && <AllSlots allSlotsArr={addedSlots}  />}

        {toggleSlots[1] === 1 && <AddSlots />}
        {toggleSlots[2] === 1 && bookedSlots &&  <BookedSlots bookedSlots={bookedSlots} />}
        {toggleSlots[3] === 1 && availableSlots && <VaccantSlots availableSlots={availableSlots}  />}
      </section>
    </main>
  );
};

export default ManageSlots;
