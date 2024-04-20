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
  //   console.log("first useEffect called");

  //       if (localStorage.getItem("Authorization")) {
  //         const { data } = await axios.post(`${BASE_URL}/user/userRole`);
  //         setUser(data.userRole);
  //         if (user === "veterinarian") {
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
  <VetLayout />
  // <PublicLayout />
)

};

export default App;
