import { Link } from "react-router-dom";
import backgroundImage from "../../assets/AuthImages/backgroundimage.jpg";

const RegisterHomepage = () => {
   return (
     <div className="flex items-center justify-center w-full min-h-screen bg-white text-black relative">
       {/* Background Image */}
       <img
         className="absolute inset-0 w-full h-full object-cover"
         src={backgroundImage}
         alt="backgroundImage"
       />

       {/* Content */}
       <div className="absolute top-1/2 transform -translate-y-1/2 w-full text-center">
         <h1 className="text-4xl font-bold mb-8 font-pacifico">
           Welcome To PetVet - Where Every Paw Counts!
         </h1>
         <p className="text-xl font-bold mb-12">
           Choose your registration path:
         </p>

         <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
           <Link
             to="/registration/pet-parent"
             className="rounded-lg shadow-md bg-black text-white hover:bg-purple-500 py-4 px-8 flex items-center justify-center text-xl font-bold"
           >
             Register as a Pet Parent
             <i className="fas fa-paw ml-4 text-2xl"></i>
           </Link>

           <Link
             to="/registration/veterinarian"
             className="rounded-lg shadow-md bg-black text-white hover:bg-orange-500 py-4 px-8 flex items-center justify-center text-xl font-bold"
           >
             Register as a Veterinarian
             <i className="fas fa-syringe ml-4 text-2xl"></i>
           </Link>
         </div>
       </div>
     </div>
   );
};

export default RegisterHomepage;
