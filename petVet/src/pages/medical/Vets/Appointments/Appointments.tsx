import React from 'react'
import TableOfAppointments from '../../../../components/medical/Vets/Appointments/TableOfAppointments'

const Appointments = () => {
  return (
    <main className='w-full h-full p-4 flex flex-col gap-8'>
        <div className='h-1/6 w-full pl-8 pt-8 '>
            <h1 className='text-6xl font-bold text-primaryBlue'>Appointments</h1>
        </div>
        <div className='h-5/6 w-full' >
            <TableOfAppointments/>
        </div>
    </main>
  )
}

export default Appointments