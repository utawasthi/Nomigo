"use client"

import React, { useContext, useEffect, useState } from 'react'
import Header from './_components/Header';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { UserContext } from '@/context/UserContext';
import { TripContextType, TripDetailContext } from '@/context/TripDetailContext';
import { TripInfo } from './create-new-trip/_components/ChatBox';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const createUser  = useMutation(api.user.CreateNewUser);

  const {user} = useUser();
  
  const [userDetails , setUserDetails] = useState<any>();
  const [tripDetailInfo , setTripDetailInfo] = useState<TripInfo | null>(null);

  const createNewUser = async () => {
    if(user){
      const res = await createUser({
        email : user?.primaryEmailAddress?.emailAddress + "",
        imageUrl : user?.imageUrl,
        name : user?.fullName + "",
      });
      setUserDetails(res);
      // console.log(res);
    }
  }

  useEffect(() => {
    user && createNewUser();
    console.log('user id' , user?.id);
  } , [user]);

  return (
    <UserContext.Provider value = {{userDetails , setUserDetails}}>
      <TripDetailContext.Provider value = {{tripDetailInfo , setTripDetailInfo}}>
        <div>
          <Header/>
          {children}
        </div>
      </TripDetailContext.Provider>
    </UserContext.Provider>
  )
}

export default Provider

export const useUserDetail = () => {
  return useContext(UserContext);
}

export const useTripDetail = () : TripContextType | undefined => {
  return useContext(TripDetailContext);
}