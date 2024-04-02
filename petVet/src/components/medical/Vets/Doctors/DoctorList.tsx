import React from "react";
import { doctors } from "../../../../assets/Data/Doctors.ts";
import DoctorCard from "./DoctorCard.tsx";
const DoctorList = () => {
  return (
    <div className="flex justify-evenly mt-12">
      {doctors.map((doctor, idx) => (
        <DoctorCard doctor={doctor} key={idx} />
      ))}
    </div>
  );
};

export default DoctorList;
