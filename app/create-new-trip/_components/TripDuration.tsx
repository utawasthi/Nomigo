import { Button } from "@/components/ui/button";
import { useState } from "react";


function TripDuration({handleSelectOption} : {handleSelectOption : any}) {

  const [days , setDays] = useState<number>(3);

  return (
    <div className = 'flex flex-col items-center justify-center bg-white/40 m-3 rounded-2xl'>
      <div className = 'p-2 font-medium text-gray-700 my-2'>
        How many days do you want to travel ? 
      </div>
      <div className = 'flex gap-6 items-center justify-center p-2 mx-2'>
        <span 
         className = 'font-bold text-3xl cursor-pointer text-gray-900'
         onClick = {() => setDays(Math.max(0 , days - 1))}
        > 
          - 
        </span>
        <div className = 'font-bold text-2xl text-gray-900 px-3 mx-2'>{days}</div>
        <span 
         className = 'font-bold text-3xl cursor-pointer text-gray-900'
         onClick = {() => setDays(days + 1)}
        > 
          + 
        </span>
      </div>
      <Button 
        className = 'my-3 cursor-pointer'
        onClick = {() => handleSelectOption(days + "")}
      >
        Confirm
      </Button>
    </div>
  )
}

export default TripDuration
