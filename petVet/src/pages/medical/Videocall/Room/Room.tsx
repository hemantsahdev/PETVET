import React from 'react'
import { useParams } from 'react-router-dom'

import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

const Room = () => {

    const {roomId}=useParams();

    // const token = localStorage.getItem("Authorization");
    
    // const authToken = token.split(" ");

    const myMeeting=async(element)=>{
       const appID=1932222257; 
       const serverSecret="8dd15adc5ca2e626c75a6901450b366c";
       const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,"Date.now().toString","Heamnt Sahdev")
        
       const zc=ZegoUIKitPrebuilt.create(kitToken);

       zc.joinRoom({
        container:element,
        sharedLinks:[
            {
                name:'Copy Link',
                url:`http://localhost:5173/vet/room/${roomId}`
            }
        ],
        scenario:{
            mode:ZegoUIKitPrebuilt.OneONoneCall,
        }
       })
    
    }

  return (
    <div className='h-full w-full' >
        {/* <h1>{roomId}</h1> */}
        <div className='h-full w-full' ref={myMeeting} />
    </div>
  )
}

export default Room