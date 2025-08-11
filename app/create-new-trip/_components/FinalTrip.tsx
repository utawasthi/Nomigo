import { Button } from "@/components/ui/button"
import { Globe2 } from "lucide-react"


function FinalTrip({disable} : any) {
  return (
    <div className = 'flex flex-col justify-center items-center p-3 bg-white/40 my-3 rounded-xl'>
      <Globe2 className = 'text-gray-900 animate-bounce'/>
      <h2 className = 'text-gray-950'>Planning your dream trip</h2>
      <p className = 'text-gray-600 font-medium'>
        Gathering best destinations , activities , and travel details for you.
      </p>
      <Button 
        className = 'mt-2 w-full'
        disabled = {disable}
      >
        View Trip
      </Button>
    </div>
  )
}

export default FinalTrip