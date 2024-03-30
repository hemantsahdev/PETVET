
import { Route, Routes } from "react-router-dom";


import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Register from "../pages/Register";
import Doctors from "../pages/medical/Doctors/Doctors";
import DoctorDetails from "../pages/medical/Doctors/DoctorDetails";
import Homepage from "../pages/Homepage";

const MainRouter = () => {
  return (
    
      <Routes>
      <Route  path="/home" element={<Homepage />} />
        <Route  path="/doctors" element={<Doctors />} />
      <Route  path="/doctors/:id" element={<DoctorDetails />} />
      <Route  path="/login" element={<Login />} />
      <Route  path="/register" element={<Register/> } />
      <Route  path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
  
  );
};

export default MainRouter;
