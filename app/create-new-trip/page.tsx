import React from 'react'
import ChatBox from './_components/ChatBox'
import Itinerary from './_components/Itinerary'

function CreateNewTrip() {
  return (
    <div className = 'grid grid-cols-1 lg:grid-cols-2 gap-5 p-5'>
      <div>
       <ChatBox/>
      </div>
      <div>
        <Itinerary/>
      </div>
    </div>
  )
}

export default CreateNewTrip
