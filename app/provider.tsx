"use client"

import React, { useContext, useEffect, useState } from 'react'
import Header from './_components/Header';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { UserContext } from '@/context/UserContext';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const createUser  = useMutation(api.user.CreateNewUser);

  const {user} = useUser();
  
  const [userDetails , setUserDetails] = useState<any>();

  const createNewUser = async () => {
    if(user){
      const res = await createUser({
        email : user?.primaryEmailAddress?.emailAddress + "",
        imageUrl : user?.imageUrl,
        name : user?.fullName + "",
      });
      setUserDetails(user);
      // console.log(res);
    }
  }

  useEffect(() => {
    user && createNewUser()
  } , [user]);

  return (
    <UserContext.Provider value = {{userDetails , setUserDetails}}>
      <div>
        <Header/>
        {children}
      </div>
    </UserContext.Provider>
  )
}

export default Provider

export const useUserDetail = () => {
  return useContext(UserContext);
}