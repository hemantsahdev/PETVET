import React from 'react'
import {uid} from 'uid'
import backgroundImage from "../../../assets/17432981_job562-nunoon-10.jpg"

const VideoCall = () => {
  return (
    <main className='w-full h-full' >
        <div >
            <img src={backgroundImage} alt="background-image" />
        </div>
        <div>
            <h1> Make a Room </h1>
            <input type="text" placeholder='Enter a room id' />
        </div>
    </main>
  )
}

export default VideoCall