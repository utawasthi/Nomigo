"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";

export function PopularCityList() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-3xl font-bold dark:text-neutral-200 font-sans">
          <span
            className="text-4xl font-extrabold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, #687864, #31708E, #5085A5, #8FC1E3, #F7F9FB)",
            }}
          >
            Popular destinations you must consider to visit...
          </span>
      </h2>
        <Carousel items={cards} />
    </div>
  );
}

const cityContent = {
  Paris: {
    description: `
      From the romantic Seine River to the Eiffel Tower's sparkling lights,
      Paris is a city where every street feels like a painting. 
      Stroll through charming cafés, world-class museums, and hidden courtyards.`,
    image:
      "/Paris.jpg",
  },
  Germany: {
    description: `
      A land of fairytale castles, Oktoberfest cheer, and modern cities. 
      Wander through medieval towns, sample pretzels and beer, and explore Berlin's vibrant culture.`,
    image:
      "/Germany.jpg",
  },
  Austria: {
    description: `
      From the snow-covered Alps to Vienna’s imperial palaces, 
      Austria is a perfect blend of natural beauty and musical history.`,
    image:
      "/Austria.jpg",
  },
  "New York": {
    description: `
      The city that never sleeps — skyscrapers, Broadway shows, and the electric buzz of Times Square.
      From Central Park strolls to rooftop sunsets, every moment is iconic.`,
    image:
      "/NewYork.jpg",
  },
  Portugal: {
    description: `
      Cobblestone streets, golden beaches, and soulful Fado music.
      Portugal is where history and coastal charm meet in perfect harmony.`,
    image:
      "Portugal.jpg",
  },
  Switzerland: {
    description: `
      Majestic mountains, crystal-clear lakes, and chocolate that melts in your mouth.
      Switzerland is nature’s postcard.`,
    image:
      "/Switzerland.jpg",
  },
};

const DummyContent = ({ category } : {category : keyof typeof cityContent}) => {
  const { description, image } = cityContent[category] || {};
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {category} —
        </span>{" "}
        {description}
      </p>
      <Image
        src={image}
        alt={`${category} view`}
        height={500}
        width={500}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "Paris",
    title: "Explore the charm of Paris — from the Eiffel Tower to cozy cafés.",
    src: "/Paris.jpg",
    content: <DummyContent category="Paris" />,
  },
  {
    category: "Germany",
    title: "Discover Germany’s castles, beer gardens, and scenic countryside.",
    src: "/Germany.jpg",
    content: <DummyContent category="Germany" />,
  },
  {
    category: "Austria",
    title:
      "Experience Austria’s alpine beauty, music heritage, and coffee culture.",
    src: "/Austria.jpg",
    content: <DummyContent category="Austria" />,
  },
  {
    category: "New York",
    title: "Feel the energy of New York — from Times Square to Central Park.",
    src: "/NewYork.jpg",
    content: <DummyContent category="New York" />,
  },
  {
    category: "Portugal",
    title:
      "Savor Portugal’s beaches, pastel-colored towns, and rich history.",
    src: "/Portugal.jpg",
    content: <DummyContent category="Portugal" />,
  },
  {
    category: "Switzerland",
    title:
      "Explore Switzerland’s mountains, lakes, and charming alpine villages.",
    src: "/Switzerland.jpg",
    content: <DummyContent category="Switzerland" />,
  },
];
