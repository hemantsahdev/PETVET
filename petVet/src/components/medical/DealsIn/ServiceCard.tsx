import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FaDog, FaTooth } from "react-icons/fa";
import { SiHappycow } from "react-icons/si";
import { GiHummingbird, GiCow, GiMedicines } from "react-icons/gi";

const ServiceCard = ({ service }) => {
  const serviceTitle = service.title;

  const icons =
    serviceTitle === "dog" ? (
      <FaDog />
    ) : serviceTitle === "cow" ? (
      <GiCow />
    ) : serviceTitle == "happy" ? (
      <SiHappycow />
    ) : serviceTitle === "cancer" ? (
      <GiMedicines />
    ) : serviceTitle === "bird" ? (
      <GiHummingbird />
    ) : serviceTitle === "tooth" ? (
      <FaTooth />
    ) : (
      "Nothing"
    );

  return (
    <div className="py-8 px-5 m-3 shadow-md shadow-gray-500  rounded-2xl">
      <h2 className="font-bold text-2xl text-headingColor leading-9">
        {icons} {service.name}
      </h2>
      <p className="text-textColor mt-4 text-lg leading-7">{service.desc}</p>
      <div className="flex justify-center mt-8">
        <Link to="/doctors">
          <BsArrowRight className="border border-yellowColor border-4 rounded-full h-12 w-12 p-2 hover:bg-yellowColor hover:border-none" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
