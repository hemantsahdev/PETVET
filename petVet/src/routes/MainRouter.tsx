
import { Route, Routes } from "react-router-dom";


import Login from "../pages/Home/Login";
import Contact from "../pages/Home/Contact";
import Services from "../pages/Home/Services";
import Doctors from "../pages/medical/Doctors/Doctors";
import DoctorDetails from "../pages/medical/Doctors/DoctorDetails";
import Homepage from "../pages/Home/Homepage";
import RegisterHomepage from "../pages/Home/RegisterHomepage";
import PetParentRegistration from "../pages/medical/Registration/PetParentRegistration";
import VetRegistration from "../pages/medical/Registration/VetRegistration";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Homepage />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />

      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<RegisterHomepage />} />
      <Route
        path="/registration/pet-parent"
        element={<PetParentRegistration />}
      />
      <Route path="/registration/veterinarian" element={<VetRegistration />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />

      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default MainRouter;
