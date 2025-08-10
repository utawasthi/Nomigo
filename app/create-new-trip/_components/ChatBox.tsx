"use client"

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios'
import { Send } from 'lucide-react'
import React, { useState } from 'react'

export interface Msg {
  role : string;
  content : string;
}

function ChatBox() {

  const [messages , setMessages] = useState<Msg[]>([]);
  const [userInput , setUserInput] = useState<string>('');

  const handleOnSend = async () => {
    console.log("hey from handleSend")
    if(!userInput?.trim()) return;

    
    setUserInput('');

    const newMsg : Msg = {
      role : 'user',
      content : userInput,
    }

    try{
      setMessages((prev : Msg[]) => [...prev , newMsg]);
      const response = await axios.post('/api/ai-model' ,{
        messages : [...messages , newMsg],
      });

      setMessages((prev : Msg[]) => [...prev , {
          role : 'assistant',
          content : response?.data?.resp,
      }]);

      console.log("response ka data" , response.data.resp);
    }
    catch(error){
      console.log("error aayi hai" , error);
    }
  }
  
  return (
    <div className = 'h-[85vh] flex flex-col'>
     {/* Display Message */}
     <section className = 'flex-1 overflow-y-auto p-4'>
      {
        messages.map((msg : Msg , idx) => (
          msg.role === 'user' ? 
           <div className = 'flex justify-end m-3' key = {idx}>
              <div className = 'max-w-lg bg-[#687864] text-white px-4 py-2 rounded-lg'>
                {msg.content}
              </div>
            </div>
          : 
            <div className = 'flex justify-start m-3' key = {idx}>
              <div className = 'max-w-lg bg-[#5085A5] text-white px-4 py-2 rounded-lg'>
                {msg.content}
              </div>
            </div>
        ))
      }
     </section>
     {/* User Input */}
     <section>
      <div className = 'relative border rounded-2xl m-4 mt-6'>
          <Textarea 
            placeholder = 'Create trip from Paris to New York'
            className = 'w-full h-20 bg-transparent border-none focus-visible:ring-0 resize-none p-4'
            onChange = {(e) => setUserInput(e.target.value)}
            value = {userInput} 
          />
          <Button 
            size = {'icon'}
            className = 'absolute bottom-2 right-2 rounded-full cursor-pointer'
            onClick = {handleOnSend}
          >
              <Send 
                className = 'h-3 w-3'
              />
          </Button>
          </div>
     </section>
    </div>
  )
}

export default ChatBox
