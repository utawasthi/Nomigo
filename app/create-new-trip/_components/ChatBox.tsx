"use client"

import { Button } from '@/components/ui/button'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios'
import { Loader, Send } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import EmptyChat from './EmptyChat'
import GroupSize from './GroupSize'
import Budget from './Budget'
import TripDuration from './TripDuration'
import FinalTrip from './FinalTrip';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUserDetail } from '@/app/provider';
import { v4 as uuidv4 } from 'uuid';

export interface Msg {
  role : string;
  content : string;
  ui? : string;
}

export interface TripInfo {
  budget : string;
  destination : string;
  duration : string;
  group_size : string;
  hotels : Hotel[];
  itinerary : ItineraryType[];
  origin : string;
}

export interface Hotel {
  hotel_name : string;
  hotel_address : string;
  price_per_night : string;
  hotel_image_url : string;
  geo_coordinates : {
    latitude : number;
    longitude : number;
  };
  rating : number;
  description : string;
}

export interface ItineraryType {
  day : number;
  day_plan : string;
  best_time_to_visit_day : string;
  activities : Activity[];
}

export interface Activity {
  place_name : string;
  place_details : string;
  place_image_url : string;
  geo_coordinates : {
    latitude : number;
    longitude : number;
  };
  place_address : string;
  ticket_pricing : string;
  time_travel_each_location : string;
  best_time_to_visit : string;
}

function ChatBox() {

  const [messages , setMessages] = useState<Msg[]>([]);
  const [userInput , setUserInput] = useState<string>('');
  const [loading , setLoading] = useState<boolean>(false);
  const [isFinal , setIsFinal] = useState<boolean>(false);
  const [tripDetails , setTripDetails] = useState<TripInfo>();

  const {userDetails , setUserDetails} = useUserDetail();
  // console.log("userDetails from ChatBox ------->\n" , userDetails);

  const saveTripDetail = useMutation(api.tripDetails.CreateTripDetail);


  useEffect(() => {
    const lastMsg = messages[messages.length - 1];
    if(lastMsg?.ui === 'final'){
      setIsFinal(true);
      setUserInput('Ok , great!');
      handleOnSend();
    }
  } , [messages]);

  const renderGenUI = (ui : string) => {
    if(ui === 'budget'){
      return <Budget handleSelectOption = {(v : string) => setUserInput(v)}/>
    }
    else if(ui === 'groupSize'){
     return <GroupSize handleSelectOption = {(v : string) => setUserInput(v)}/>
    }
    else if(ui === 'tripDuration'){
      return (
        <TripDuration handleSelectOption = {(v : string) => setUserInput(v)}/>
      )
    }
    else if(ui === 'final'){
     return  <FinalTrip disable = {!tripDetails}/>
    }
    return null;
  }

  const handleOnSend = async () => {
    if (!userInput?.trim()) return;

    const newMsg: Msg = { role: 'user', content: userInput };
    setMessages((prev) => [...prev, newMsg]);
    setUserInput('');

    try {
      setLoading(true);

      // Create a clean version for API (no UI field)
      const cleanMessages = [...messages, newMsg].map(({ role, content }) => ({
        role,
        content
      }));

      const response = await axios.post('/api/ai-model', {
        messages: cleanMessages, // send only allowed fields
        isFinal
      });

      console.log("response from model --> \n" , response.data);

      if (!isFinal) {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: response.data?.resp,
            ui: response.data?.ui
          }
        ]);
      }
      else{
        setTripDetails(response?.data?.trip_plan);
        await saveTripDetail({
          tripDetail : response?.data?.trip_plan,
          tripId : uuidv4(),
          uid : userDetails?._id,
        })
      }

    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className = 'h-[85vh] flex flex-col'>

      {
        !messages.length && <EmptyChat handleSelectOption = {(v : string) => setUserInput(v)}/>

        // <TripDuration handleSelectOption={(v : string) => setUserInput(v)} />
      }

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
              <div className = 'max-w-lg bg-[#5085A5] text-white px-4 py-2 rounded-lg leading-relaxed'>

                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {msg.content}
                </ReactMarkdown>
                {renderGenUI(msg.ui ?? '')}
              </div>
            </div>
        ))
      }

      {
        loading &&  
        <div className = 'flex justify-start m-5'>
          <div className = 'max-w-lg bg-[#5085A5] text-white px-4 py-2 rounded-lg'>
            <Loader className = 'animate-spin'/>
          </div>
        </div>
      }

     </section>
     {/* User Input */}
     <section>
      <div className = 'relative border rounded-2xl m-4 mt-6'>
          <Textarea 
            placeholder = 'Start typing here'
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
