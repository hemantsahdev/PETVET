import React from 'react'
import VetRouter from '../routes/VetRouter'
import Sidebar from '../components/medical/Vets/Sidebar/Sidebar'
import Header from '../components/medical/Vets/Header/Header';

const VetLayout = () => {
  return (
    <>
      <main className="flex flex-row w-screen ">
        
        <div className="w-1/6 h-screen fixed ">
          <Sidebar />
        </div>
        
        <div className=" h-screen w-full flex flex-col overflow-y-auto flex flex-col " style={{marginLeft:'296px'}}>
          
          <div className='' style={{height:"100px"}} >
          <Header />
          </div>
          <div className='' style={{height:"721px"}} >
          <VetRouter />

          </div>
        </div>


      </main>
    </>
  );
}

export default VetLayout