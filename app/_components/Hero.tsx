import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Globe2, Send } from 'lucide-react'
import React from 'react'

const suggestions = [
  {
    title : 'Create new trip',
    icon : <Globe2 className = 'text-blue-400 h-5 w-5'/>
  },
   {
    title : 'Create new trip',
    icon : <Globe2 className = 'text-blue-400 h-5 w-5'/>
  },
   {
    title : 'Create new trip',
    icon : <Globe2 className = 'text-blue-400 h-5 w-5'/>
  },
   {
    title : 'Create new trip',
    icon : <Globe2 className = 'text-blue-400 h-5 w-5'/>
  },
   {
    title : 'Create new trip',
    icon : <Globe2 className = 'text-blue-400 h-5 w-5'/>
  }
]

function Hero() {
  return (
    <div className = 'flex items-center justify-center'>
      <div
        className = 'mt-24 max-w-3xl w-full text-center'
      >
        <h1
          className = 'font-semibold text-xl md:text-2xl mb-5'
        >
          Hey , I'm Your Personal 
          <span className = 'text-[#31708E]'
          > Trip Planner</span>
        </h1>
        <p className = 'text-lg font-medium wrap-break-word'>
          Tell me what you want and I'll handle the rest - Flights , Hotels and Trip Planning , all in seconds 
        </p>
        <div>
          <div className = 'relative border rounded-2xl m-4 mt-6'>
            <Textarea 
             placeholder = 'Create trip from Paris to New York'
             className = 'w-full h-28 bg-transparent border-none focus-visible:ring-0 resize-none p-4'
            />
            <Button 
              size = {'icon'}
              className = 'absolute bottom-2 right-2 rounded-full cursor-pointer'
            >
               <Send className = 'h-4 w-4'/>
            </Button>
          </div>
        </div>
        <div>
          {
            suggestions.map((item , idx) => (
              <div key = {idx}>
                {item.icon}
                <h2>{item.title}</h2>
              </div>
            ))
          }
        </div>
      </div>
     
    </div>
  )
}

export default Hero
