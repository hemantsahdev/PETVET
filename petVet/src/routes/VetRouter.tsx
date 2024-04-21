import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/medical/Vets/Dashboard';
import ManageSlots from '../pages/medical/Vets/ManageSlots/ManageSlots';
import GetSlots from '../pages/medical/Vets/ManageSlots/GetSlots';
import AddSlots from '../pages/medical/Vets/ManageSlots/AddSlots';
import DashboardProfile from '../pages/medical/Vets/Profile/dashboardProfile';
import Appointments from '../pages/medical/Vets/Appointments/Appointments';
import Sage from "../pages/medical/AiBot/Sage"
import VideoCall from '../pages/medical/Videocall/VideoCall';

const VetRouter = () => {
  return (
    <Routes>
      <Route path="/vet/dashboard" element={<Dashboard />} />

      <Route path="/" element={<Dashboard />} />

      <Route path="/vet/manageSlots" element={<ManageSlots/>} />
      <Route path="/vet/manageSlots/add-slots" element={<AddSlots/>} />
      <Route path="/vet/manageSlots/get-slots" element={<GetSlots/>} />
      <Route path='/vet/profile' element={<DashboardProfile/>} />
      <Route path='/vet/appointments' element={<Appointments/>} />
      <Route path='/vet/sage' element={ <Sage/>}   />
      <Route path='/vet/video-call' element={ <VideoCall/>}   />
    </Routes>
  );
}

export default VetRouter