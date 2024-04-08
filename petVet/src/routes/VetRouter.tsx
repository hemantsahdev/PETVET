import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/medical/Vets/Dashboard';
import ManageSlots from '../pages/medical/Vets/ManageSlots/ManageSlots';
import GetSlots from '../pages/medical/Vets/ManageSlots/GetSlots';
import AddSlots from '../pages/medical/Vets/ManageSlots/AddSlots';

const VetRouter = () => {
  return (
    <Routes>
      <Route path="/vet/dashboard" element={<Dashboard />} />

      <Route path="/" element={<Dashboard />} />

      <Route path="/vet/manageSlots" element={<ManageSlots/>} />
      <Route path="/vet/manageSlots/add-slots" element={<AddSlots/>} />
      <Route path="/vet/manageSlots/get-slots" element={<GetSlots/>} />
    </Routes>
  );
}

export default VetRouter