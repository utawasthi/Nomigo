import Image from 'next/image'
import React from 'react'
import { Hotel } from './ChatBox'
import { ExternalLink, Star, Wallet } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function HotelCard({hotel} : {hotel : Hotel}) {
  return (
    <div>
      <div className = 'flex flex-col gap-2'>
        <Image
          src = {'/demo-hotel.jpg'}
          alt = {'demo-hotel'}
          height = {200}
          width = {400}
          className = 'h-[200px] w-[400px] object-cover rounded-xl shadow-xl'
        />
        <h2
          className = 'text-gray-500 font-medium'
        >
          {hotel?.hotel_name}
        </h2>
        <h2
          className = 'text-gray-500 font-medium'
        >
          {hotel?.hotel_address}
        </h2>
        <div 
          className = 'text-gray-500 font-medium flex flex-col gap-2'
        >
          <p className = 'text-black flex items-center gap-3'>
            <Wallet className = 'text-red-900'/> 
            {hotel?.price_per_night}
          </p>
          <p className = 'text-green-800 flex items-center gap-3'>
            <Star className = 'text-yellow-400'/> {hotel?.rating}
          </p>
          {/* <p className = 'text-sm font-light'>
            {hotel?.description}
          </p> */}
        </div>
        <Link 
          href = {'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotel_name} target = '_blank'
        >
          <Button className = 'mt-1 cursor-pointer w-3/4'>
            View <ExternalLink/>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default HotelCard
