import MainLayout from './layout/MainLayout';
import VetLayout from "./layout/vets/VetLayout";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.css";

const App = () => {
  return (
    <>
   
        
          <VetLayout/>

          {/* <MainLayout/> */}

     
    </>
  );
}

export default App


// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userRole, setUserRole] = useState("");

//   useEffect(() => {
//     // Check user authentication status upon component mount
//     checkAuthenticationStatus();
//   }, []);

//   const checkAuthenticationStatus = async () => {
//     // Check authentication status by sending a request to the backend server
//     try {
//       const response = await fetch("/api/auth/check", {
//         method: "GET",
//         credentials: "include", // Include cookies for authentication
//       });
//       if (response.ok) {
//         const userData = await response.json();
//         setIsAuthenticated(true);
//         setUserRole(userData.role);
//       } else {
//         setIsAuthenticated(false);
//         setUserRole("");
//       }
//     } catch (error) {
//       console.error("Error checking authentication status:", error);
//     }
//   };

//   return (
//     <Router>
//       {isAuthenticated ? (
//         userRole === "vet" ? (
//           <VetRouter />
//         ) : (
//           <UserRouter />
//         )
//       ) : (
//         <PublicRouter />
//       )}
//     </Router>
//   );
// };
