import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/medical/Vets/Dashboard';
import ManageSlots from '../pages/medical/Vets/ManageSlots/ManageSlots';
import VetRegistrationForm from '../pages/medical/Vets/VetRegistrationForm';
import Login from '../pages/Login';

const VetRouter = () => {
  return (
    <Routes>

      <Route path='/login' element={<Login/>} />

      <Route path="/vet/Registration" element={<VetRegistrationForm />} />

      <Route path="/vet/dashboard" element={<Dashboard />} />
      <Route path="/vet/manageSlots" element={<ManageSlots />} />
    </Routes>
  );
}

export default VetRouter