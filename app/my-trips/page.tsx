"use client"

import React, { useState } from 'react'
import { TripInfo } from '../create-new-trip/_components/ChatBox';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function MyTrips() {

  const [myTrips , setMyTrips] = useState<TripInfo[]>([]);

  return (
    <div className = 'px-10 p-10 md:px-24 lg:px-48'>
      <h2 className = 'font-bold text-2xl'>
        My Trips
      </h2>
      {
        myTrips?.length === 0 && 
        <div className = 'm-7 p-7 border rounded-2xl flex flex-col items-center gap-5'>
          <h2>
            You don't have any trip plan created !!
          </h2>
          <Link href = {'/create-new-trip'}>
            <Button>
                Create New Trip
            </Button>
          </Link>
        </div>
      }
    </div>
  )
}

export default MyTrips
