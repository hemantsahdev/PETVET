import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userRole } from "./state/Atoms/userRole";
import { BASE_URL } from "./Config/Config";
import VetLayout from "./layout/VetLayout";
import PublicLayout from "./layout/PublicLayout";

const App = () => {
  // const [user, setUser] = useRecoilState(userRole);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchUserRole = async () => {
  //     try {
  //       if (localStorage.getItem("Authorization")) {
  //         const { data } = await axios.post(`${BASE_URL}/user/userRole`);
  //         setUser(data.userRole);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user role:", error);
  //       // Handle errors gracefully here
  //     }
  //   };

  //   fetchUserRole();
  // }, [setUser]);

  // useEffect(() => {
  //   if (user === "veterinarian") {
  //     navigate("/vet/dashboard");
  //   }
  // }, [user, navigate]);

  // return <>{user === "veterinarian" ? <VetLayout /> : <PublicLayout />}</>;
return(
  <VetLayout />
)

};

export default App;
