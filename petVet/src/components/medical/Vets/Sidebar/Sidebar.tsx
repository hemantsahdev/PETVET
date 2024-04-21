import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleProfile =()=>{
    navigate("/vet/dashboard")
  }
  const handleAppointments =()=>{
    navigate("/vet/appointments")
  }
  const handleManageSlots =()=>{
    navigate("/vet/manageSlots")
  }
  const handleVideoCall =()=>{
    navigate("/vet/video-call")
  }
  const handleMessages = () => {
    navigate("/vet/messages");
  };
  const handleSageAi = () => {
    navigate("/vet/sage");
  };
  const handleLogout = () => {
    navigate("/home");
  };

  return (
    <main className="w-full bg-primaryBlue h-screen flex flex-col justify-between items-center">
      <div className="flex flex-row justify-evenly h-1/4 w-full items-center bg-primaryBlue py-8 ">
        {/* profile */}
        <div onClick={handleProfile} className="h-full w-full cursor-pointer mx-4 py-4 bg-creamContrast rounded-tr-2xl rounded-bl-2xl text-black flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
          <h3 className="font-bold text-3xl flex flex-col gap-3">
            Hello, <span>Dr. Hemant</span>
          </h3>
        </div>
      </div>

      <div className="h-3/4 w-full ">

        
        {/* appointments */}
        <div
          className=" h-1/6 w-full flex flex-row justify-center items-center "
          onClick={handleAppointments}
        >
          <div className=" h-12 w-full mx-6 rounded-3xl bg-creamContrast flex flex-row justify-center items-center text-magentaHighlight hover:bg-magentaHighlight  hover:text-creamContrast">
            <h3 className="font-semibold text-2xl cursor-pointer  ">
              Appointments
            </h3>
          </div>
        </div>

        {/* manage slots */}
        <div
          className=" h-1/6 w-full flex flex-row justify-center items-center "
          onClick={handleManageSlots}
        >
          <div className=" h-12 w-full mx-6 rounded-3xl bg-creamContrast flex flex-row justify-center items-center text-magentaHighlight hover:bg-magentaHighlight  hover:text-creamContrast">
            <h3 className="font-semibold text-2xl cursor-pointer  ">
              Manage Slots
            </h3>
          </div>
        </div>

        {/* VideoCall */}
        <div
          className=" h-1/6 w-full flex flex-row justify-center items-center "
          onClick={handleVideoCall}
        >
          <div className=" h-12 w-full mx-6 rounded-3xl bg-creamContrast flex flex-row justify-center items-center text-magentaHighlight hover:bg-magentaHighlight  hover:text-creamContrast">
            <h3 className="font-semibold text-2xl cursor-pointer  ">
              Video Call
            </h3>
          </div>
        </div>

        {/* Messages */}
        <div
          className=" h-1/6 w-full flex flex-row justify-center items-center "
          onClick={handleMessages}
        >
          <div className=" h-12 w-full mx-6 rounded-3xl bg-creamContrast flex flex-row justify-center items-center text-magentaHighlight hover:bg-magentaHighlight  hover:text-creamContrast">
            <h3 className="font-semibold text-2xl cursor-pointer  ">
              Messages
            </h3>
          </div>
        </div>

        {/* Sage AI */}
        <div
          className=" h-1/6 w-full flex flex-row justify-center items-center "
          onClick={handleSageAi}
        >
          <div className=" h-12 w-full mx-6 rounded-3xl bg-creamContrast flex flex-row justify-center items-center text-magentaHighlight hover:bg-magentaHighlight  hover:text-creamContrast">
            <h3 className="font-semibold text-2xl cursor-pointer  ">Sage AI</h3>
          </div>
        </div>

        {/* logout */}
        <div className=" h-1/6 w-full flex flex-row justify-center items-center " onClick={handleLogout}>
          <button className="font-semibold text-2xl cursor-pointer h-full w-full text-creamContrast flex flex-row items-center justify-center gap-2">
            Logout{" "}
            <span>
              {" "}
              <FontAwesomeIcon icon={faPowerOff} />
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
