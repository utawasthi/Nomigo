import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
      <div className = 'flex items-center gap-1'>
        <Image
          src = {'/logo.png'}
          alt = {'logo'}
          width = {50}
          height = {50}
          className = 'p-2 h-[45px] w-[45px]'
        />
        <h2 className = 'font-bold text-xl tracking-wide'>
          Nomigo
        </h2>
        <Button>
          Get Started
        </Button>
      </div>
    </div>
  )
}

export default Header
