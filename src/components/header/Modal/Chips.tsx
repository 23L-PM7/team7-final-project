'use client'

import Chip from '@mui/joy/Chip';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const bedroomCounts = [
  1, 2, 3
]


export default function Chips() {
 

  
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const bedroomCounts = searchParams.get('Bedrooms')
  const [bedroomCount, setBedroomsCount] = useState<string | null>(null)

  const createQueryString = useCallback(
    (name: string, value: any) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  );

  const handleBedroomCount = (count: string) => {
    setBedroomsCount(count)
  }

  console.log(bedroomCount);
  
  useEffect(()=> {
    if(bedroomCounts) {
      setBedroomsCount(bedroomCounts)
    }
  },[])

  return (<div className='flex justify-between w-100%'>
    <div onClick={() => handleBedroomCount('1')} className='cursor-pointer hover:border hover:border-black rounded-2xl py-2 px-3 bg-gray-100'>
      <Chip>Any</Chip>
    </div>

  </div>
  )
}