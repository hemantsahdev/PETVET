import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/medical/Vets/Dashboard';
import ManageSlots from '../pages/medical/Vets/ManageSlots/ManageSlots';

const VetRouter = () => {
  return (
    <Routes>
      <Route  path="/vet/dashboard" element={<Dashboard/>} />
      <Route path='/vet/manageSlots' element={<ManageSlots/>} />
    </Routes>
  );
}

export default VetRouter