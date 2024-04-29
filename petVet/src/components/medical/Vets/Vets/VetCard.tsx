import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import star from "../../../../assets/star.png";
import { Link } from "react-router-dom";
import maleVetPhoto from "../../../../assets/doctor_9439268.png";
import femaleVetPhoto from "../../../../assets/female-doctor_13298073.png";

const DoctorCard = ({ vet }) => {
  return (
    <Link to={`/vet/${vet._id}`}>
      <div className=" w-64 h-60 p-5 border border-orange-800 border-4 flex flex-col justify-center items-center border border-gray-300 rounded-2xl shadow shadow-md shadow-gray-400 hover:shadow-black">
       
        <div className="w-[12rem] flex flex-row justify-center items-center mt-[-2.5rem]">
          <img
            src={
              vet && vet.gender && vet.gender === "male"
                ? maleVetPhoto
                : femaleVetPhoto
            }
            alt=""
            className="h-28"
          />
        </div>

        {/* NAME */}
        <div className="border-b border-gray-400 grow py-2">
          <h2 className="text-xl font-semibold capitalize ">{vet.name}</h2>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div>
            <h3 className="mt-2 text-md font-semibold capitalize ">{vet.speciality}</h3>

          </div>

          <div className="flex justify-between items-center gap-8 ">
            {/* RATING */}
            <div className="flex items-center">
              <div className="w-[1rem] ">
                <img src={star} alt="" />
              </div>
              <div className="text-[18px]">4.5</div>
            </div>

            {/* address */}
            <div>
              <h4 className="text-sm">Hospital:</h4>
              <a
                href={"https://www.google.com/maps?q=" + vet.pincode}
                target="blank"
                className="cursor-pointer hover:underline"
              >
                <p className="text-gray-500 text-sm">
                  {" "}
                  <i>{vet.city}</i>{" "}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DoctorCard;
