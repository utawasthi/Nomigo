"use client"

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'
import React from 'react'

function ChatBox() {

  const handleOnSend = () => {
    
  }


  return (
    <div className = 'h-[85vh] flex flex-col'>
     {/* Display Message */}
     <section className = 'flex-1 overflow-y-auto p-4'>
      <div className = 'flex justify-end mt-2'>
        <div className = 'max-w-lg bg-[#687864] text-white px-4 py-2 rounded-lg'>
          User message
        </div>
      </div>
      <div className = 'flex justify-start mt-2'>
        <div className = 'max-w-lg bg-[#5085A5] text-white px-4 py-2 rounded-lg'>
          AI Agent Message
        </div>
      </div>
     </section>
     {/* User Input */}
     <section>
      <div className = 'relative border rounded-2xl m-4 mt-6'>
          <Textarea 
            placeholder = 'Create trip from Paris to New York'
            className = 'w-full h-20 bg-transparent border-none focus-visible:ring-0 resize-none p-4'
          />
          <Button 
            size = {'icon'}
            className = 'absolute bottom-2 right-2 rounded-full cursor-pointer'
          >
              <Send 
                className = 'h-3 w-3'
                onClick = {() => handleOnSend()}
              />
          </Button>
          </div>
     </section>
    </div>
  )
}

export default ChatBox
