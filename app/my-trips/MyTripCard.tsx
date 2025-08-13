import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { myTripType } from './page'
import axios from 'axios';
import Link from 'next/link';

function MyTripCard({trip} : {trip : myTripType}) {

  const [photoUrl , setPhotoUrl] = useState<string>();

  const GetGooglePlaceDetails = async () => {
    const result = await axios.post('/api/google-place-detail',{
      placeName : trip?.tripDetail?.destination
    });
    // console.log(result?.data);
    // in response i get displayName , id and array of photos
    if(result?.data?.error) console.log("error aa gyi --> \n" , result?.data?.error);
    else setPhotoUrl(result?.data);
  }

  useEffect(() => {
    trip?.tripDetail && GetGooglePlaceDetails();
  } , [trip?.tripDetail]);

  return (
    <Link 
     href = {'/view-trip/' + trip?.tripId}
     className = 'p-3 flex flex-col gap-2 shadow-2xl rounded-xl'
    >
      <Image
        src = {photoUrl ? photoUrl : '/demo-hotel.jpg'}
        alt = {'demo-hotel'}
        height = {400}
        width = {400}
        className = 'rounded-xl object-cover h-[300px] w-full'
      />
      <div className="pl-3 flex items-center gap-3 font-bold text-primary">
        <h3>{trip?.tripDetail?.origin}</h3>
        To
        <h3>{trip?.tripDetail?.destination}</h3>
      </div>
      <h2 className = 'text-gray-500 pl-3 tracking-wide font-medium text-sm'>
        <strong className = 'text-primary'>{trip?.tripDetail?.duration}</strong> trip with <strong className = 'text-primary'>{trip?.tripDetail?.budget}</strong> budget
      </h2>

      </Link>
  )
}

export default MyTripCard
