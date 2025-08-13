"use client"

import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import {Globe2, Landmark, Plane,TramFront,} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import TestimonialCard from './TestimonialCard'
import FeatureCard from './FeatureCard'

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
];

const testimonials = [
  {
    name: 'Akshit Singh',
    avatar: '/img5.jpg',
    category: 'Adventure Seeker',
    rating: 5,
    color: '#f8f4ec', // soft beige
    content:
      'Trip Planner AI made my Patagonia hiking journey seamless. Every day felt like a new discovery, with hidden trails and breathtaking views.',
  },
  {
    name: 'Michael Ross',
    avatar: '/img2.jpg',
    category: 'Family Traveler',
    rating: 4,
    color: '#fff3e6', // light peach
    content:
      'Planning for a family of four is no small task, but this tool made our Italy trip stress-free. Everyone — even the kids — had something to enjoy.',
  },
  {
    name: 'Jessica Pearson',
    avatar: '/img3.jpg',
    category: 'Cultural Explorer',
    rating: 5,
    color: '#f2f0fc', // soft lavender
    content:
      'From art museums in Paris to street food in Bangkok, Trip Planner AI captured my love for culture and crafted a trip that felt personal.',
  },
  {
    name: 'Daniel Hardman',
    avatar: '/img4.jpg',
    category: 'Solo Backpacker',
    rating: 5,
    color: '#eaf7f1', // soft mint green
    content:
      'I love spontaneous travel, but still need a plan. This AI balanced must-see spots with time for exploring at my own pace.',
  },
  {
    name: 'Harvey Spector',
    avatar: '/img1.jpg',
    category: 'Luxury Traveler',
    rating: 4,
    color: '#fef7e5', // warm pale yellow
    content:
      'The curated hotel and fine dining suggestions were flawless. I just wish I had discovered this tool years ago.',
  },
];

const featureCard = [
  {
    image: '/explore.jpg',
    title: 'Optimal Route Planning',
    content:
      'Our AI analyzes your preferences to design the most efficient route, helping you see more in less time.',
    color: '#FAFBFC', // softer than #F7F9FB
  },
  {
    image: '/personalized.jpg',
    title: 'Personalized Itineraries',
    content:
      'Get travel plans tailored to your interests — from hidden gems to iconic landmarks, every day feels unique.',
    color: '#B6D9EC', // softer than #8FC1E3
  },
  {
    image: '/budget.jpg',
    title: 'Smart Budget Management',
    content:
      'Set your budget and let our AI recommend stays, activities, and meals that fit without compromising quality.',
    color: '#7FA5BF', // softer than #5085A5
  },
  {
    image: '/realtime.jpg',
    title: 'Real-Time Travel Adjustments',
    content:
      'Plans change? Our system adapts instantly, giving you updated routes and suggestions on the go.',
    color: '#8FA394', // softer than #687864
  },
];



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
              />
            </div>
          </div>
        </div>
      </div>
      <div className = 'mt-30 px-10 flex flex-col gap-4 items-center justify-center'>
        <h2 className = 'text-lg text-cyan-700 font-medium'>
          Nomigo Trip Planner
        </h2>
        <h2 className = 'text-3xl font-extrabold '>
          The only tool you'll ever need!
        </h2>
        <p className = 'text-sm text-gray-600 tracking-wide text-center'>
          Say goodbye to the stress of planning and hello to personalized recommendations, efficient itineraries, and seamless dining experiences.
        </p>
        <div className = 'px-10 mt-20 grid grid-col-1 md:grid-cols-2 gap-5'>
          {
            featureCard.map((item , idx) => (
              <FeatureCard key = {idx} item = {item} />
            ))
          }
        </div>
      </div>
      <div className = 'mt-20 flex flex-col items-center gap-3 justify-center'>
        <h1 className = 'text-2xl font-bold'>
          Don't take our word for it
        </h1>
        <p className = 'text-gray-500 text-sm md:text-base'>
          See what our users have to say about revolutionizing their travel experiences with <strong className = 'text-primary'>Nomigo.</strong>
        </p>
         <div className = 'px-10 mt-5 grid grid-cols-6 gap-5'>
          {
            testimonials.map((item , idx) => (
              <TestimonialCard
                key = {idx} item = {item}
              />
            ))
          }
         </div>
      </div>
    </div>
  )
}

export default Hero
