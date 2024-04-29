import React, { useEffect, useRef, useState } from 'react'
import DateSlider from '../../../../components/medical/Vets/slotsCRUD/DateSlider';
import AllSlots from './pages/AllSlots';
import BookedSlots from './pages/BookedSlots';
import VaccantSlots from './pages/VaccantSlots';
import axios from 'axios';

const GetSlots = () => {

  const [toggleSlots, setToggleSlots] = useState([1,0,0]);

  const allSlotsArr=useRef([]);

  const handleToggle=(index:number)=>{
  
    const newToggleSlotsArr=[...toggleSlots];

    newToggleSlotsArr.fill(0);

    newToggleSlotsArr[index]=1;

    setToggleSlots(newToggleSlotsArr);


  }


  // fetching all slots
  useEffect(() => {
    
    const getSlotsData =async () =>{
      const config = {
        headers: {
          // Authorization: `Bearer ${localStorage.getItem('token')}`,
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjEyMjdlZGNhYTRiMWFiNjE2OTg5YzkiLCJpYXQiOjE3MTI0NjU5MDF9.Q7EqriRSMiryyCHc9qX_jIgitMOkW-J8k8vrB7oxKGY",
        },
      };
      const url = "http://localhost:3000/veterinarian/getSlots";

      const { data } = await axios.get(url,config);

      allSlotsArr.current = data;
      console.log(allSlotsArr);
    }

    getSlotsData();
  }, [])
  


  return (
    <main className="w-full h-full flex flex-col">
      {/* navbar to toggle */}
      <div className="flex flex-row justify-center w-full h-10  ">
        <div className="bg-creamContrast flex flex-row justify-center w-1/2 rounded-br-xl rounded-bl-xl">
          <div className=" w-1/3 h-full flex flex-row justify-center items-center bg-primaryBlue rounded-br-xl rounded-bl-xl">
            <button
              className="font-bold text-lg text-creamContrast h-full w-full"
              value={toggleSlots[0]}
              onClick={() => handleToggle(0)}
            >
              All Slots
            </button>
          </div>
          <div className=" w-1/3 h-full flex flex-row justify-center items-center">
            <button
              className="font-bold text-lg text-primaryBlue h-full w-full"
              value={toggleSlots[1]}
              onClick={() => handleToggle(1)}
            >
              Booked Slots
            </button>
          </div>
          <div className=" w-1/3 h-full flex flex-row justify-center items-center">
            <button
              className="font-bold text-lg text-primaryBlue h-full w-full"
              value={toggleSlots[2]}
              onClick={() => handleToggle(2)}
            >
              Available Slots
            </button>
          </div>
        </div>
      </div>
      {/* Date slider */}
      {allSlotsArr.current.length > 0 && (
        <div className="h-32 w-full  mt-12 flex flex-row items-center justify-center gap-10 ">
          <div className="w-full h-full flex flex-row items-center justify-center gap-2 bg-creamContrast px-24">
            <h1 className="text-2xl font-bold text-primaryBlue w-1/6">
              Date Picker:
            </h1>
            <DateSlider allSlotsArr={allSlotsArr.current} />
          </div>
        </div>
      )}

      {allSlotsArr.current.length > 0 && toggleSlots[0] === 1 && (
        <AllSlots allSlotsArr={allSlotsArr.current} />
      )}
      {allSlotsArr.current.length > 0 && toggleSlots[1] === 1 && (
        <BookedSlots allSlotsArr={allSlotsArr.current} />
      )}
      {allSlotsArr.current.length > 0 && toggleSlots[2] === 1 && (
        <VaccantSlots allSlotsArr={allSlotsArr.current} />
      )}
    </main>
  );
}

export default GetSlots