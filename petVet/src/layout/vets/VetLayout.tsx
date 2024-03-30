import React from 'react'
import VetRouter from '../../routes/VetRouter'
import Sidebar from '../../components/medical/Sidebar/Sidebar'

const VetLayout = () => {
  return (
    <>
    <Sidebar/>
    <main>
        <VetRouter/>
    </main>
    </>
  )
}

export default VetLayout