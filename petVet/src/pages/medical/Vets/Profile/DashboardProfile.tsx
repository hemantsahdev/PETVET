import React from "react";
import vetProfilePic from "../../../../assets/bruno-rodrigues-279xIHymPYY-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import MyDoughnutChart from "../../../../components/medical/Vets/Chart.js/PieChart";

const DashboardProfile = () => {
  return (
    <main className="w-full h-full  flex flex-col ">
      <section className="w-full h-1/3 border-b-2  border-magentaHighlight ">
        <div className="w-full h-full px-16 py-4 flex flex-row items-center gap-12 ">
          <div className="h-full w-1/6">
            <img
              src={vetProfilePic}
              alt="Profile pic"
              className="h-52 rounded-full border border-black border-4"
            />
          </div>
          <div className="flex flex-col h-full w-1/2 items-start justify-center gap-4">
            <h1 className="text-5xl font-bold ">Hello , Raj Kumar</h1>
            <h2 className="text-xl font-medium italic text-gray-700">
              Your expertise is like a magic wand for pets! Hundreds are eagerly
              waiting for your special touch in [Expertise].
            </h2>
          </div>
          <div className="h-full w-1/4  flex flex-col items-center justify-evenly">
            <div className="h-1/2 w-full flex flex-row justify-center items-center">
              <button className="border border-green-700 h-12 w-40 rounded-xl bg-green-300 text-lg font-semibold">
                Go to profile{" "}
                <span>
                  <FontAwesomeIcon icon={faRightToBracket} />
                </span>{" "}
              </button>
            </div>
            <div className="h-1/2  w-full flex flex-col justify-center gap-4 items-center">
              <div className="h-1/2 w-full flex flex-row justify-center gap-4 items-center">
                <h3 className="text-lg font-semibold">Price per Slot:</h3>
                <h4 className="text-lg font-semibold">Rs.600</h4>
                <FontAwesomeIcon icon={faPenToSquare} size="1x" />
              </div>

              <div className="h-1/2 w-full flex flex-row justify-center items-center  gap-4">
                <input
                  type="text"
                  name="pricePerSlot"
                  className="h-8 w-32 border border-gray-500 rounded-xl px-2"
                />
                <button className="h-6 w-16 bg-yellow-500  border border-yellow-900 rounded-xl text-md font-semibold ">
                  {" "}
                  Save
                </button>
                <button className="h-6 w-16 bg-white border border-black rounded-xl text-md font-semibold ">
                  {" "}
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-2/3 flex flex-row  bg-white">
        <div className="w-1/2 h-full flex flex-col">
          <div className="h-1/2 w-full flex flex-row justify-evenly items-center">
            <div
              className="h-24 flex flex-col justify-center items-center  rounded-xl bg-creamContrast px-3"
              style={{
                boxShadow: "8px 8px 0px 0px rgba(157, 60, 157, 1)",
                transition: "transform 0.3s ease-in-out", // Add transition for smooth scaling
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)"; // Scale up on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"; // Reset to original size on hover out
              }}
            >
              <h3 className="text-2xl font-bold">Total Bookings</h3>
              <h4 className="text-3xl font-bold">20</h4>
            </div>
            <div
              className="h-24 flex flex-col justify-center items-center  rounded-xl bg-creamContrast px-3"
              style={{
                boxShadow: "8px 8px 0px 0px rgba(157, 60, 157, 1)",
                transition: "transform 0.3s ease-in-out", // Add transition for smooth scaling
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)"; // Scale up on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"; // Reset to original size on hover out
              }}
            >
              <h3 className="text-2xl font-bold">Total Bookings</h3>
              <h4 className="text-3xl font-bold">20</h4>
            </div>
          </div>
          <div className="h-1/2 w-full flex flex-row justify-evenly items-center">
            <div
              className="h-24 flex flex-col justify-center items-center  rounded-xl bg-creamContrast px-3"
              style={{
                boxShadow: "8px 8px 0px 0px rgba(157, 60, 157, 1)",
                transition: "transform 0.3s ease-in-out", // Add transition for smooth scaling
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)"; // Scale up on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"; // Reset to original size on hover out
              }}
            >
              <h3 className="text-2xl font-bold">Total Bookings</h3>
              <h4 className="text-3xl font-bold">20</h4>
            </div>
            <div
              className="h-24 flex flex-col justify-center items-center  rounded-xl bg-creamContrast px-3"
              style={{
                boxShadow: "8px 8px 0px 0px rgba(157, 60, 157, 1)",
                transition: "transform 0.3s ease-in-out", // Add transition for smooth scaling
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)"; // Scale up on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"; // Reset to original size on hover out
              }}
            >
              <h3 className="text-2xl font-bold">Total Bookings</h3>
              <h4 className="text-3xl font-bold">20</h4>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full">{/* <MyDoughnutChart/> */}</div>
      </section>
    </main>
  );
};

export default DashboardProfile;
