import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const Sage = () => {
  return (
    <main className="h-full w-full py-8  ">
      <div className="flex flex-col items-center justify-between w-full h-full ">
        <div className="h-5/6 w-3/4 text-center flex flex-col items-center justify-start   text-gray-700 ">
          <h1 className="mt-12">
            <span className="text-8xl font-bold bg-gradient-to-r from-blue-900 via-pink-800 to-blue-600 bg-clip-text text-transparent">
              Sage,
            </span>{" "}
           <span className="text-4xl font-semibold italic">  Pawsitively here for your pet needs. </span> 
          </h1>
        </div>

        <div className="h-1/6 w-2/3 py-4 flex flex-row itmes-center justify-center gap-4">
          <input
            type="text"
            className="bg-creamContrast w-5/6 h-full border border-black rounded-3xl pl-4 text-xl font-semibold"
            placeholder="Enter your prompt here!"
          />
          <button
            type="submit"
            className="border border-white px-6 rounded-full hover:bg-primaryBlue flex flex-row items-center justify-center"
          >
            <FontAwesomeIcon icon={faPaperPlane} size="2x" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Sage;
