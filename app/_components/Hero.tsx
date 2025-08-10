"use client"

import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useUser } from '@clerk/nextjs'
import { ArrowDown, Globe2, Landmark, Plane, Send } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export const suggestions = [
  {
    title : 'Create new trip',
    icon : <Globe2 className = 'text-blue-400 h-4 w-4'/>
  },
   {
    title : 'Inspire me where to go',
    icon : <Plane className = 'text-blue-400 h-4 w-4'/>
  },
   {
    title : 'Discover hidden gems',
    icon : <Landmark className = 'text-blue-400 h-4 w-4'/>
  },
   {
    title : 'Adventure destination',
    icon : <Globe2 className = 'text-blue-400 h-4 w-4'/>
  }
]

function Hero() {

  const {user} = useUser();

  const router = useRouter();

  const handleOnSend = () => {
    if(!user){
      router.push('/sign-in');
      return;
    }

    // Navigate to create trip planner
    router.push('/create-new-trip');

  }

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
               <Send 
                 className = 'h-4 w-4'
                 onClick = {() => handleOnSend()}
               />
            </Button>
          </div>
        </div>
        <div className = 'flex gap-5 justify-center items-center'>
          {
            suggestions.map((item , idx) => (
              <div 
                key = {idx}
                className = 'flex items-center gap-2 border rounded-full mt-2 p-2 hover:bg-[#8FC1E3] cursor-pointer'
              >
                {item.icon}
                <h2 className = 'text-sm'>{item.title}</h2>
              </div>
            ))
          }
        </div>
        <h2 className = 'my-7 mt-14 flex justify-center gap-2 '>
          Not sure where to start ? 
          <strong>See how it works</strong> <ArrowDown/>
        </h2>
        <HeroVideoDialog
          className="block dark:hidden p-4 m-4s"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/watch?v=T-oy3tsCJas&t=304s"
          thumbnailSrc="https://i.ytimg.com/vi/T-oy3tsCJas/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDP9rMhV1xiha48of092SDJHiBq9g"
          thumbnailAlt="I wanted to see Germany"
        />
      </div>
    </div>
  )
}

export default Hero
