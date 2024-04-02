import React from 'react'
import VetRouter from '../../routes/VetRouter'
import Sidebar from '../../components/medical/Vets/Sidebar/Sidebar'

const VetLayout = () => {
  return (
    <>
      <main className='flex flex-row'>
        <Sidebar />
        <VetRouter />
      </main>
    </>
  );
}

export default VetLayout