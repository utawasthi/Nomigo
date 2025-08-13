"use client"

import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useUser } from '@clerk/nextjs'
import { ArrowDown, Globe2, Landmark, Plane, Send, TramFront, TreePineIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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
    <div className = 'flex flex-col gap-5 items-center justify-center'>
      <div
        className = 'mt-30 max-w-3xl h-[90vh] w-full text-center'
      >
        <div className = 'flex justify-center items-center gap-3'>
          <Image
            src = {'/avatar.jpg'}
            alt = {'avatar'}
            height = {80}
            width = {80}
            className = 'h-[70px] w-[70px] rounded-full object-cover'
          />
          <h2 className = 'text-gray-600 text-lg'>
            by <strong className = 'text-primary tracking-wide'>utawasthi</strong> 
          </h2>
        </div>
        <h1
          className = 'px-5 font-semibold text-5xl md:text-6xl my-10'
        >
          Welcome to Nomigo , <br/> an AI Based
          <span className = 'text-[#31708E]'
          > Trip Planner</span>
        </h1>
        <p className = 'text-medium text-gray-500 font-medium wrap-break-word'>
          From the first spark of wanderlust to the final step of your return, our AI crafts a trip that feels effortless, personal, and unforgettable.
        </p>
          <Link
            href = {'/create-new-trip'}
          >
            <Button
              className = 'my-10 py-8 px-24 text-lg font-light rounded-full cursor-pointer shadow-2xl'
            >
              <TramFront className = 'text-lg mr-1'/> 
              <p className = 'pr-2'>Create a new trip</p>
            </Button>
          </Link>
      </div>
      <div className = 'lg:h-[90vh]'>
        <h1 className = 'text-3xl md:text-4xl lg:text-5xl text-[#685864] font-extrabold text-center mb-10'>
          Your <span className = 'text-[#5085a5]'>AI Powered</span> Trip
        </h1>
        <div className = 'flex flex-col px-30 mt-5 gap-3'>
          <div className = 'grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
            <div className = 'flex justify-center items-center'>
              <Image
                src="/explore.jpg"
                alt="get-inspired"
                width={250}
                height={250}
                className="object-cover rounded-3xl"
                unoptimized
              />
            </div>
            <div className = 'px-18 flex flex-col gap-7 items-center justify-center'>
              <h1 className = 'text-3xl font-bold text-[#685864]'>
                The most optimal
              </h1>
              <div className = 'text-sm text-gray-500 px-5'>
                Craft your perfect itinerary with Trip Planner AI. Our advanced algorithms take into account your selected explore-sights, dining, and lodging preferences to create the optimal travel plan tailored just for you.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
            <div className="px-18 flex flex-col gap-7 items-center justify-center order-2 lg:order-1">
              <h1 className="text-3xl font-bold text-[#685864]">
                Get Inspired
              </h1>
              <div className="text-sm text-gray-500 px-5">
                Extract valuable travel insights from Instagram reels and TikToks, explore the mentioned explore-sights, and effortlessly include them in your own adventure with Trip Planner AI.
              </div>
            </div>
            <div className="flex justify-center items-center order-1 lg:order-2">
              <Image
                src="/inspire.jpg"
                alt="travel-map"
                width={250}
                height={250}
                className="object-cover rounded-3xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
