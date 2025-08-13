import React from 'react'
import FeatureCard from './FeatureCard';

const features = [
  {
    title: "AI-Powered Route Optimization",
    content:
      "Utilize AI for optimal travel routes. Our app ensures a seamless journey, calculating the best paths, travel times, and distances for city tours or cross-country road trips.",
    color: '#8FA394', // soft dark blue
  },
  {
    title: "All-in-One Travel Organizer",
    content:
      "Simplify travel planning with our all-in-one platform. Trip Planner AI consolidates hotel and flight details, manages bookings, and imports tips and guides. Organize all trip details in one place.",
    color: '#7FA5BF', // muted deep blue
  },
  {
    title: "Collaborative Group Planning Made Easy",
    content:
      "Collaborate on itineraries with companions. Our real-time feature makes group travel planning effortless, ensuring everyone stays informed and involved in the process.",
    color: '#B6D9EC', // soft dark teal
  },
  {
    title: "Smart Budget & Expense Tracking",
    content:
      "Stay on top of your travel expenses with our integrated budget tracker. Categorize spending, set budget limits, and receive alerts to help you manage costs effortlessly.",
    color: '#FAFBFC', // soft charcoal blue
  },
];

function CustomItineraries() {
  return (
    <div className = 'border-t-2 p-6 flex flex-col gap-5 border-b-2 m-3'>
      <h2 className = 'mt-6 text-center text-3xl font-bold'>
        Customized Itineraries for Every Travel Dream
      </h2>
      <div className = 'text-gray-600 font-light'>
        Trip Planner AI is your ultimate companion for any travel scenario. Whether it's a solo adventure, a family vacation, or a group expedition, our app tailors every aspect of your journey. Experience the convenience of:
      </div>
      <div className = 'px-10 my-20 grid grid-col-1 md:grid-cols-2 gap-5'>
        {
          features.map((item , idx) => (
            <FeatureCard key = {idx} item = {item} />
          ))
        }
      </div>
    </div>
  )
}

export default CustomItineraries
