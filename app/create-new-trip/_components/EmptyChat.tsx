import { suggestions } from '@/app/_components/Hero'
import React from 'react'

function EmptyChat({handleSelectOption} : any) {
  return (
    <div className = 'mt-7'>
      <h1 className = 'text-2xl tracking-wide text-center'>Start Planning New <strong className = 'text-primary font-extrabold'>Trip Using AI </strong></h1>
      <p className = 'text-sm text-gray-500 tracking-wide wrap-break-word mt-3 text-center'>
        Discover personalized travel itineraries , find the best destinations and plan your dream vacation effortlessly with the power of AI. Let our smart assistant do the hard work while you enjoy the journey
      </p>

      <div className = 'mt-6 flex flex-col gap-2 items-center'>
        {
          suggestions.map((item , idx) => (
            <div 
              key = {idx}
              className = 'flex items-center gap-8 border rounded-full mt-2 p-2 hover:border-[#8FC1E3] cursor-pointer w-[250px] justify-start px-3'
              onClick = {() => handleSelectOption(item.title)}
            >
              <span>{item.icon}</span>
              <h2 className = 'text-sm text-zinc-900'>{item.title}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default EmptyChat
