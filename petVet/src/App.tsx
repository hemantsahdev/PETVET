import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import { userRole } from "./state/Atoms/userRole";
import { BASE_URL } from "./Config/Config";
import VetLayout from "./layout/VetLayout";
import PublicLayout from "./layout/PublicLayout";
import Homepage from "./pages/Home/Homepage";
import VetDetails from "./pages/medical/VetForClient/VetDetails";
import Login from "./pages/Home/Login";

import RegisterHomepage from "./pages/Home/RegisterHomepage";
import PetParentRegistration from "./pages/medical/Registration/PetParentRegistration";
import VetRegistration from "./pages/medical/Registration/VetRegistration";

import Services from "./pages/Home/Services";
import Dashboard from "./pages/medical/Vets/Dashboard";
import ManageSlots from "./pages/medical/Vets/ManageSlots/ManageSlots";
import AddSlots from "./pages/medical/Vets/ManageSlots/pages/AddSlots";
import GetSlots from "./pages/medical/Vets/ManageSlots/GetSlots";
import DashboardProfile from "./pages/medical/Vets/Profile/dashboardProfile";
import Appointments from "./pages/medical/Vets/Appointments/Appointments";
import Sage from "./pages/medical/AiBot/Sage";
import VideoCall from "./pages/medical/Videocall/VideoCall";
import Room from "./pages/medical/Videocall/Room/Room";
import AllVets from "./pages/medical/VetForClient/AllVets";

const App = () => {
  // const [user, setUser] = useRecoilState(userRole);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchUserRole = async () => {
  //     try {
  //   console.log("first useEffect called");

  //       if (localStorage.getItem("Authorization")) {
  //         const { data } = await axios.post(`${BASE_URL}/user/userRole`,{jwtToken:localStorage.getItem("Authorization")});
  //         setUser(data.userRole);
          
  //         if (data.user === "veterinarian") {
  //           navigate("/vet/dashboard");
  //         }
  //         else{
  //           navigate("/home");
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user role:", error);
  //       // Handle errors gracefully here
  //     }
  //   };

  //   fetchUserRole();
  // }, [setUser]);



  // return <>{user === "veterinarian" ? <VetLayout /> : <PublicLayout />}</>;
return(
  <>
  <Routes>
      <Route
        path="/home"
        element={<PublicLayout><Homepage /></PublicLayout>}
      />
      
      <Route path="/vet/:id" element={ <PublicLayout>  <VetDetails /> </PublicLayout>} />

      <Route path="/login" element={ <PublicLayout> <Login /> </PublicLayout>} />
      <Route path="/registration" element={ <PublicLayout> <RegisterHomepage />  </PublicLayout> } />
      <Route
        path="/registration/pet-parent"
        element={<PublicLayout> <PetParentRegistration /> </PublicLayout> }
      />
      <Route path="/registration/veterinarian" element={<PublicLayout> <VetRegistration /> </PublicLayout> } />

      {/* <Route path="/contact" element={ <PublicLayout>  <Contact /> </PublicLayout>} /> */}
      {/* <Route path="/services" element={<PublicLayout> <Services /> </PublicLayout> } /> */}

      <Route path="/sage" element={<PublicLayout> <Sage/> </PublicLayout> } />
      <Route path="/book-appointments" element={<PublicLayout> <Services /> </PublicLayout> } />
      <Route path="/veterinarians" element={<PublicLayout> <AllVets /> </PublicLayout> } />


      <Route
        path="/vet/dashboard"
        element={<VetLayout><Dashboard /></VetLayout>}
      />
      <Route
        path="/vet/manageSlots"
        element={<VetLayout><ManageSlots /></VetLayout>}
      />
      <Route
        path="/vet/manageSlots/add-slots"
        element={<VetLayout><AddSlots /></VetLayout>}
      />
      <Route
        path="/vet/manageSlots/get-slots"
        element={<VetLayout><GetSlots /></VetLayout>}
      />
      <Route
        path="/vet/profile"
        element={<VetLayout><DashboardProfile /></VetLayout>}
      />
      <Route
        path="/vet/appointments"
        element={<VetLayout><Appointments /></VetLayout>}
      />
      <Route
        path="/vet/sage"
        element={<VetLayout><Sage /></VetLayout>}
      />
      <Route
        path="/vet/video-call"
        element={<VetLayout><VideoCall /></VetLayout>}
      />
      <Route
        path="/vet/room/:roomId"
        element={<VetLayout><Room /></VetLayout>}
      />
      <Route path="/" element={ <PublicLayout>  <Homepage /> </PublicLayout>} />

    </Routes>

  </>
  
)

};

export default App;
