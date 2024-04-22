import React, { useCallback, useState } from "react";
import { uid } from "uid";
import backgroundImage from "../../../assets/dog-with-binoculars.jpg";
import { useNavigate } from "react-router-dom";

const VideoCall = () => {
  const [roomId, setRoomId] = useState("");

  const navigate=useNavigate();

  const handleGenerateRommId = () => {
    const randomUid=uid(16);
    console.log(randomUid)
    setRoomId(randomUid);
  };

  const handleJoinRoom=useCallback(()=>{

    navigate(`/vet/room/${roomId}`)


  },[navigate,roomId])

  return (
    <main className="w-full h-full relative">
      <div className="w-full h-full">
        <img
          src={backgroundImage}
          alt="background-image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute left-20 top-20 flex flex-col gap-24">
        <h1 className="text-7xl font-bold ">Join with Room Id</h1>
        <div className="flex flex-row items-center justify-center gap-6">
          <input
            type="text"
            placeholder="Enter Room Id"
            className="h-12 w-64 pl-4 rounded-2xl text-lg font-semibold"
            value={roomId}
            onChange={e=> setRoomId(e.target.value ) }
          />
          <button onClick={handleJoinRoom} className="border border-primaryBlue h-12 w-20 rounded-full bg-amber-300 font-bold text-lg border-2">
            Join
          </button>
          <button
            className="border border-black h-12 w-44 rounded-full bg-white font-bold text-lg border-4 "
            onClick={handleGenerateRommId}
          >
            {" "}
            Generate RoomId
          </button>
        </div>
      </div>
    </main>
  );
};

export default VideoCall;
