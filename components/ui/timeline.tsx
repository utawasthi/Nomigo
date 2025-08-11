"use client";
import { TripInfo } from "@/app/create-new-trip/_components/ChatBox";
import { Calendar, Users, Wallet } from "lucide-react";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data , trip_data}: { data: TimelineEntry[] , trip_data : any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="border-l-1 w-full bg-white dark:bg-neutral-950 font-sans"
      ref={containerRef}
    >
      <div className=" max-w-7xl mx-auto py-5 px-4 md:px-8 lg:px-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 text-black dark:text-white max-w-4xl">
          Your Trip Itinerary from <strong className = 'text-primary'>{trip_data?.origin}</strong> to <strong className = 'text-primary'>{trip_data?.destination}</strong> is Ready
        </h2>
        <div className = 'flex items-center gap-7'>
          <div className = 'p-3 bg-gray-200 rounded-2xl'>
            <Calendar/>
            {trip_data?.duration}
          </div>
          <div className = 'p-3 bg-gray-200 rounded-2xl'>
            <Wallet/>
            {trip_data?.budget}
          </div>
          <div className = 'p-3 bg-gray-200 rounded-2xl'>
            <Users/>
            {trip_data?.group_size}
          </div>
        </div>
      </div>

      <div ref={ref} className="my-2 relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="mt-2 flex justify-start md:pt-10 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-[40%]">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 pl-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-14 md:text-2xl font-bold text-primary dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-blue-500 via-pink-500 to-transparent from-[0%] via-[20%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
