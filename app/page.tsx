import Image from "next/image";
import Hero from "./_components/Hero";
import { PopularCityList } from "./_components/PopularCityList";
import CustomItineraries from "./_components/CustomItineraries";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className = 'overflow-x-hidden'>
     <Hero/>
     <PopularCityList/>
     <CustomItineraries/>
     <Footer/>
    </div>
  );
}