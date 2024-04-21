import React from "react";

const TableOfAppointments = () => {
  return (
    <main className="w-full h-full">
    <table className="w-full">
      <tbody>
        <tr className="h-12 bg-primaryBlue text-white rounded-2xl text-center text-xl font-semibold" style={{ marginBottom: '1rem' }}>
          <td>Sr No.</td>
          <td>PetParent Name</td>
          <td>Pet</td>
          <td>Date</td>
          <td>Slot</td>
          <td>Payment Status</td>
          <td>Status</td>
        </tr>
        <tr className="bg-white text-black text-center text-xl font-semibold" style={{ marginBottom: '1rem' }}>
          <td>1.</td>
          <td>Hemant Sahdev</td>
          <td>Dog</td>
          <td>12 March, 24</td>
          <td>10:00 - 10:30</td>
          <td>Pending</td>
          <td>Pending</td>
        </tr>
      </tbody>
    </table>
  </main>
  
  

  );
};

export default TableOfAppointments;
