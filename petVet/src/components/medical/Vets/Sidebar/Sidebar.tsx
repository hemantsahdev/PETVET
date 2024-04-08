import React from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  
  const navigate=useNavigate()

  const handleManageSlots=()=>{
    navigate("/vet/manageSlots")
  }

  return (
    <main className="w-full bg-primaryBlue h-screen flex flex-col justify-between items-center">
      <div className="flex flex-col justify-evenly h-2/3 w-full items-center">
        <div className="border border-black h-1/5 w-full bg-black rounded-tr-2xl rounded-br-2xl ">
          <h3 className="font-bold text-3xl text-creamContrast h-full w-full">
            Hi, Dr.Hemant
          </h3>
        </div>
        <div className="border border-black h-1/6 w-full flex flex-row justify-center items-center ">
          <h3 className="font-semibold text-2xl cursor-pointer h-full w-full text-center text-creamContrast  ">
            Appointments
          </h3>
        </div>
        <div
          className="border border-black h-1/6 w-full flex flex-row justify-center items-center"
          onClick={handleManageSlots}
        >
          <h3 className="font-medium text-2xl cursor-pointer h-full w-full text-center text-creamContrast  ">
            Manage slots
          </h3>
        </div>
      </div>
      <div className="h-1/3 w-full">
        <div className="border border-black h-1/3 w-full flex flex-row justify-center items-center">
          <button className="font-semibold text-2xl cursor-pointer h-full w-full text-creamContrast ">
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}

export default Sidebar