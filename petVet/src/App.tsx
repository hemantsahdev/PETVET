import VetLayout from "./layout/VetLayout";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useEffect } from "react";
// import { BASE_URL } from "./Config";
// import axios from "axios";
import PublicLayout from "./layout/PublicLayout";
import { useRecoilValue } from "recoil";
import { userRole } from "./state/Atoms/userRole";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./Config/Config";

const App = () => {
  const user = useRecoilValue(userRole);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if(localStorage.getItem('Authorization')){

      try{
        const {data}=await axios.post(`${BASE_URL}/user/userRole`);
        

      }

      console.log(user)
        navigate(user === "veterinarian" ? "/vet/dashboard" : "/home");
    }
   
  }, [user, navigate]);

  return <>{user === "veterinarian" ? <VetLayout /> : <PublicLayout />}</>;
};


export default App;

