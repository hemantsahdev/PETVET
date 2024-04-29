import React, { useEffect, useState } from "react";
import maleVet from "../../../assets/doctor_9439268.png";
import femaleVet from "../../../assets/female-doctor_13298073.png";
import star from "../../../assets/star.png";
import ClientProfile from "../Vets/Profile/Clientprofile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faVideo,
  faBookmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import DateSlider from "../../../components/medical/Vets/slotsCRUD/DateSlider";
import ClientSlotShocase from "../../../components/medical/Vets/slotsCRUD/ClientSlotShocase";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../Config/Config";

const VetDetails = () => {
  const [vetDetails, setVetDetails] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null); // Initialize selectedDate as null
  const [selectedMode, setSelectedMode] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const { id } = useParams();

  const getVetDetails = async () => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/veterinarian/getVetDetailsById`,
        { id }
      );
      // Process the data received from the server
      console.log(data.vetDetails);
      setVetDetails(data.vetDetails);
      if (
        data.vetDetails &&
        data.vetDetails.availableSlots &&
        data.vetDetails.availableSlots.length > 0
      ) {
        setSelectedDate(data.vetDetails.availableSlots[0].date); // Set selectedDate after vetDetails is fetched
      }
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error fetching vet details:", error);
    }
  };

  useEffect(() => {
    getVetDetails();
  }, []);

  useEffect(() => {
    if (vetDetails && selectedDate) {
      const slots = vetDetails.availableSlots.filter(
        (slot) => slot.date === selectedDate
      )[0].slots;
      console.log(slots);
    }
  }, [vetDetails, selectedDate]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };
  const handleBookNow =async () => {
    if (selectedSlot && selectedMode) {
      console.log("Selected Slot:", selectedSlot);
      console.log("Selected Mode:", selectedMode);
      // callingStripe();

      const {data}=await axios.post(`${BASE_URL}/user/setAppointment`,{selectedSlot,selectedMode,vetDetails})

      console.log(data.message);

    } else {
      console.log("Please select a slot and mode before booking.");
    }
  };
  const callingStripe = async () => {
    const data = {
      vetDetails,selectedSlot,selectedMode
    };
    try {
      const response = await axios.post("http://localhost:3000/create-checkout-session", data);
      const url = response.data.url;
      window.location = url;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {vetDetails && (
        <main className="h-[60rem] w-full mt-12 px-12 ">
          <div className="h-1/3  flex flex-row  ">
            <div className="h-full w-1/4 flex flex-col justify-evenly items-center ">
              <img
                src={vetDetails.gender === "male" ? maleVet : femaleVet}
                alt=""
                className="h-40 w-40"
              />
              <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-2">
                  <img src={star} alt="" className="h-6" />
                  <h2> 4.5</h2>
                </div>
                <div className="flex flex-row gap-1 underline italic">
                  <h2>{vetDetails.city},</h2>
                  <h2>{vetDetails.state}</h2>
                </div>
              </div>
            </div>

            <div className="h-full w-1/3  flex flex-col justify-evenly items-start">
              <div className="h-1/3 w-full ">
                <h1 className="text-6xl font-semibold capitalize">
                  {vetDetails.name}
                </h1>
              </div>
              <div className="h-2/3 w-full flex flex-col gap-2 px-3">
                <div className="flex flex-row text-xl font-medium italic text-gray-700 gap-2">
                  <h2>Gender:</h2>
                  <h2>{vetDetails.gender}</h2>
                </div>

                <div className="flex flex-row text-xl font-medium italic text-gray-700 gap-2">
                  <h2>Email:</h2>
                  <h2>{vetDetails.email}</h2>
                </div>
                <div className="flex flex-row text-xl font-medium italic text-gray-700 gap-2">
                  <h2>Contact:</h2>
                  <h2>{vetDetails.mobile}</h2>
                </div>
                <div className="flex flex-row text-xl font-medium italic text-gray-700 gap-2">
                  <h2>Pincode:</h2>
                  <h2>{vetDetails.pincode}</h2>
                </div>
              </div>
            </div>

            <div className="h-full w-1/3  flex flex-col justify-between">
              <div className=" h-1/4  flex flex-col  gap-2 mt-4">
                <h1 className="italic text-lg">Speciality:</h1>
                <h2 className="font-bold text-2xl">{vetDetails.speciality}</h2>
              </div>
              <div className="h-1/4 flex flex-row items-center justify-end pr-8  text-2xl font-semibold">
                <h1>Price:</h1>
                <h1>Rs.500/-</h1>
              </div>
              <div className="h-2/3  flex flex-row items-center justify-evenly">
                <div className="h-1/3  w-full flex flex-row items-center justify-center">
                  <button className=" flex flex-row gap-2 items-center justify-center border-orange-600 border h-12 w-36 rounded-xl bg-amber-300 text-black font-bold border-4">
                    <FontAwesomeIcon icon={faMessage} />
                    Message
                  </button>
                </div>
                <div className="h-1/3  w-full flex flex-row items-center justify-center">
                  <button className=" flex flex-row gap-2 items-center justify-center border-blue-600 border h-12 w-36 rounded-xl bg-blue-300 text-black font-bold border-4">
                    <FontAwesomeIcon icon={faVideo} />
                    Video Call
                  </button>
                </div>
                <div className="h-1/3  w-full flex flex-row items-center justify-center">
                  <button className=" flex flex-row gap-2 items-center justify-center border-green-600 border h-12 w-36 rounded-xl bg-green-300 text-black font-bold border-4">
                    <FontAwesomeIcon icon={faBookmark} />
                    Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="h-2/3 flex flex-col justify-evenly border-t border-t-gray-400">
            {/* date  slider */}
            <div className="h-1/4 ">
              <DateSlider
                slotsArr={vetDetails.availableSlots}
                onDateClick={handleDateClick}
              />
            </div>

            {/* slots */}
            <div className="h-1/2 px-24 pt-8">
              <table className="w-full">
                <tbody>
                  {vetDetails.availableSlots
                    .filter((slot) => slot.date === selectedDate)
                    .map((filteredSlot) => (
                      <tr key={filteredSlot._id} className="">
                        {filteredSlot.slots.map(
                          (slotItem, index) =>
                            index % 6 === 0 && (
                              <tr key={index} className="my-4">
                                {[...Array(6)].map((_, i) => (
                                  <td key={i} className="px-4">
                                    {/* Parent component */}
                                    <ClientSlotShocase
                                      slot={filteredSlot.slots[index + i]}
                                      onSelect={handleSlotSelect}
                                      isSelected={
                                        selectedSlot ===
                                        filteredSlot.slots[index + i]
                                      }
                                    />
                                  </td>
                                ))}
                              </tr>
                            )
                        )}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="h-1/5 w-full mt-12 flex flex-row justify-center gap-16 items-center px-36 ">
              <div className="flex flex-row gap-4 ">
                <label className="text-2xl font-bold " >
                  <input
                    type="radio"
                    name="mode"
                    value="online"
                    onChange={(e) => setSelectedMode(e.target.value)}
                  />
                  Online
                </label>

                <label className="text-2xl font-bold">
                  <input
                    type="radio"
                    name="mode"
                    value="offline"
                    onChange={(e) => setSelectedMode(e.target.value)}
                    
                  />
                  Offline
                </label>
              </div>

              <button
                type="submit"
                className="border border-amber-800  border-4 h-16 w-40 bg-magentaHighlight text-white rounded-xl font-bold text-xl hover:bg-green-600 flex flex-row items-center justify-center gap-2"
                onClick={handleBookNow}
              >
                Book Now <FontAwesomeIcon icon={faArrowRight} />{" "}
              </button>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default VetDetails;
