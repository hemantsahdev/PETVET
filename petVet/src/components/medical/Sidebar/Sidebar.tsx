import React from 'react'

const Sidebar = () => {
  return (
    <main className="w-2/12 bg-red-500 h-screen flex flex-col justify-between items-center">
      <div className="flex flex-col justify-evenly h-2/3 w-full items-center">
        <div className="border border-black h-1/5 w-full ">
          <h3 className="font-medium text-2xl h-full w-full">Hi, Dr.Hemant</h3>
        </div>
        <div className="border border-black h-1/6 w-full flex flex-row justify-center items-center ">
          <h3 className="font-medium text-2xl cursor-pointer h-full w-full text-center  ">
            Appointments
          </h3>
        </div>
        <div className="border border-black h-1/6 w-full flex flex-row justify-center items-center">
          <h3 className="font-medium text-2xl cursor-pointer h-full w-full text-center ">
            Manage slots
          </h3>
        </div>
      </div>
      <div className="h-1/3 w-full">
        <div className="border border-black h-1/3 w-full flex flex-row justify-center items-center">
          <button className="font-semibold text-2xl cursor-pointer h-full w-full">
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}

export default Sidebar