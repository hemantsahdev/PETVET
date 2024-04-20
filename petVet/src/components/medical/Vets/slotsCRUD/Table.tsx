import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";

const Table = () => {
 return (
   <main className="h-full w-full mt-10">
     <table className="table-auto w-full border-collapse ">
       <thead>
         <tr className="bg-creamContrast font-bold text-xl">
           <th className="px-4 py-2">Sr No.</th>
           <th className="px-4 py-2">Start Time</th>
           <th className="px-4 py-2">End Time</th>
           <th className="px-4 py-2">Created On</th>
           <th className="px-4 py-2">Actions</th>
         </tr>
       </thead>

       <tbody>
         <tr className="bg-gray-100 text-center font-semibold ">
           <td className="border px-4 py-2 ">1</td>
           <td className="border px-4 py-2  ">09:00 AM</td>
           <td className="border px-4 py-2 ">05:00 PM</td>
           <td className="border px-4 py-2">2024-04-08</td>
           <td className="border px-4 py-2">
             <button
               title="edit"
               type="button"
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
             >
               <FaEdit />
             </button>
             <button
               title="edit"
               type="button"
               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl ml-2"
             >
               <FaTrash />
             </button>
           </td>
         </tr>
         <tr className="bg-gray-100 text-center font-semibold ">
           <td className="border px-4 py-2 ">1</td>
           <td className="border px-4 py-2  ">09:00 AM</td>
           <td className="border px-4 py-2 ">05:00 PM</td>
           <td className="border px-4 py-2">2024-04-08</td>
           <td className="border px-4 py-2">
             <button
               title="edit"
               type="button"
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
             >
               <FaEdit />
             </button>
             <button
               title="edit"
               type="button"
               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl ml-2"
             >
               <FaTrash />
             </button>
           </td>
         </tr>
         <tr className="bg-gray-100 text-center font-semibold ">
           <td className="border px-4 py-2 ">1</td>
           <td className="border px-4 py-2  ">09:00 AM</td>
           <td className="border px-4 py-2 ">05:00 PM</td>
           <td className="border px-4 py-2">2024-04-08</td>
           <td className="border px-4 py-2">
             <button
               title="edit"
               type="button"
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
             >
               <FaEdit />
             </button>
             <button
               title="edit"
               type="button"
               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl ml-2"
             >
               <FaTrash />
             </button>
           </td>
         </tr>
       </tbody>
     </table>
   </main>
 );
}

export default Table
