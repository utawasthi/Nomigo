import Image from "next/image"

interface testimonialType {
  name : string;
  avatar : string;
  category : string;
  rating : number;
  color : string;
  content : string;
}

function TestimonialCard({item}: {item : testimonialType}) {
  return (
    <div 
      className = 'border-1 col-span-6 md:col-span-2 p-5 rounded-3xl'
      style = {{backgroundColor : item.color }}
    >
      <div className = 'flex items-center gap-5'>
        <Image 
          src = {item.avatar}
          alt = {'avatar'}
          height = {50}
          width = {50}
          className = 'object-cover rounded-full'
        />
        <div className = 'flex flex-col items-center'>
          <h2 className = 'font-medium'>
            {item.name}
          </h2>
          <h2 className = 'text-sm text-gray-500'>
            {item.category}
          </h2>
        </div>
      </div>
      <div className = 'flex gap-1 mt-2'>
        {
        [...Array(item.rating)].map((x , idx) => (
          <div 
           key = {idx}
           className = ''
          >
            <Star/>
          </div>
        ))
        }
      </div>
      <div className = 'mt-4 text-sm text-gray-600'>
        {item.content}
      </div>
    </div>
  )
}

function Star () {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
      className ="size-4 text-yellow-400"
    >
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
  )
}

export default TestimonialCard
