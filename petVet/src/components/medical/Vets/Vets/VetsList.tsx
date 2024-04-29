import React from "react";
import { doctors } from "../../../../assets/Data/Doctors.ts";
import DoctorCard from "./VetCard.tsx";

const VetsList = () => {
  return (
    <div className="flex justify-evenly mt-12">
      {doctors.map((doctor, idx) => (
        <DoctorCard vet={doctor} key={idx} />
      ))}
    </div>
  );
};

export default VetsList;
