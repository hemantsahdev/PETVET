import React, {  useRef, useState } from 'react'
import DateSlider from '../../../../components/medical/Vets/slotsCRUD/DateSlider';
import AddSlots from './AddSlots';
import AllSlots from '../../../../components/medical/Vets/slotsCRUD/AllSlots';


const ManageSlots = () => {

  const[toggleSlots, setToggleSlots] = useState([1, 0, 0]);

  const allSlotsArr = useRef([]);

  const handleToggle = (index: number) => {
    const newToggleSlotsArr = [...toggleSlots];

    newToggleSlotsArr.fill(0);

    newToggleSlotsArr[index] = 1;

    setToggleSlots(newToggleSlotsArr);
    console.log(toggleSlots)
  };
  return (
    <main className="w-full">
      {/* navbar to toggle */}
      <div className="flex flex-row justify-center w-full h-10  ">
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
              All Slots
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
              Edit
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
      {toggleSlots[0] === 1 && <AllSlots />}

      {toggleSlots[1] === 1 && <AddSlots />}
    </main>
  );
}

export default ManageSlots;