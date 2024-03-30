import React from 'react'
import {services}  from '../../../assets/Data/Services.ts'
import ServiceCard from './ServiceCard'


const ServicesList = () => {
  return (
    <div className="grid grid-cols-3 gap-[30px] mt-[55px]">
      
      {services.map((service,idx) => (
        <ServiceCard service={service} key={idx} />
      ))}
    </div>
  );
}

export default ServicesList