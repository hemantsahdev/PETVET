import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import star from "../../../../assets/star.png";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  return (
    <Link to={"/doctor/:id"}>
      <div className="p-5 flex flex-col justify-center items-center border border-gray-300 rounded-2xl shadow shadow-md shadow-gray-400 hover:shadow-black">
        <div className="w-[12rem]">
          <img src={doctor.photo} alt="" />
        </div>
        <div className="border-b border-gray-400 grow py-2">
          <h2 className="text-xl font-semibold">{doctor.name}</h2>
        </div>
        <div className="flex flex-col items-center gap-6">
          <h3 className="mt-2 font-[500]">{doctor.specialty}</h3>
          <div className="flex justify-between items-center gap-8 ">
            <div className="flex items-center">
              <div className="w-[1rem] ">
                <img src={star} alt="" />
              </div>
              <div className="text-[18px]">{doctor.avgRating}</div>
            </div>
            <div>
              <h4 className="text-sm">Hospital:</h4>
              <a
                href={"https://www.google.com/maps?q=" + doctor.hospital}
                target="blank"
                className="cursor-pointer hover:underline"
              >
                <p className="text-gray-500 text-sm">
                  {" "}
                  <i>{doctor.hospital}</i>{" "}
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
