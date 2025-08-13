import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
   <div className = 'p-3'>
      <div className = 'grid grid-cols-9 py-10 px-3 gap-15 mb-10'>
        <div className = 'col-span-9 md:col-span-3 flex flex-col gap-2'>
          <div className = 'flex gap-2 items-center'>
            <Image 
              src = {'/logo.png'}
              alt = "logo"
              height = {50}
              width = {50}
              className = 'object-contain rounded-full'
            />
            <h2 className = 'text-xl font-bold text-[#687864]'>
              Nomigo 
            </h2>
          </div>
          <div className = 'text-gray-500'>
            Turn your next trip into a hassle-free experience with Trip Planner AI.
          </div>
        </div>
        <div className = 'col-span-9 md:col-span-6 grid grid-cols-9 gap-3'>
          <div className = 'col-span-3 flex flex-col gap-2'>
            <h2 className = 'font-bold'>
              Legal
            </h2>
            <Link 
              href = {'/footer-links'}
              className = 'font-light cursor-pointer text-sm'
            >
              Terms and Conditions
            </Link>
            <Link 
              href = {'/footer-links'}
              className = 'font-light cursor-pointer text-sm'
            >
            Privacy Policy
            </Link>
          </div>
          <div className = 'col-span-3'>
            <h2 className = 'font-bold'>
              Support
            </h2>
            <Link 
              href = {'/footer-links'}
              className = 'font-light cursor-pointer text-sm'
            >
              Contact Us
            </Link>
          </div>
          <div className = 'col-span-3 flex flex-col gap-2'>
            <h2 className = 'font-bold'>
              Itinerareies
            </h2>
            <Link 
              href = {'/footer-links'}
              className = 'font-light cursor-pointer text-sm'
            >
              Community Trips
            </Link>
            <Link 
              href = {'/footer-links'}
              className = 'font-light cursor-pointer text-sm'
            >
              Find Destinations
            </Link>
          </div>
        </div>
      </div>
      <div className = 'border-t-[0.1px] border-black p-5 text-gray-500'>
        © 2025 Nomigo. All rights reserved
      </div>
   </div>
  )
}

export default Footer
