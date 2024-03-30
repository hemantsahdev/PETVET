import React from 'react'

const ParticularCommunity = () => {
  return (
    <div className="box-border    ">
      <div className="h-36 w-full bg-blue-500 flex flex-col justify-evenly rounded-3xl p-4 hover:bg-blue-700">

        <div className="h-1/4 flex justify-end items-center  px-4 font-semibold">
          <button className="bg-gray-200 text-l bg-transparent text-gray-700  border border-gray-500 rounded-xl px-1">
            Report
          </button>
        </div>

        <div className="px-16 h-1/2 flex justify-between items-center ">
          <h2 className='text-3xl font-bold ' >New Pet Parent</h2>
          <button className="bg-blue-800 border border-slate-800 text-xl text-white px-4 rounded-xl font-semibold hover:bg-blue-900">
            Join
          </button>
        </div>

        <div className="h-1/4 flex justify-between items-center px-12">
          <p className='text-sm font-semibold text-slate-800 italic '>Total Members:2000</p>
          <p className='text-sm font-semibold text-slate-800 '>created on:23rd April,24</p>
        </div>
        
      </div>
    </div>
  );
}

export default ParticularCommunity