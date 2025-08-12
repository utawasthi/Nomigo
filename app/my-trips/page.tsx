"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUserDetail } from '../provider';
import { TripInfo } from '../create-new-trip/_components/ChatBox';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

type myTripType = {
  tripId : string;
  tripDetail : TripInfo;
}

function MyTrips() {

  const [myTrips , setMyTrips] = useState<myTripType[]>([]);
  const convex = useConvex();
  const {userDetails , setUserDetails} = useUserDetail();

  const getUserTrips = async () => {
    try{
      const result = await convex.query(api.tripDetails.GetUserTrips , {
        uid : userDetails?._id
      })
      console.log("trip details from the db -->\n" , result);
      setMyTrips(result);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    userDetails && getUserTrips();
  } , [userDetails]); 

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

      <div>
        {
          myTrips.map((trip , idx) => (
            <div key = {idx}>
              <Image
                src = {'/demo-hotel.jpg'}
                alt = {'demo-hotel'}
                height = {400}
                width = {400}
                className = 'rounded-xl object-cover'
              />
              <div className="flex items-center gap-3 font-bold text-primary">
                <h2>{trip?.tripDetail?.origin}</h2>
                <ArrowRight className="text-black font-light" />
                <h2>{trip?.tripDetail?.destination}</h2>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyTrips
