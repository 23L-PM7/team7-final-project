// import { HomePageCards } from "../components/homePageCard/HomePageCard";

// export default function Home() {
//   return (
//     <div>
//       <HomePageCards />
//     </div>
//   );
// }
"use client"
import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import * as React from 'react';

const HomePageCards = () => {
  const searchParams = useSearchParams()
  const mapFilter = searchParams.get('map')

  const cardsData = [
    {
      id: 1,
      region: 'huvsgul',
      image: '/images/Central Mongolia 1.JPG',
      // other card data
    },
    {
      id: 2,
      region: 'omnogovi',
      image: '/images/Eastern Mongolia 1.JPG',
      // other card data
    },
    {
      id: 3,
      region: 'suhbaatar',
      image: '/images/Montane Mongolia 1.JPG',
      // other card data
    },
    {
      id: 4,
      region: 'bayan olgii',
      image: '/images/Western Mongolia 1.JPG',
      // other card data
    },
    // Add more cards as needed
  ]

  const filteredCards = cardsData.filter((card) => {
    if (!mapFilter) {
      return true // Show all cards if no filter is applied
    }
    return card.region === mapFilter
  })

  return (
    <div className="flex flex-wrap gap-4">
      {filteredCards.map((card) => (
        <div key={card.id} className="flex flex-col gap-2">
          <Image
            alt="Card Image"
            className="rounded-lg"
            height={300}
            width={300}
            src={card.image}
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">{card.region}</h2>
            {/* Add other card details */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomePageCards