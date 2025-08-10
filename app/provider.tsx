"use client"

import React, { useEffect } from 'react'
import Header from './_components/Header';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const createUser  = useMutation(api.user.CreateNewUser);

  const {user} = useUser();

  const createNewUser = async () => {
    if(user){
      const res = await createUser({
        email : user?.primaryEmailAddress?.emailAddress + "",
        imageUrl : user?.imageUrl,
        name : user?.fullName + "",
      });
      // console.log(res);
    }
  }

  useEffect(() => {
    user && createNewUser()
  } , [user]);

  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default Provider
