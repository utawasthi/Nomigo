import { Timeline } from "@/components/ui/timeline";
import { Hotel } from "./ChatBox";
import Image from "next/image";
import { Clock, ExternalLink, Star, Ticket, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const trip_data = {
  budget: "Luxury",
  destination: "Kolkata",
  duration: "5 days",
  group_size: "Family of 4",
  hotels: [
    {
      description:
        "Iconic heritage property in the heart of the city offering colonial elegance, spacious family suites, award-winning spa and rooftop pool.",
      geo_coordinates: {
        latitude: 22.5697,
        longitude: 88.3499,
      },
      hotel_address:
        "15, Jawaharlal Nehru Rd, Esplanade, Kolkata 700013",
      hotel_image_url:
        "https://images.trvl-media.com/lodging/1000000/50000/10000/9000/8998ad5a.jpg",
      hotel_name: "The Oberoi Grand Kolkata",
      price_per_night: "₹25,000",
      rating: 4.8,
    },
    {
      description:
        "Set in 6 acres of gardens near the zoo; lavish rooms, kids’ club, multiple fine-dining restaurants and a serene pool.",
      geo_coordinates: {
        latitude: 22.5389,
        longitude: 88.3404,
      },
      hotel_address:
        "34B, Belvedere Rd, Alipore, Kolkata 700027",
      hotel_image_url:
        "https://images.trvl-media.com/lodging/3000000/2090000/2081500/2081484/2081484_1.jpg",
      hotel_name: "Taj Bengal",
      price_per_night: "₹22,000",
      rating: 4.7,
    },
    {
      description:
        "India’s tallest luxury hotel tower with grand atrium, tech-forward rooms, infinity pool and acclaimed Bengali restaurants.",
      geo_coordinates: {
        latitude: 22.5497,
        longitude: 88.3953,
      },
      hotel_address:
        "JBS Haldane Ave, Tangra, Kolkata 700046",
      hotel_image_url:
        "https://images.trvl-media.com/lodging/21000000/20290000/20288400/20288310/9f3a8e0f.jpg",
      hotel_name: "ITC Royal Bengal",
      price_per_night: "₹20,000",
      rating: 4.6,
    },
  ],
  itinerary: [
    {
      activities: [
        {
          best_time_to_visit: "5 pm – 7 pm (sunset glow)",
          geo_coordinates: {
            latitude: 22.5448,
            longitude: 88.3426,
          },
          place_address:
            "Victoria Memorial Hall, 1, Queens Way, Kolkata 700071",
          place_details:
            "Marble-clad icon of the Raj surrounded by 64 acres of gardens and a sound-and-light show.",
          place_image_url:
            "https://upload.wikimedia.org/wikipedia/commons/4/4c/Victoria_Memorial_Kolkata.jpg",
          place_name: "Victoria Memorial",
          ticket_pricing: "₹30 (Indians) ₹500 (foreigners)",
          time_travel_each_location: "15 min from hotel",
        },
        {
          best_time_to_visit: "7:30 pm – 9:30 pm",
          geo_coordinates: {
            latitude: 22.5667,
            longitude: 88.3419,
          },
          place_address:
            "Prinsep Ghat Jetty, Strand Rd, Kolkata 700021",
          place_details:
            "Luxury dinner cruise on the Hooghly with live classical music and illuminated Howrah Bridge views.",
          place_image_url:
            "https://upload.wikimedia.org/wikipedia/commons/7/7b/Prinsep_Ghat_Kolkata.jpg",
          place_name: "Princep Ghat River Cruise",
          ticket_pricing:
            "₹2,500 per adult (private table)",
          time_travel_each_location:
            "10 min drive or 25 min heritage tram",
        },
      ],
      best_time_to_visit_day: "4:30 pm – 9:30 pm",
      day: 1,
      day_plan: "Arrival & Heritage Stroll",
    },
    {
      activities: [
        {
          best_time_to_visit:
            "8 am – 10 am (cooler & fewer crowds)",
          geo_coordinates: {
            latitude: 22.6549,
            longitude: 88.3578,
          },
          place_address: "Dakshineswar, Kolkata 700076",
          place_details:
            "Sprawling 19th-century temple on the riverbank; private guided darshan and aarti experience.",
          place_image_url:
            "https://upload.wikimedia.org/wikipedia/commons/8/8f/Dakshineswar_Kali_Temple.jpg",
          place_name: "Dakshineswar Kali Temple",
          ticket_pricing: "Free (VIP pass arranged)",
          time_travel_each_location:
            "45 min by luxury coach",
        },
        {
          best_time_to_visit: "11 am – 1 pm",
          geo_coordinates: {
            latitude: 22.5732,
            longitude: 88.3639,
          },
          place_address: "College St, Kolkata 700073",
          place_details:
            "Heritage book-market walk followed by breakfast at the legendary intellectual café.",
          place_image_url:
            "https://upload.wikimedia.org/wikipedia/commons/8/8a/College_Street_Book_Market.jpg",
          place_name:
            "College Street & Indian Coffee House",
          ticket_pricing:
            "Breakfast approx ₹1,000 for family",
          time_travel_each_location: "20 min",
        },
        {
          best_time_to_visit: "7 pm – 10 pm",
          geo_coordinates: {
            latitude: 22.5503,
            longitude: 88.3529,
          },
          place_address: "Park St, Kolkata 700016",
          place_details:
            "Progressive gourmet tour: kathi rolls at Nizam’s, Anglo-Indian fare at Flurys, and craft cocktails at Olypub – all chauffeured.",
          place_image_url:
            "https://upload.wikimedia.org/wikipedia/commons/3/3f/Park_Street_Kolkata.jpg",
          place_name: "Park Street Food Safari",
          ticket_pricing: "All-inclusive package ₹5,000 pp",
          time_travel_each_location:
            "Walking between venues",
        },
      ],
      best_time_to_visit_day: "8:00 am – 10:00 pm",
      day: 2,
      day_plan: "Culture & Food Trail",
    },
    {
      activities: [
        {
          best_time_to_visit: "9:30 am – 1 pm",
          geo_coordinates: {
            latitude: 22.5418,
            longitude: 88.3962,
          },
          place_address:
            "J.B.S. Haldane Ave, Kolkata 700046",
          place_details:
            "Asia’s largest science centre—interactive space theatre, dark-ride, and butterfly garden perfect for kids and adults.",
          place_image_url:
            "https://upload.wikimedia.org/wikipedia/commons/7/7b/Science_City_Kolkata.jpg",
          place_name: "Science City",
          ticket_pricing: "₹200 pp (premium entry)",
          time_travel_each_location: "20 min",
        },
        {
          best_time_to_visit: "3 pm – 6 pm",
          geo_coordinates: {
            latitude: 22.5414,
            longitude: 88.3433,
          },
          place_address: "Cathedral Rd, Kolkata 700020",
          place_details:
            "Private gallery tour of Bengal renaissance masterpieces followed by an indie Bengali film at Nandan.",
          place_image_url:
            "https://upload.wikimedia.org/wikipedia/commons/2/2a/Academy_of_Fine_Arts_Kolkata.jpg",
          place_name: "Academy of Fine Arts & Nandan",
          ticket_pricing:
            "Gallery free; film ₹150 pp (VIP seats)",
          time_travel_each_location: "30 min",
        },
      ],
      best_time_to_visit_day: "9:00 am – 8:00 pm",
      day: 3,
      day_plan: "Art & Science Adventure",
    },
    {
      activities: [
        {
          best_time_to_visit: "6 am – 5 pm (full-day)",
          geo_coordinates: {
            latitude: 22.1229,
            longitude: 88.8858,
          },
          place_address: "Sajnekhali, Sundarbans 743370",
          place_details:
            "Helicopter transfer to the world’s largest mangrove forest; boat safari to spot Royal Bengal tigers, crocodiles and rare birds, luxury forest lodge lunch.",
          place_image_url:
            "https://upload.wikimedia.org/wikipedia/commons/2/2d/Sundarban_tiger.jpg",
          place_name: "Sundarbans Day-Excursion",
          ticket_pricing:
            "₹55,000 for family (heli-safari package)",
          time_travel_each_location: "1 hr heli each way",
        },
        {
          best_time_to_visit: "9:30 pm – 11:30 pm",
          geo_coordinates: {
            latitude: 22.5503,
            longitude: 88.353,
          },
          place_address:
            "The Park Hotel, 17, Park St, Kolkata 700016",
          place_details:
            "Kolkata’s premier upscale nightclub with live EDM, signature molecular cocktails and private family booth.",
          place_image_url:
            "https://images.trvl-media.com/hotels/2000000/1530000/1521600/1521583/1521583_1.jpg",
          place_name: "Roxy – The Park",
          ticket_pricing:
            "Cover ₹3,000 pp (includes drinks)",
          time_travel_each_location: "10 min drive",
        },
      ],
      best_time_to_visit_day: "6:00 am – 11:00 pm",
      day: 4,
      day_plan: "Nature & Nightlife",
    },
    {
      activities: [
        {
          best_time_to_visit: "10 am – 1 pm",
          geo_coordinates: {
            latitude: 22.5188,
            longitude: 88.3964,
          },
          place_address:
            "Syed Amir Ali Ave, Beck Bagan, Kolkata 700017",
          place_details:
            "India’s only luxury mall in the East—Louis Vuitton, Gucci, bespoke jewellery, and kids’ play zone.",
          place_image_url:
            "https://upload.wikimedia.org/wikipedia/commons/4/4f/Quest_Mall_Kolkata.jpg",
          place_name: "Quest Mall Luxury Shopping",
          ticket_pricing: "Shopping budget unlimited",
          time_travel_each_location: "25 min",
        },
        {
          best_time_to_visit: "3 pm – 4 pm",
          geo_coordinates: {
            latitude: 22.5559,
            longitude: 88.3618,
          },
          place_address:
            "54A, A.J.C. Bose Rd, Kolkata 700016",
          place_details:
            "Private prayer tour at Mother Teresa’s tomb and museum; deeply moving family experience.",
          place_image_url:
            "https://upload.wikimedia.org/wikipedia/commons/8/8c/Mother_House_Kolkata.jpg",
          place_name:
            "Mother House (Mother Teresa’s Missionaries of Charity)",
          ticket_pricing: "Free (donation encouraged)",
          time_travel_each_location: "20 min",
        },
      ],
      best_time_to_visit_day: "9:00 am – 8:00 pm",
      day: 5,
      day_plan: "Shopping & Departure",
    },
  ],
  origin: "Goa",
}

function Itinerary() {

  const data = [
    {
      title: "Recommended Hotels",
      content: (
        <div className = 'flex flex-col gap-4' key = {1}>
          {trip_data.hotels.map((hotel : Hotel , idx) => (
            <div 
              key = {idx}
              className = 'flex flex-col gap-2'
            >
             <Image
                src = {'/demo-hotel.jpg'}
                alt = {'demo-hotel'}
                height = {200}
                width = {400}
                className = 'h-[200px] w-[400px] object-cover rounded-xl shadow-xl'
              />
              <h2
                className = 'text-gray-500 font-medium'
              >
                {hotel?.hotel_name}
              </h2>
              <h2
                className = 'text-gray-500 font-medium'
              >
                {hotel?.hotel_address}
              </h2>
              <div 
                className = 'text-gray-500 font-medium flex flex-col gap-2'
              >
                <p className = 'text-black flex items-center gap-3'>
                  <Wallet className = 'text-red-900'/> 
                  {hotel?.price_per_night}
                </p>
                <p className = 'text-green-800 flex items-center gap-3'>
                  <Star className = 'text-yellow-400'/> {hotel?.rating}
                </p>
                {/* <p className = 'text-sm font-light'>
                  {hotel?.description}
                </p> */}
              </div>
              <Link 
                href = {'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotel_name} target = '_blank'
              >
                <Button className = 'mt-1 cursor-pointer w-3/4'>
                  View <ExternalLink/>
                </Button>
              </Link>
            </div>
          ))}
        </div>
      ),
    },
    ...trip_data?.itinerary.map((dayData , idx) => ({
       title : `Day ${dayData?.day}`,
       content : (
        <div className = 'flex flex-col gap-3' key = {2}>
          <p>
            Best Time : <span className = 'text-primary font-bold'>{dayData?.best_time_to_visit_day}</span>
          </p>
          <div className = 'grid grid-cols-1 md:grid-cols-2 gap-4'>
            {
              dayData?.activities.map((item , idx) => (
                <div 
                  key = {idx}
                  className = 'flex flex-col gap-3'
                >
                  <Image
                    src = {'/demo-hotel.jpg'}
                    alt = {'deme-hotel'}
                    height = {150}
                    width = {250}
                    className = 'h-[150px] w-[250px] object-cover rounded-xl'
                  />
                  <h2 className = 'font-medium text-lg text-gray-500'>
                    {item?.place_name}
                  </h2>
                  <p className = 'font-light text-gray-700 line-clamp-2 text-sm'>
                    {item?.place_details}
                  </p>
                  <h2 className = 'text-[#687864] font-medium text-md'>
                    {item?.ticket_pricing}
                  </h2>
                  <h2 className = 'flex items-center gap-2 text-gray-500 text-sm'>
                    <Clock size = {17}/> {item?.time_travel_each_location}
                  </h2>
                  <Link 
                    href = {`https://www.google.com/maps/search/?api=1&query=${item?.place_name}`} target = '_blank'
                  >
                    <Button
                      className = 'cursor-pointer w-full'
                    >
                      View <ExternalLink/>
                    </Button>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
       )
    }))
  ];

  return (
    <div className="relative w-full overflow-auto h-[95vh]">
      <Timeline data={data} trip_data = {trip_data}/>
    </div>
  );
}

export default Itinerary
