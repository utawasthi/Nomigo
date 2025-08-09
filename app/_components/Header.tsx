import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const menuOptions = [
  {
    name : 'Home',
    path : '/'
  },
  {
    name : 'Pricing',
    path : '/pricing'
  },{
    name : 'Contact Us',
    path : '/contact-us'
  }
]

function Header() {
  return (
    <div className = 'flex justify-between pt-3 px-3 pb-2 items-center border-b-1'>
      <div className = 'flex items-center gap-1'>
        <Image
          src = {'/logo.png'}
          alt = {'logo'}
          width = {50}
          height = {50}
          className = 'p-2 h-[45px] w-[45px]'
        />
        <h2 className = 'font-bold text-2xl tracking-wide'>
          Nomigo
        </h2>
      </div>
      <div className = 'flex justify-center items-center gap-4'>
        {
          menuOptions.map((item , idx) => (
            <div 
              key = {idx}
              className = 'font-semibold text-md hover:scale-105 transition-al cursor-pointer hover:border-b hover:border-[#687864]'
            >
              {item.name}
            </div>
          ))
        }
      </div>
      <Button
       className = 'cursor-pointer'
      >
        Get Started
      </Button>
    </div>
  )
}

export default Header
