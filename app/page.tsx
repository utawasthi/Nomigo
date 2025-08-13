import Image from "next/image";
import Hero from "./_components/Hero";
import { PopularCityList } from "./_components/PopularCityList";

export default function Home() {
  return (
    <div className = 'overflow-x-hidden'>
     <Hero/>
     <PopularCityList/>
    </div>
  );
}
