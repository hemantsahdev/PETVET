import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/medical/Vets/Dashboard';

const VetRouter = () => {
  return (
    <Routes>
      <Route  path="/vet/dashboard" element={<Dashboard/>} />
    </Routes>
  );
}

export default VetRouter