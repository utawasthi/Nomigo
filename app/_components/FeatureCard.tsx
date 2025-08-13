import Image from "next/image"

interface FeatureType {
  image? : string;
  title : string;
  content : string;
  color : string;
}

function FeatureCard({item} : {item : FeatureType}) {
  return (
    <div 
      className = 'border-1 shadow-xl rounded-2xl p-5'
      style = {{backgroundColor : item.color}}
    >
      <div className = 'flex justify-center gap-4 items-center'>
        {item.image && <Image
          src = {item.image}
          alt = 'feature-image'
          height = {110}
          width = {110}
          className = 'object-cover bg-white rounded-full'
        />}
        <h2 className = 'text-xl font-extrabold'>
          {item.title}
        </h2>
      </div>
      <div className = 'mt-3 text-gray-700 text-sm lg:text-base'>
        {item.content}
      </div>
    </div>
  )
}

export default FeatureCard
