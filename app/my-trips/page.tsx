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
import MyTripCard from './MyTripCard';

export type myTripType = {
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
    <div className = 'p-5 md:px-10 lg:px-20'>
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

      <div className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6'>
        {
          myTrips.map((trip , idx) => (
            <MyTripCard key = {idx} trip = {trip}/>
          ))
        }
      </div>
    </div>
  )
}

export default MyTrips
