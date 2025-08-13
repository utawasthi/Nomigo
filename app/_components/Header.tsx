import { Button } from '@/components/ui/button'
import { SignInButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const menuOptions = [
  {
    name : 'Home',
    path : '/'
  },
  {
    name : 'Contact Us',
    path : '/contact-us'
  }
]

function Header() {

  const {user} = useUser();

  const path = usePathname();
  console.log(path);

  return (
    <div className = 'flex justify-between px-3 items-center border-b-1'>
      <div className = 'flex items-center gap-1'>
        <Image
          src = {'/logo.png'}
          alt = {'logo'}
          width = {70}
          height = {70}
          className = 'object-contain'
        />
        <h2 className = 'font-extrabold text-3xl text-[#687864]'>
          Nomigo
        </h2>
      </div>
      <div className = 'flex justify-center items-center gap-4'>
        {
          menuOptions.map((item , idx) => (
            <Link
              href = {item.path} 
              key = {idx}
              className = 'font-semibold text-md hover:scale-105 transition-al cursor-pointer hover:border-b hover:border-[#687864]'
            >
              {item.name}
            </Link>
          ))
        }
      </div>
      {
        !user ? <SignInButton mode = 'modal'>
          <Button
            className = 'cursor-pointer'
          >
            Get Started
          </Button>
        </SignInButton>
        : 
        path === '/create-new-trip' ?  
         <Link href = {'/my-trips'}>
          <Button
            className = 'cursor-pointer'
          >
            My Trips
          </Button>
        </Link>
        :
        <Link href = {'/create-new-trip'}>
          <Button
            className = 'cursor-pointer'
          >
            Create New Trip
          </Button>
        </Link>
      }
    </div>
  )
}

export default Header
