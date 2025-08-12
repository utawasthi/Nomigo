"use client"

import { TripInfo } from '@/app/create-new-trip/_components/ChatBox';
import Itinerary from '@/app/create-new-trip/_components/Itinerary';
import { useTripDetail, useUserDetail } from '@/app/provider';
import { api } from '@/convex/_generated/api';
import { useConvex } from 'convex/react';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function ViewTrips() {

  const {tripid} = useParams();
  const {userDetails , setUserDetails} = useUserDetail();
  const [tripData , setTripData] = useState<TripInfo>();
  // @ts-ignore
  const { tripDetailInfo, setTripDetailInfo } = useTripDetail();

  const convex = useConvex();

  const getTrip = async () => {
    try{
      const result = await convex.query(api.tripDetails.GetTripById , {
       uid : userDetails?._id,
       tripId : tripid + "",
      });
      console.log("from view trip --> \n" , result);
      setTripData(result?.tripDetail);
      setTripDetailInfo(result?.tripDetail);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    userDetails && getTrip();
  } , [userDetails]);

  return (
    <div>
      <Itinerary/>
    </div>
  )
}

export default ViewTrips
