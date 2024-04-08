import React from 'react'
import VetRouter from '../../routes/VetRouter'
import Sidebar from '../../components/medical/Vets/Sidebar/Sidebar'
import Header from '../../components/medical/Vets/Header/Header';

const VetLayout = () => {
  return (
    <>
      <main className="flex flex-row w-screen ">
        <div className="w-1/6 h-screen">
          <Sidebar />
        </div>
        <div className="w-5/6 flex flex-col">
          <Header />
          <VetRouter />
        </div>
      </main>
    </>
  );
}

export default VetLayout