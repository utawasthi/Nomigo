"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Activity } from './ChatBox'
import { Clock, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import axios from 'axios'

function PlaceCard({item} : {item : Activity}) {

  const [photoUrl , setPhotoUrl] = useState<string>();

  const GetGooglePlaceDetails = async () => {
    const result = await axios.post('/api/google-place-detail',{
      placeName : item?.place_name + ":" + item?.place_address,
    });
    console.log(result?.data);
    // in response i get displayName , id and array of photos
    if(result?.data?.error) console.log("error aa gyi --> \n" , result?.data?.error);
    else setPhotoUrl(result?.data);
  }

  useEffect(() => {
    item && GetGooglePlaceDetails();
  } , [item]);


  return (
    <div className = 'flex flex-col gap-3'>
      <Image
        src = {photoUrl ? photoUrl : '/demo-hotel.jpg'}
        alt = {'deme-hotel'}
        height = {150}
        width = {250}
        className = 'h-[150px] w-[250px] object-cover rounded-xl'
      />
      <h2 className = 'font-medium text-lg text-gray-500'>
        {item?.place_name}
      </h2>
      <p className = 'font-light text-gray-700 line-clamp-2 text-sm'>
        {item?.place_details}
      </p>
      <h2 className = 'text-[#687864] font-medium text-md'>
        {item?.ticket_pricing}
      </h2>
      <h2 className = 'flex items-center gap-2 text-gray-500 text-sm'>
        <Clock size = {17}/> {item?.time_travel_each_location}
      </h2>
      <Link 
        href = {`https://www.google.com/maps/search/?api=1&query=${item?.place_name}`} target = '_blank'
      >
        <Button
          className = 'mt-1 cursor-pointer w-3/4'
        >
          View <ExternalLink/>
        </Button>
      </Link>
    </div>
  )
}

export default PlaceCard
